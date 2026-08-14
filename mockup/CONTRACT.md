# CWA Mockup — page-developer contract

Plain HTML/CSS/vanilla JS. **No frameworks, no CDNs (except the Google Fonts link), no ES modules** (must work from `file://`). One global namespace: `window.CWA`.

Two type families: **Inter** for UI text, **Bricolage Grotesque** for display/numerals (`var(--font-display)`, class `.display`). No other fonts.

## HTML page template (script order is mandatory)

The mobile apps (`passenger.html`, `pilot.html`) and the launcher run the **v3 brand layer**: they add `css/brand.css`, `js/art.js`, `js/auth.js` and `class="app-v3"` on `<body>`. The admin back-office stays deliberately neutral and loads none of them.

```html
<!doctype html>
<html lang="en">
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1, viewport-fit=cover">
  <meta name="theme-color" content="#faf5ee">
  <title>…</title>
  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
  <link href="https://fonts.googleapis.com/css2?family=Bricolage+Grotesque:opsz,wght@12..96,600;12..96,700;12..96,800&family=Inter:wght@400;450;500;600;700&display=swap" rel="stylesheet">
  <link rel="stylesheet" href="css/app.css">
  <link rel="stylesheet" href="css/brand.css">   <!-- v3 apps only -->
  <script defer src="js/icons.js"></script>
  <script defer src="js/i18n.js"></script>
  <script defer src="js/i18n/common.js"></script>
  <script defer src="js/store.js"></script>
  <script defer src="js/ui.js"></script>
  <script defer src="js/art.js"></script>       <!-- v3 apps only, after ui.js -->
  <script defer src="js/auth.js"></script>      <!-- v3 apps only, after ui.js -->
  <script defer src="js/PAGE.js"></script>
</head>
<body class="app-v3"> <!-- passenger adds `senior`; page JS renders everything -->
</body>
</html>
```

Page JS runs at defer time (DOM ready). Pattern: build the static shell into `document.body` (or keep it in the HTML), define view functions that render into `#view` (or your own container), then `CWA.ui.startRouter(views, 'defaultRoute')`.

## APIs (read js/*.js for exact signatures — do NOT modify shared files)

### i18n
- `CWA.t(key, {param: value})` — translate; `{name}` interpolation. Fallback: lang → en → key.
- `CWA.reg({en:{...}, de:{...}, da:{...}})` — **register your page's own strings at the top of your page JS file** (namespace them, e.g. `pax.*`, `pilot.*`, `admin.*`, `glob.*`, `wa.*`). Provide ALL THREE languages, properly translated (German with du-form for pilots/volunteers, Sie-form for passengers; Danish informal).
- Common keys already exist — reuse them: `common.*` (back/next/cancel/confirm/send/today/tomorrow/pickup/destination/return/notes/phone/chat/status/pilot/passenger/trishaw/garage/battery/lockCode/duration/date/time/waiver/signed/pending/donation/…), `slot.morning|afternoon|exact`, `type.pleasure|functional|event`, `status.requested|open|staffed|in_progress|done|cancelled`, `waiver.title|text|proxy`, `notif.*` (see store), `rel.*`.
- `CWA.setLang(l)` — do not call directly; `data-lang` buttons are handled globally. `CWA.ui.langSeg()` renders the EN/DE/DA segmented control.
- `CWA.fmt.time(ts) .date(ts) .dateLong(ts) .day(ts)` ("Today"/"Tomorrow"/long date) `.dayTime(ts)` `.rel(ts)` ("in 3 h 40 min") `.euro(n)` `.num(n)` — all locale-aware.
- If your shell (header/sidebar) contains translated text outside the router views, define `CWA.renderShell = function(){...}` — it is called on language change and on store changes.

