# Cycling Without Age — Booking Platform Mockup

A clickable, framework-free prototype of the new CWA booking system. Plain HTML + CSS + vanilla JS — no build step, no dependencies, no image files (every illustration is hand-written SVG). The only external request is the Google Fonts link.

## Run it

```bash
python3 -m http.server -d mockup 8000
# then open http://localhost:8000
```

Opening `index.html` directly from disk also works, but live sync **between two browser windows** (the best part of the demo) needs the local server.

## The 3-minute demo

1. **Passenger app** — book a ride as Maria (5 giant steps, senior-optimized).
2. **Pilot app** — a push notification announces the ride; grab it in one tap.
3. A **chat** opens on both sides; messages sync live with push banners.
4. Pilot **checks in** (walk-up passengers + on-the-spot waiver), rides, files the **30-second debrief**.
5. The **Chapter admin** dashboard follows every step live; switch to the **super-admin role** in the sidebar for grant-ready global roll-ups; the **WhatsApp bot** books real rides without any app.

Each mobile app also has a **“Start at the sign-in screen”** link on the launcher: it replays the full first-run experience — welcome → passkey *or* phone + one-time code → sign-up wizard → animated onboarding.

"Reset demo" on the start page restores the seeded state (all seed dates are relative to *now*, so alerts and today-rides are always live).

## Roles

| Page | Persona | What it shows |
|---|---|---|
| `passenger.html` | Maria, 85 | Senior mode: passkey/SMS login & guided signup, animated onboarding, a home screen built around the next ride, one question per step booking, events with cover art + detail pages, chats, profile |
| `pilot.html` | Jonas, volunteer pilot | Same shell and layout as the passenger app: home dashboard (next ride, rides needing a pilot, impact, week, chapter events), open/mine/week rides, full logistics card (garage access, lock code, battery), onboarding training, check-in & debrief |
| `admin.html` | Petra (chapter München) **or** Ole (super admin) — switch role in the sidebar | Requests inbox with plain-language validation, scheduling drawer, week calendar, event roster grid, add-wizards everywhere, training curriculum & sign-off, maps, settings. Super admin adds countries → chapters and impact reports for grant applications |
| `whatsapp.html` | Rosa, no smartphone apps | Chatbot booking that writes straight into the chapter's live system |

Languages: EN · DE · DA — fully translated, switchable everywhere, persisted. German uses Sie-form for passengers and du-form for volunteers.

## Design system

Warm paper canvas, near-black warm ink, chunky radii, flat pastel colour blocks (`sun · mint · sky · lav · peach · rose`), heavy display type (Bricolage Grotesque) over Inter for UI text, and a hand-drawn illustration set. CWA red is the `rose` token and is reserved for primary actions. The admin back-office deliberately stays on the neutral base layer — it is a tool, not a brand surface.

## Architecture (for the real build discussion)

- `css/app.css` — base design system: shadcn-style tokens, hand-maintainable component classes. Shared by every page.
- `css/brand.css` — the v3 brand layer (identity, motion, app chrome). Loaded by the two mobile apps + the launcher, scoped to `.app-v3` so the admin is untouched.
- `js/art.js` — the illustration system: SVG scenes, hero illustrations, generated avatars, mock weather. Draws from the CSS tokens, so art re-colours with the theme and works on light *and* dark grounds.
- `js/auth.js` — the shared sign-in / sign-up / onboarding machinery. Both apps run the identical flow with their own copy and art.
- `js/store.js` — single localStorage JSON blob, `update()` + `storage` events = the "backend"; audience-targeted mock push notifications.
- `js/i18n.js` + `js/i18n/common.js` — flat-key dictionaries, `Intl` date/number formatting; each page registers its own keys.
- `js/ui.js` — hash router, toasts, OS-style push banners, modals/drawers, admin shell, app chrome, responsive table→record-card helper.
- One JS file per page. See `CONTRACT.md` for the full API.
