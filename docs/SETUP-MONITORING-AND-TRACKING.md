# Phase 2: monitoring and tracking setup

This guide sets up the accounts that show how visitors find and use **tenzoredge.com**, and that warn you when the site goes down. The website code is already done. You only need to create the accounts, copy two IDs into Vercel and redeploy.

Time needed: about **60–90 minutes** in total. Google takes 24–48 hours to start showing reports.

| # | Tool | What it tells you | Cost | Required? |
|---|------|-------------------|------|-----------|
| 1 | Vercel environment variables | Turns tracking on and keeps the contact form working | Free | **Yes** |
| 2 | Google Analytics 4 (GA4) | Visitor numbers, where they come from, which pages work, how many enquiries | Free | **Yes** |
| 3 | Microsoft Clarity | Heatmaps and session recordings: where people click, scroll and give up | Free | **Yes** |
| 4 | Google Search Console | Which Google searches show the site, ranking, indexing problems | Free | **Yes** |
| 5 | Bing Webmaster Tools | The same for Bing, plus ChatGPT and Copilot search, which use Bing | Free | Recommended |
| 6 | UptimeRobot | Email alert if the site goes down | Free | Recommended |
| 7 | Google Business Profile | Shows up in Google Maps and "near me" searches in Bengaluru | Free | Optional |

> **Before you start:** use a business Google account for everything, not a personal one, so the business owns the data. Have your domain's DNS panel open (wherever you bought tenzoredge.com, or Vercel if Vercel manages your DNS). Menu names in these tools change from time to time; if a label below has moved, look for the nearest match.

---

## How tracking works on this site (read once)

- **Nothing loads until the visitor agrees.** Google Analytics and Clarity start only after the visitor clicks *Accept all* or switches Analytics on in the cookie banner. This is what India's DPDP Act requires. If someone rejects, no tracking code is downloaded.
- **If a visitor withdraws consent** later (the *Cookie preferences* link in the footer), tracking stops and the GA and Clarity cookies are deleted.
- **No personal data is sent.** Form contents are never sent to GA. Clarity masks everything typed into form fields.
- **Your numbers will be lower than real traffic**, because only visitors who accept are counted. That is expected. Typically 30–60% accept.
- The site already sends these events to GA4:

| Event | When it fires | Extra details sent |
|-------|---------------|--------------------|
| `page_view` | Every page, including clicks between pages | page path and title |
| `cta_click` | Any click on a link to the Contact page | `cta_label` (button text), `cta_page` (page it was clicked on) |
| `email_click` | Click on the email address | `cta_page` |
| `phone_click` | Click on the phone number | `cta_page` |
| `linkedin_click` | Click on a LinkedIn link | `cta_page` |
| `form_start` | Visitor starts typing in the contact form | `form` |
| `form_error` | Form submission failed | `form`, `reason` (validation / network / http code) |
| `generate_lead` | **Contact form sent successfully: this is your main conversion** | `form`, `service` (which service they picked) |

---

## Step 1: Google Analytics 4

### 1.1 Create the account and property
1. Go to **https://analytics.google.com** and sign in with the business Google account.
2. Click **Start measuring** (or **Admin** (gear icon, bottom left) → **Create** → **Account**).
3. **Account name:** `Tenzor Edge`. Leave the data-sharing boxes **unticked** (recommended, for privacy). Click **Next**.
4. **Property name:** `tenzoredge.com`
   - **Reporting time zone:** `India`
   - **Currency:** `Indian Rupee (₹)`
   - Click **Next**.
5. Business details: pick your industry (*Business & Industrial Markets* or *Computers & Electronics*) and size (*Small*). Click **Next**.
6. Business objectives: tick **Generate leads**. Click **Create** and accept the terms (choose *India* as the country).

