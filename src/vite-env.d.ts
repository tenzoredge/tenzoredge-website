/// <reference types="vite/client" />

interface ImportMetaEnv {
  /** Google Analytics 4 measurement ID (G-XXXXXXXXXX). Optional: analytics stays off without it. */
  readonly VITE_GA_MEASUREMENT_ID?: string;
  /** Microsoft Clarity project ID. Optional: heatmaps/replays stay off without it. */
  readonly VITE_CLARITY_PROJECT_ID?: string;
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}
