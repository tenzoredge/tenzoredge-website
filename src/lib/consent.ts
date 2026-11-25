/**
 * Consent store for the website (DPDP Act 2023 / DPDP Rules 2025).
 *
 * - Consent is per purpose: "necessary" is always on; every other purpose is off
 *   until the visitor switches it on with a clear affirmative action.
 * - Withdrawing is as easy as giving: the preferences dialog is reachable from
 *   every page (footer → "Cookie preferences").
 * - The record is versioned. Bumping CONSENT_VERSION (e.g. when a new purpose or
 *   tool is added, or the notice changes materially) asks every visitor again.
 * - Records expire after CONSENT_MAX_AGE_DAYS and the visitor is asked again.
 */

export const CONSENT_VERSION = 2;
export const NOTICE_VERSION = '2026-11-24';
const STORAGE_KEY = 'tenzoredge_consent';
const LEGACY_KEYS = ['tenzoredge_cookie_consent_v1'];
const CONSENT_MAX_AGE_DAYS = 365;

export type ConsentPurpose = 'analytics';

export interface ConsentChoices {
  necessary: true;
  analytics: boolean;
}

export interface ConsentRecord {
  /** Random identifier so a visitor's request about their consent can be matched to this record. */
  id: string;
  version: number;
  noticeVersion: string;
  choices: ConsentChoices;
  /** ISO timestamp of the most recent decision. */
  updatedAt: string;
  method: 'accept_all' | 'reject_all' | 'custom';
}

type Listener = (record: ConsentRecord | null) => void;
const listeners = new Set<Listener>();

function randomId() {
  if (typeof crypto !== 'undefined' && 'randomUUID' in crypto) return crypto.randomUUID();
  return `${Date.now().toString(36)}-${Math.random().toString(36).slice(2, 10)}`;
}

function isValid(r: unknown): r is ConsentRecord {
  if (!r || typeof r !== 'object') return false;
  const rec = r as ConsentRecord;
  if (rec.version !== CONSENT_VERSION || !rec.choices || typeof rec.updatedAt !== 'string') return false;
  const ageDays = (Date.now() - new Date(rec.updatedAt).getTime()) / 86_400_000;
  return Number.isFinite(ageDays) && ageDays <= CONSENT_MAX_AGE_DAYS;
}

/** The visitor's current, valid consent record — or null if they still need to be asked. */
export function getConsent(): ConsentRecord | null {
  try {
    LEGACY_KEYS.forEach((k) => localStorage.removeItem(k));
    const raw = localStorage.getItem(STORAGE_KEY);
    if (!raw) return null;
    const parsed = JSON.parse(raw);
    return isValid(parsed) ? parsed : null;
  } catch {
    return null;
  }
}

export function hasConsent(purpose: ConsentPurpose): boolean {
  return getConsent()?.choices[purpose] === true;
}

export function saveConsent(choices: Omit<ConsentChoices, 'necessary'>, method: ConsentRecord['method']): ConsentRecord {
  const previous = getConsent();
  const record: ConsentRecord = {
    id: previous?.id ?? randomId(),
    version: CONSENT_VERSION,
    noticeVersion: NOTICE_VERSION,
    choices: { necessary: true, ...choices },
    updatedAt: new Date().toISOString(),
    method,
  };
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(record));
  } catch {
    /* storage unavailable (private mode): the choice still applies for this page view */
  }
  listeners.forEach((l) => l(record));
  return record;
}

export function onConsentChange(listener: Listener): () => void {
  listeners.add(listener);
  return () => listeners.delete(listener);
}

/* ---- Preferences dialog: can be opened from anywhere (e.g. footer link) ---- */
const OPEN_EVENT = 'tenzoredge:open-consent-preferences';

export function openConsentPreferences() {
  window.dispatchEvent(new Event(OPEN_EVENT));
}

export function onOpenPreferences(handler: () => void): () => void {
  window.addEventListener(OPEN_EVENT, handler);
  return () => window.removeEventListener(OPEN_EVENT, handler);
}