### 1.2 Create the web data stream
1. When asked to pick a platform, choose **Web**.
2. **Website URL:** `https://tenzoredge.com` · **Stream name:** `Website`.
3. Leave **Enhanced measurement** on, then click the **gear icon** next to it and make these changes:
   - **Page views** → *Show advanced settings* → **untick "Page changes based on browser history events"**. The site sends its own page views; leaving this on would count every page twice.
   - **Form interactions** → **off**. The site sends its own, more accurate form events.
   - Leave scrolls, outbound clicks, site search, video and file downloads **on**.
   - Click **Save**.
4. Click **Create stream**.
5. Copy the **Measurement ID** shown at the top right. It looks like **`G-XXXXXXXXXX`**. You need it in Step 4.

> Ignore the "install your Google tag" instructions Google shows. The site already contains the code; it only needs the ID.

### 1.3 Privacy settings (important for DPDP)
In **Admin** (gear icon):
1. **Data collection and modification → Data collection:** make sure **Google signals is OFF**. The site also disables it in code. Turning it on would need a change to the Privacy Notice.
2. **Data collection and modification → Data retention:** set **Event data retention** to **14 months**, the longest free option. Otherwise you lose year-on-year comparisons. Click **Save**.
3. Do **not** link Google Ads unless you start advertising, and update the Privacy Notice first if you do.

### 1.4 Exclude your own visits (recommended)
Your own visits would otherwise inflate the numbers.
1. Find your office or home public IP address: search Google for *"what is my ip"*.
2. **Admin → Data streams → Website → Configure tag settings → Show more → Define internal traffic → Create.**
   - Rule name: `Office`, traffic_type value: `internal`, match type: *IP address equals*, value: your IP. Click **Create**.
3. **Admin → Data collection and modification → Data filters:** open **Internal Traffic**, set it to **Active** and save.

> Home internet IPs in India often change. If the filter stops working, update the IP. Alternatively, click *Reject all* on the banner on your own devices; then your visits are never counted.

### 1.5 Register the extra event details (custom dimensions)
Without this step, details like *which button was clicked* or *which service was picked* will not appear in reports.

**Admin → Data display → Custom definitions → Create custom dimension.** Create these five, all with **Scope: Event**:

| Dimension name (what you see) | Event parameter (type exactly) | Description |
|------------------------------|--------------------------------|-------------|
| CTA label | `cta_label` | Text of the button clicked |
| CTA page | `cta_page` | Page where the button was clicked |
| Service selected | `service` | Service picked in the contact form |
| Form name | `form` | Which form |
| Error reason | `reason` | Why a form submission failed |

### 1.6 Mark enquiries as a conversion (key event)
You don't need to **create** an event: the website already sends `generate_lead`. You only **mark** it as a key event.

> If you see a dialog titled **"Choose how to create an event"**, click **Cancel** and close it. Both options in it create a *new* event. Using them would add a second copy of `generate_lead` and count every enquiry twice.

**Option A (recommended): mark it once GA has seen it**
1. Do this after Step 4 (redeploy). Send one test enquiry from the live contact form; see Step 8D.
2. Wait until the event appears in the list. This is usually a few hours, at most 24.
3. **Admin → Data display → Events.** Find `generate_lead` in the list.
4. Click the **star ☆** next to it (or **⋮ → Mark as key event**). The star turns solid.
5. Optional: do the same for `email_click` and `phone_click`.

**Option B: mark it before it has arrived**
1. **Admin → Data display → Key events → New key event.**
2. If a single **"New event name"** box appears, type `generate_lead` exactly and click **Save**.
3. If instead you see **"Choose how to create an event"**, cancel it and use Option A.

To check it worked: **Admin → Key events** should list `generate_lead`. From then on, enquiries show up under *Key events* in the reports.

### 1.7 Useful reports to bookmark (once data arrives)
- **Reports → Realtime:** who is on the site right now. Use this to test (Step 8).
- **Reports → Acquisition → Traffic acquisition:** where visitors come from (Google, LinkedIn, direct).
- **Reports → Engagement → Pages and screens:** most viewed pages and time spent.
- **Reports → Engagement → Events:** click `generate_lead` to see enquiries.
- **Explore → Funnel exploration:** build `page_view (Contact)` → `form_start` → `generate_lead` to see where people drop off in the form.

