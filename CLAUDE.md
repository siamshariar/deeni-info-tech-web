# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## What this is

Client-facing marketing website for Deeni Info Tech (deeniinfotech.com), a non-profit that builds Islamic apps (Quran.tube, Quran.radio, DeeniTube, Quran.ac, Hadith.ac, Deeni.tv). Next.js 13 (Pages Router, not App Router), React 18, SCSS Modules, Tailwind utility classes layered on top.

## Commands

```sh
npm run dev      # start dev server (localhost:3000)
npm run build    # production build
npm start        # run a built production server
npm run lint     # next lint — NOT enforced at build time (see gotcha below)
```

No test suite exists in this repo.

## Two git remotes — push to both

```sh
git remote -v
# origin -> bitbucket.org:dit-web/dit-web.git   (primary, PRs live here)
# github  -> github.com/siamshariar/deeni-info-tech-web.git   (mirror)
```
When asked to push, push to both `origin` and `github` unless told otherwise. GitHub's secret-scanning push protection may block a push if `.env`-committing history contains a flagged secret pattern (see gotcha below) — this requires the user to click GitHub's "allow secret" link, it cannot be bypassed from the CLI.

## Architecture

**Routing**: Next.js Pages Router — file-based routes under `src/pages/`. No App Router conventions apply (no server components, no `"use client"`, no route groups).

**App detail pages, two different patterns coexist**:
- The main product apps (Quran.tube, Quran.radio, DeeniTube, Quran.ac, Hadith.ac, Deeni.tv) each have a **dedicated static page** at `src/pages/p/<slug>.js`, which renders a matching **dedicated component** at `src/components/pages/ProjectDetail/<Name>.jsx`. There is no shared template component for these — each is its own file, largely copy-pasted from the others with app-specific content. When adding a new app, copy the closest existing pair (e.g. `p/quran-tube.js` + `ProjectDetail/QuranTube.jsx`) rather than trying to generalize.
- Scholars/Da'wah org content and recommendation content use **generic dynamic routes** instead: `src/pages/applications-for-scholars-and-dawah-organizations/[slug].js`, `src/pages/develop-islamic-applications/[slug].js`, `src/pages/p/[slug].js`.

**App listing data**: `src/data/our-apps.js` exports an `apps` array (id, name, slug, url, imgPath, excerpt). `src/components/pages/ProjectList/DevelopIslamicApplications.jsx` renders this array via the `CardThree` card component — **array order is render order** (the `order` field on each entry is unused/dead). The homepage/about-page slider (`src/components/sliders/ImageSliderSecondary/`) is a **separate, hand-maintained list of `<SwiperSlide>` banner images** — it does not read from `our-apps.js`, so a new app must be added to both places independently. That slider component also has **two structurally-duplicated `<Swiper>` blocks** (for the `displayButton` true/false cases) with different indentation — edits to one block do not automatically apply to the other; check both when changing slides.

**Homepage/About page section stacking**: `src/pages/index.js` and `src/pages/about.js` render the same sequence of section components (`HomeAbout`, `DawahInCountries`, `HomeImageSliderSecondary`, `AppsForScholars`, `HomeFaqs`, ...) and must be kept in sync manually — there's no shared layout data structure. Section background colors are set via **two stacked, duplicate `background-color` declarations** in each section's `.module.scss` (`.root { background-color: A; background-color: B; }`, last one wins) — this pattern is intentionally used as a quick toggle when reordering sections so the alternating white/gray look survives reordering.

**Card logo sizing gotcha**: `CardThree` applies a fixed `height: 90px !important; width: auto !important;` to logo images. Rendered width therefore depends entirely on how much transparent/white padding the source PNG has around the actual logomark — visually similar logos can render at wildly different sizes if their padding ratios differ. When adding a new app logo, check its rendered width against an existing one (e.g. `quran-tube-white-logo.png`) rather than assuming visual similarity in the source file will hold on the card.

**Email/API routes** (`src/pages/api/`):
- `emailSub.js` — subscription form backend, integrated with Sender.net's API (`POST https://api.sender.net/v2/subscribers`, `Authorization: Bearer <token>`). Env vars: `SENDER_API_KEY`, `SENDER_GROUP_ID`. (Previously used MailerLite — migrated in commit `41ff965`; if you see `MAILERLITE_*` referenced anywhere, it's stale.)
- `sendMail.js` — contact form backend, uses `@sendgrid/mail`. Env vars: `SENDGRID_API_KEY`, `AUTH_EMAIL`, `CONTACT_EMAIL`. Unlike `emailSub.js`, this route has no input validation and no try/catch around the send call — a pre-existing inconsistency between the two routes, not something either implementation needs to match.
- The frontend `Subscription` component (`src/components/ui/Subscription/`) is provider-agnostic — it just POSTs `{ email }` to `/api/emailSub` and shows success/error state, so swapping the email provider only requires changing the API route, not the form.

## Workflow expectations

- If this file doesn't exist yet at the start of a session, run `/init` before doing anything else.
- For non-trivial changes — a new external integration, replacing an existing integration, anything touching multiple files, or anything whose exact shape depends on an external API's contract — explore the existing code and the relevant docs first, then use Plan Mode to present a concrete plan for review before writing any code. Don't go straight from research to a diff.
- Small, obvious, single-file, easily-reversible changes (a copy/style tweak, a config value fix) don't need that ceremony — direct execution is fine.
- When researching an external API, fetch/search its actual current documentation rather than relying on memorized knowledge of the API shape — third-party APIs change without notice.

**`src/lib/config.js`**: exports `server` (env-aware base URL) and `receiverEmail`/`emailSenderName` used by the contact form. Note the `receiverEmail` currently points at a Gmail fallback with a `// TODO: Fix Webmail` comment above the real `info@deeniinfotech.com` address — the org's own mailbox has had delivery issues before.

**Sensitive-data gotcha**: `.env` is tracked in git in this repo (not gitignored) and contains live API keys directly in history. Treat this as a known, pre-existing issue rather than something to silently "fix" by force-removing it — flag it to the user rather than rewriting history unilaterally.

**Build note**: `next.config.js` sets `eslint: { ignoreDuringBuilds: true }` — `next build` will succeed even with lint errors present. `npm run lint` must be run separately to catch them.