### Store (read js/store.js for the seed — entity shapes and ids matter)
- `CWA.store.get()` → db: `{chapters, countries, pilots, clients, partners, garages, trishaws, trainings, stories, rides, chats, notifications}`.
- `CWA.store.update(fn)` — ALL writes: `CWA.store.update(db => { …mutate…; CWA.store.notify(db, audience, tKey, params, hash); })`. Triggers re-render in this tab + all other tabs.
- `CWA.store.notify(db, audience, tKey, params, hash)` — queue a mock push. Audiences: `'admin'`, `'pilot'` (all pilots), `'client:c1'`, `'global'`. tKey must be a `notif.*` pair (`.t`/`.b` suffixes exist in common dict). `hash` = route on the RECEIVING page (e.g. `#ride/r-xyz`).
- `CWA.store.watch(['pilot'], {persona:'pilot', icon:'bike', appName:'CWA Pilot'})` — call once at boot. Handles: storage events from other tabs (re-render + banner), same-tab changes (re-render only), unseen-notification banners on page load.
- `CWA.store.uid('r')` → unique id. `CWA.store.find(db.rides, id)`.
- Ride statuses: `requested → open → staffed → in_progress → done` (+ `cancelled`). `requested` = failed auto-validation, needs admin review (`ride.flag` holds reason, e.g. `'outside_hours'`). München (`chapterId:'muc'`) auto-schedules: valid new bookings become `open` (visible to pilots) immediately.
- Demo identities: passenger page = Maria Huber `c1`; pilot page = Jonas Weber `p1`; admin = Petra Klein `p2` (captain) at chapter `muc`.
- Chats: `{id:'chat-<rideId>', rideId, messages:[{from:'pilot'|'client'|'admin'|'system', name, text, ts, tKey?}]}` — `from:'system'` messages carry `tKey` instead of text (e.g. `chat.sysCreated` — register it if you need it; it's page-level). Create the chat when a pilot grabs a ride.

### UI helpers (js/ui.js)
- `CWA.ui.toast(msg, 'success'|'info'|'error')` — confirm the user's OWN action.
- `CWA.ui.banner({title, body, icon, hash, appName})` — usually NOT called directly; watch() does it.
- `CWA.ui.modal(html)` / `CWA.ui.drawer(html)` → `{el, close}`. Elements with `data-close` close it. Mobile modal = bottom sheet automatically.
- `CWA.ui.startRouter(views, 'home')` — views: `{home: fn, ride: fn}` for hashes `#home`, `#ride/<arg>` (arg passed to fn). `CWA.render()` re-renders current view. `CWA.nav('#ride/r1')` navigates.
- Declarative nav: any element with `data-nav="#hash"` navigates on click; `data-tab="home"` gets `.active` toggled by the router (use on tabbar buttons + sidebar items).
- `CWA.ui.tabbar(tabs, {mobileOnly})`, `CWA.ui.adminShell({subtitle, groups, userName, userRole, breadcrumbRoot, tabs})` + `CWA.ui.setBreadcrumb(text)`, `CWA.ui.appHeader({back, homeLink, title, subtitle, right})`.
- `CWA.ui.table(rows, cols, cardRender, rowAttrs)` — desktop table + mobile record-cards from one spec.
- `CWA.ui.langSeg() .avatar(name) .statusBadge(status) .typeBadge(type) .batteryBar(pct)`.
- `CWA.icon('bike')` — names: bike home calendar mapPin chat user users bell chevronRight chevronLeft chevronDown arrowLeft arrowRight plus check checkCheck x clock sun sunset phone battery lock key warehouse alert heart globe settings clipboard send star search reset download building gift shield sparkles wrench dashboard route more info pencil externalLink flag languages logout euro smile whatsapp sunMedium armchair list trash cloud wind trophy ticket navigation arrowUpRight zap play mail award compass chevronUp camera.

## Security / correctness rules
- **Escape ALL user- or store-originated strings with `CWA.esc(x)`** when interpolating into HTML. Banners/toasts already use textContent.
- Never hardcode UI strings — every visible string via `CWA.t()`. Data (names, addresses) comes from the store.
- Re-render must be idempotent: views are re-run on every store/lang change. Don't accumulate listeners on `window`/`document` inside views (shell-level delegation or re-created elements only).
- Chat views: after render, scroll the `.chat-scroll` element to bottom.

## V2 conventions (additions — binding)

### Auth (mock, per app)
- Session key: `localStorage['cwa.auth.<persona>']` (`passenger`, `pilot`) → JSON `{userId, name, loggedIn:true}`. On boot: if missing, CREATE it seeded as the demo persona (Maria `c1` / Jonas `p1`) so the golden-path demo needs zero login. Logout = remove key + re-render → auth screens.
- Auth screens (logged-out): a welcome/login view (passkey-first: `.passkey-ring` with `CWA.icon('key')`, `auth.passkey` button → ~1.2s `auth.verifying` state → logged in as the demo persona) and a step-by-step SIGN-UP wizard (reuse the `.progress-dots` + `.wizard-question` + `.big-option` pattern). New signups create a real record in the store.
- Common auth strings exist: `auth.login/logout/signup/passkey/passkeyHint/verifying/or`.

### Chats — active vs past (both apps + admin)
- Chat inboxes have a `.seg` toggle: `chat.tabActive` (rides with status NOT done/cancelled) vs `chat.tabPast` (status done/cancelled). Default: active.
- Chat thread views MUST render messages via `CWA.ui.chatMessage(m, myRole)` (myRole: 'client'|'pilot'|'admin') — it handles system messages, own-vs-other, and the distinct violet "chapter team" styling for admin messages.
- Chat thread header includes a `chat.viewBooking` action linking to the ride/booking detail.

### Maps & addresses (Google-Maps stand-in, keyless)
- `CWA.ui.mapEmbed(address, {small?, caption?})` → OSM iframe with marker (seed addresses resolve to real Munich coords). Use in ride/location/garage/partner details and setup wizards.
- Address inputs: add `list="cwa-addresses"` and inject `CWA.ui.addressDatalist()` once per view — native datalist = mocked Places autocomplete.

### Trainings / onboarding (pilots)
- `db.trainings`: `{id, type:'video'|'workshop', title, durationMin, requiredFor:['pilot']}`. Pilot record: `trainingsDone:[ids]`, `availability:[0-6 day ints]`.
- A pilot may only grab rides when every training with `requiredFor` including 'pilot' is in their `trainingsDone` (Jonas is complete in seed; new signups and Ali are not → grab buttons disabled with an explanatory hint + link to training).
- Watching a video (mock player: `.video-card`/`.video-thumb`/`.play-tri`, brief progress animation) appends to `trainingsDone` via `store.update`. Workshops are captain-signed-off (admin side).

### Events for passengers
- Event rides with `public:true` (seed: `r-fest`) or at the client's `partnerId` are shown in the passenger app as "upcoming events". Reserving a seat = fill the first free roster slot with the client's name (next `order` number) via update + `CWA.store.notify(db,'admin','notif.eventSignup',{name, event}, '#events/<id>')`.

### Misc
- `common.viewList/viewWeek/events/availability/training/notifications` and `notif.eventSignup.*` exist in common.
- New CSS since v1: `.msg-admin`, `.msg-label`, `.map-embed(-sm)`, `.map-caption`, `.meter/.meter-fill`, `.video-card/.video-thumb/.play-tri`, `.week-strip`, `.passkey-ring`, `.brandbar-title/-sub`, `.bell-btn`.
- Store VERSION is now 4 (auto-reseeds old demos).

## V3 conventions (the brand layer — binding for passenger/pilot/index)

### Identity
Warm paper canvas (`--canvas`), near-black warm ink, chunky radii, flat pastel colour blocks, heavy display type, hand-drawn SVG scenes. Colour family: `sun · mint · sky · lav · peach · rose`, each with a `-bg` (block fill) and an `-ink` (text on that block) twin. CWA red is `rose` and stays reserved for the primary action.

### Shell (identical in both apps)
`CWA.ui.heroHead({lead, title, sub, right})` on tab roots — it carries a **person**, not a page name (avatar + greeting + bell). `CWA.ui.backHead({back|backAction, title, sub, right})` on detail pages. Body is `.app-body`; the tab bar is a floating pill dock. Call `CWA.ui.bindStickyHead()` after rendering.

### Components (css/brand.css)
`.display(-sm/-lg/-xl)` · `.eyebrow` · `.tile` + `.tile-{sun,mint,sky,lav,peach,rose,ink,paper}` with `.tile-value/-label/-foot/-glyph` · `.tile-grid(-3)` · `.btn-hero` (label + circular knob — the signature CTA) · `.icon-pill` · `.bell` · `.cover` + `.cover-chip/-date` · `.event-card` · `.rail` (snap scroller) · `.quote` · `.weather` · `.bar-track/.bar-fill` · `.ring` · `.av/.av-lg/.av-xl/.av-stack` · `.seats/.seat` · `.otp-row/.otp-box` · `.passkey-orb` · `.onb-*` · `.reveal/.pop/.float/.roll/.beat` (motion; all disabled under `prefers-reduced-motion`).

Helpers: `CWA.ui.sectionHead(title, linkText, hash)`, `.ring(pct, label, tone)`, `.weatherChip(ts)`, `.eventCover(ride, {tall, date, chips})`, `.coverChip(label, icon, cls)`, `.avatarStack(names, max)`, `.seatStrip(ride, myName)`, `.eventTitle/.eventBody/.eventArt/.eventSeats(ride, db)`, `.rev(i)`.

### Art (js/art.js) — no binary assets anywhere
- `CWA.art.scene(name, {bg, paper})` → 400×240 event/section cover. Names: `park festival care lake cafe market rose garage`.
- `CWA.art.hero(name)` → 360×260 storytelling illustration. Names: `trishaw wind chat calendar helmet key hands celebrate map`.
- `CWA.art.avatar(name, cls)` → deterministic per-person coloured avatar (`CWA.ui.avatar` delegates here on `.app-v3`).
- `CWA.art.sticker(name)`, `CWA.art.weather(ts)` (stable mock weather → `{icon, tKey, deg}`).
- Art draws from the CSS tokens. Structural line work uses `--art-ink`; set it on a dark container (see `.launch-hero`) and the same illustration works on black.

### Auth & onboarding (js/auth.js) — one flow, two vocabularies
`CWA.auth.loginFlow(cfg)` returns `{welcome, phone, code}` view functions: passkey ceremony (verify → confirm → in) **or** phone → six-digit code with SMS-autofill playback, wrong-code shake and resend. `cfg.keys` remaps any shared `auth.*` string so the pilot app can speak du-form (`pauth.*`).
`CWA.auth.onboarding({persona, slides, start, onIndex, root, setHtml, onDone})` — animated, swipeable, skippable carousel; marks the persona onboarded on finish.
Session: `CWA.auth.boot(persona, demo)` (auto-login for the golden path) · `.save` · `.logout` · `.replay(persona)` (launcher replays the flow from screen one) · `.onboarded/.markOnboarded`.

### Events carry content
Event rides may hold `titleKey`/`bodyKey` (registered strings, so events read properly in EN/DE/DA), `art` (a scene name), `location` (full address for the map). Both apps render `#event/<id>`: cover art, description, map, seats/roster, who is coming. `db.stories` holds community quotes (`tKey` + author + role) for the home cards.

## Design rules (see css/app.css for every class)
- shadcn-like, Linear-quality polish. White surfaces, 1px `hsl(var(--border))` borders, minimal shadows, CWA-red primary, generous whitespace. NO inline styles except tiny dynamic bits (widths/heights in %).
- Mobile apps (passenger/pilot): `.app` wrapper, `heroHead`/`backHead`, `.app-body`, floating `.tabbar` dock. Passenger page: `<body class="senior app-v3">` — big type/targets are automatic; use `.btn-hero`, `.big-option`, `.display`, `.progress-dots`. **Both apps share the same shell, layout and component vocabulary — only copy and content differ.**
- Admin/global: `CWA.ui.adminShell` (inset sidebar) + `.stat-tile`, `.link-card`, `.alert-amber`, `CWA.ui.table`, `.roster-grid`, `.cal-grid`.
- Chat: `.chat-scroll`, `.msg .msg-mine/.msg-theirs/.msg-system`, `.chat-input-row`, `.send-btn`.
- WhatsApp page: `.phone-frame`, `.wa-*` classes.
- Empty states: `.empty-state` with an icon-tile, a sentence, and (where sensible) a CTA. Never render a blank region.