---

## Step 2: Microsoft Clarity

1. Go to **https://clarity.microsoft.com** and sign in. Use *Sign in with Google* with the same business account, or a Microsoft account.
2. Click **+ New project**.
   - **Name:** `Tenzor Edge Website`
   - **Website URL:** `https://tenzoredge.com`
   - Category: *Business services* (or the closest match).
   - Click **Add new project**.
3. Clarity offers installation methods. **Skip all of them**: choose *Install manually* and close it, or just go to Settings. The site already contains the code.
4. Go to **Settings → Overview**. Copy the **Project ID**, a short code of about 10 letters and numbers, like **`abc12de3fg`**. You need it in Step 4.

### 2.1 Clarity settings
- **Settings → Masking:** choose **Balanced** (the default). It hides everything typed into forms. Choose **Strict** if you want all on-page text hidden in recordings too. Balanced is fine for a marketing site.
- **Settings → Setup → Advanced settings → Cookies:** leave this **on**. The site only allows Clarity cookies after the visitor consents.
- **Settings → Setup → Consent mode / "Require consent"** (if your account shows it): turn it **on**. The site already sends Clarity the consent signal, so this simply matches.
- **Settings → Team:** add anyone else who should see recordings.
- **Optional, Settings → Setup → Google Analytics integration:** connect your GA4 property. This lets you jump from a GA report straight to matching Clarity recordings.

### 2.2 Useful views
- **Dashboard:** look for *Rage clicks* (repeated angry clicks), *Dead clicks* (clicks on things that don't work) and *Quick backs*.
- **Heatmaps:** open the Home, Services and Contact pages. Check how far people scroll and what they click.
- **Recordings:** filter by *Visited URL contains /contact* to watch how people use the form.

---

## Step 3: Resend (contact form email): confirm it is production-ready

The contact form already works locally. Before going live, check two things:

1. **Domain verified:** on **https://resend.com/domains**, `tenzoredge.com` should show **Verified**. If it doesn't, add the DNS records Resend lists (usually 1 MX, 2–3 TXT for SPF and DKIM) at your DNS provider. Wait, then click **Verify**. Without this, emails from `website@tenzoredge.com` will be rejected or go to spam.
2. **API key permissions:** on **https://resend.com/api-keys**, the key used in Vercel should be **Sending access** only, restricted to `tenzoredge.com`. If your current key is "Full access", create a new sending-only key for Vercel.

Optional: add a **DMARC** record at your DNS provider so the emails reach inboxes more reliably:
`Type TXT · Name _dmarc · Value v=DMARC1; p=none;`

---

## Step 4: Add the IDs and keys to Vercel (turns everything on)

1. Go to **https://vercel.com** → your project → **Settings → Environment Variables**.
2. Add each variable below. For **Environment**, tick **Production** only, so test previews don't pollute your analytics. Preview can stay unticked.

| Key | Value | Notes |
|-----|-------|-------|
| `VITE_GA_MEASUREMENT_ID` | `G-XXXXXXXXXX` from Step 1.2 | Public value, safe to expose |
| `VITE_CLARITY_PROJECT_ID` | Project ID from Step 2 | Public value, safe to expose |
| `RESEND_API_KEY` | Your Resend key (`re_…`) | **Secret.** Tick *Sensitive* if offered. Never prefix with `VITE_` |
| `CONTACT_FROM_EMAIL` | Same value as in your local `.env` | e.g. `Tenzor Edge Website <website@tenzoredge.com>` |
| `CONTACT_TO_EMAIL` | `support@tenzoredge.com` | Optional; this is already the default |

3. **Redeploy:** go to **Deployments**, open the latest production deployment, click **⋯** → **Redeploy**. This step is required. `VITE_` values are built into the site, so adding them does nothing until the site is rebuilt.

> If you want to test analytics on your computer too, add the same two `VITE_` lines to your local `.env` and restart `npm run dev`. Your local visits will then appear in GA, so remove them afterwards or keep the internal-traffic filter on.

---

## Step 5: Google Search Console

1. Go to **https://search.google.com/search-console** (same business Google account).
2. Click **Add property** and choose **Domain** (the left option). Enter `tenzoredge.com` with no `https://` and no `www`. This covers every version of the site.
3. Google shows a **TXT record** like `google-site-verification=abc123…`. Copy it.
4. In your DNS provider, add a record: **Type** `TXT`, **Name/Host** `@` (or leave blank), **Value** the copied text. Save.
   - If Vercel manages your DNS: Vercel → **Domains** → `tenzoredge.com` → **DNS Records** → add the TXT record there.
5. Back in Search Console, click **Verify**. If it fails, wait 15–60 minutes for DNS to update and try again.
6. **Submit the sitemap:** left menu **Sitemaps** → enter `sitemap.xml` (the full address is `https://tenzoredge.com/sitemap.xml`) → **Submit**. Status should become *Success* and list 18 pages.
7. **Speed up indexing of key pages:** paste each address below into the search bar at the top (URL inspection) and click **Request indexing**:
   - `https://tenzoredge.com/`
   - `https://tenzoredge.com/services`
   - each of the five service pages
   - `https://tenzoredge.com/contact`
8. **Link it to GA4:** in Google Analytics → **Admin → Product links → Search Console links → Link** → choose the `tenzoredge.com` property → pick the *Website* stream → **Submit**. GA then shows the search phrases people used under *Reports → Search Console*. If you don't see that menu, use *Library* to publish the Search Console collection.

**What to check later:** **Performance** (search phrases, clicks, average position) and **Pages** (anything listed under *Why pages aren't indexed* needs attention). **Core Web Vitals** shows real-user speed once there is enough traffic.

---

## Step 6: Bing Webmaster Tools

1. Go to **https://www.bing.com/webmasters** and sign in. A Google account works.
2. Choose **Import from Google Search Console** and allow access. Bing copies the site and sitemap automatically, with no DNS step.
3. Check **Sitemaps** lists `https://tenzoredge.com/sitemap.xml`. If it doesn't, add it.
4. Optional: **Settings → IndexNow** is not needed. The sitemap is enough for a site this size.

---

## Step 7: UptimeRobot (down-time alerts)

1. Go to **https://uptimerobot.com** and create a free account.
2. Click **+ New monitor**:
   - **Type:** `HTTP(s)` (or `Keyword`, see below)
   - **Friendly name:** `tenzoredge.com`
   - **URL:** `https://tenzoredge.com`
   - **Interval:** 5 minutes (the free plan's minimum)
   - **Alert contact:** your email, plus the mobile app if you want push notifications.
3. Recommended: create a second monitor of **type Keyword** for `https://tenzoredge.com/contact`, keyword `Discuss` (or any word always on that page), alert when **not exists**. This catches a broken deploy where the server answers but the page is wrong.

> Do **not** monitor `/api/contact`. Each check would try to send an email.

Optional: in Vercel → project → **Settings → Notifications**, turn on email alerts for **failed deployments**.

---

## Step 8: Check everything works (about 10 minutes, after redeploy)

Do this in a **private / incognito window**, so the consent banner appears fresh.

**A. Consent is respected**
1. Open `https://tenzoredge.com`. The cookie banner should appear.
2. Press **F12** → **Network** tab, type `google` in the filter. Click **Reject all**. **No** requests to `googletagmanager.com` or `clarity.ms` should appear while you browse.

**B. Google Analytics receives data**
1. Open a fresh private window, open the site, click **Accept all**.
2. Network tab: you should see `gtag/js?id=G-…` and `clarity.ms/tag/…` load.
3. In GA: **Reports → Realtime**. Within about a minute you should see 1 active user and `page_view` events. Click between pages; the page list should update.
4. Click a *Discuss Your Project* button. `cta_click` should appear in Realtime.
5. Optional, for detail: install the **Tag Assistant** Chrome extension, or use GA **Admin → DebugView** while Tag Assistant is connected, to see each event with its parameters.

**C. Clarity receives data**
- Clarity → **Recordings**. Your session appears within about 30 minutes to 2 hours. The dashboard can take up to a day.

**D. Contact form on the live site**
1. Send one real test enquiry from `https://tenzoredge.com/contact`.
2. Check that the email arrives at support@tenzoredge.com and that replying goes to the address you typed in the form.
3. Check that GA Realtime shows **`generate_lead`**.
4. Delete the test email afterwards.

**E. Withdrawing consent works**
- Click **Cookie preferences** in the footer, switch Analytics off and save. In F12 → **Application → Cookies**, the `_ga` and `_clck` cookies should be gone.

If any check fails, note which step and what you saw, and send it to me.

---

## Step 9 (optional): Google Business Profile

Helps you appear in Google Maps and local searches like *"IT consulting Bengaluru"*.
1. Go to **https://business.google.com** → **Add your business**.
2. Business name `Tenzor Edge`. Category: *Information technology consultant* or *Software company*.
3. If you have no public office, choose **"I deliver goods and services to customers"** and **hide your address**. Set the service area to Bengaluru / Karnataka / India.
4. Add the website `https://tenzoredge.com`, phone and hours. Complete verification (postcard, phone or video, whichever Google offers).
5. Use the same name, phone and website everywhere: website footer, LinkedIn, directories.

---

## Your checklist

- [ ] GA4 account and property created (India time zone, INR)
- [ ] Web stream created; "browser history" page views and form interactions turned **off**
- [ ] Google signals **off**, data retention **14 months**
- [ ] Internal traffic filter active (or you reject cookies on your own devices)
- [ ] 5 custom dimensions created
- [ ] `generate_lead` marked as a key event
- [ ] Clarity project created; masking Balanced
- [ ] Resend domain verified; sending-only API key
- [ ] Vercel env vars added (Production): `VITE_GA_MEASUREMENT_ID`, `VITE_CLARITY_PROJECT_ID`, `RESEND_API_KEY`, `CONTACT_FROM_EMAIL`
- [ ] **Redeployed** after adding the variables
- [ ] Search Console verified by DNS; sitemap submitted; key pages requested for indexing
- [ ] Search Console linked to GA4
- [ ] Bing Webmaster Tools imported from Search Console
- [ ] UptimeRobot monitors created
- [ ] All checks in Step 8 passed

---

## After setup: a simple routine

**Weekly (10 minutes)**
- GA4 → **Key events**: how many `generate_lead` this week, and from which source (Traffic acquisition, with the *Key events* column).
- Clarity → **Dashboard**: any rage or dead clicks? Watch 3–5 recordings of visitors who reached `/contact` but didn't send the form.

**Monthly (30 minutes)**
- Search Console → **Performance**: which searches show the site; pages with many impressions but few clicks need a better title or description.
- Search Console → **Pages**: fix anything newly *not indexed*.
- GA4 → **Pages and screens**: pages with high exits or very short time.
- GA4 → **Funnel** (Contact page → `form_start` → `generate_lead`): where do people drop off?

**Then:** pick one or two improvements, make the change, and compare the next month's numbers. Share the findings with me and I can make the changes.

---

## Quick reference

| What | Where |
|------|-------|
| Environment variable names | `.env.example` in this project |
| Tracking code | `src/lib/analytics.ts`, `src/components/AnalyticsTracker.tsx` |
| Consent logic and banner | `src/lib/consent.ts`, `src/components/CookieConsentBanner.tsx` |
| Contact email function | `api/contact.ts` |
| Sitemap (generated at every build) | `https://tenzoredge.com/sitemap.xml` |
| Cookie and privacy text naming GA and Clarity | `src/pages/legal/CookiePolicy.tsx`, `src/pages/legal/PrivacyPolicy.tsx` |
