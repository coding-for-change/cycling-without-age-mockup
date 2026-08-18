/* Shared UI helpers: escaping, toasts, push banners, modal/drawer, hash router,
   shells (tabbar / admin sidebar), small component builders. */
(function () {
  const esc = function (s) {
    return String(s === undefined || s === null ? '' : s).replace(/[&<>"']/g, function (c) {
      return { '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c];
    });
  };
  CWA.esc = esc;

  function region(id) {
    let el = document.getElementById(id);
    if (!el) { el = document.createElement('div'); el.id = id; document.body.appendChild(el); }
    return el;
  }

  CWA.ui = {};

  /* ---------- toast (bottom-right, confirms the user's OWN action) ---------- */
  CWA.ui.toast = function (msg, type) {
    type = type || 'success';
    const icons = { success: 'check', info: 'info', error: 'alert' };
    const el = document.createElement('div');
    el.className = 'toast toast-' + type;
    el.innerHTML = CWA.icon(icons[type] || 'check') + '<span></span>';
    el.querySelector('span').textContent = msg;
    region('toast-region').appendChild(el);
    setTimeout(function () { el.classList.add('leaving'); setTimeout(function () { el.remove(); }, 160); }, 3200);
  };

  /* ---------- OS-style push banner (announces INCOMING events) ---------- */
  CWA.ui.banner = function (o) {
    const el = document.createElement('button');
    el.className = 'push-banner';
    el.innerHTML =
      '<div class="app-icon">' + CWA.icon(o.icon || 'bike') + '</div>' +
      '<div class="grow"><div class="push-banner-title"></div><div class="push-banner-body"></div></div>' +
      '<div class="push-banner-meta">' + esc(o.appName || 'CWA') + ' &middot; ' + esc(CWA.t('common.now')) + '</div>';
    el.querySelector('.push-banner-title').textContent = o.title;
    el.querySelector('.push-banner-body').textContent = o.body || '';
    let gone = false;
    function dismiss() {
      if (gone) return; gone = true;
      el.classList.add('leaving');
      setTimeout(function () { el.remove(); }, 210);
    }
    el.addEventListener('click', function () { dismiss(); if (o.hash) CWA.nav(o.hash); });
    region('banner-region').appendChild(el);
    setTimeout(dismiss, 6500);
    try { if (navigator.vibrate) navigator.vibrate(10); } catch (e) { /* noop */ }
  };

  /* ---------- modal (mobile: bottom sheet) & right drawer ---------- */
  CWA.ui.modal = function (html, opts) {
    opts = opts || {};
    const ov = document.createElement('div');
    ov.className = 'overlay';
    ov.innerHTML = '<div class="' + (opts.drawer ? 'drawer' : 'modal') + '" role="dialog" aria-modal="true">' + html + '</div>';
    function onKey(e) { if (e.key === 'Escape') close(); }
    function close() {
      ov.remove();
      document.removeEventListener('keydown', onKey);
      if (opts.onClose) opts.onClose();
    }
    ov.addEventListener('mousedown', function (e) { if (e.target === ov) close(); });
    document.addEventListener('keydown', onKey);
    document.body.appendChild(ov);
    ov.querySelectorAll('[data-close]').forEach(function (b) { b.addEventListener('click', close); });
    const focusable = ov.querySelector('input, select, textarea, button:not([data-close])');
    if (focusable) setTimeout(function () { focusable.focus(); }, 50);
    return { el: ov, close: close };
  };
  CWA.ui.drawer = function (html, opts) {
    return CWA.ui.modal(html, Object.assign({}, opts, { drawer: window.innerWidth >= 768 }));
  };

  /* ---------- hash router ---------- */
  let lastRouteKey = null;
  CWA.nav = function (h) {
    if (h.charAt(0) !== '#') h = '#' + h;
    if (location.hash === h) { CWA.render(); } else { location.hash = h; }
  };
  CWA.ui.startRouter = function (views, defaultRoute) {
    CWA.views = views;
    CWA.defaultRoute = defaultRoute;
    window.addEventListener('hashchange', function () { CWA.render(); });
    CWA.render();
  };
  CWA.render = function () {
    if (!CWA.views) return;
    const h = location.hash.replace(/^#/, '');
    const parts = h.split('/');
    const name = CWA.views[parts[0]] ? parts[0] : CWA.defaultRoute;
    const arg = parts.slice(1).join('/');
    CWA.route = { name: name, arg: arg };
    CWA.views[name](arg);
    document.querySelectorAll('[data-tab]').forEach(function (b) {
      b.classList.toggle('active', b.getAttribute('data-tab') === name);
    });
    const key = name + '/' + arg;
    if (key !== lastRouteKey) window.scrollTo(0, 0);
    lastRouteKey = key;
  };

  /* Global delegation: data-nav → navigate, data-lang-toggle → open/close the
     language dropdown, data-lang → switch language. Any other click closes
     an open dropdown (outside-click dismiss). */
  document.addEventListener('click', function (e) {
    const nav = e.target.closest('[data-nav]');
    if (nav) { CWA.nav(nav.getAttribute('data-nav')); return; }
    const toggle = e.target.closest('[data-lang-toggle]');
    if (toggle) {
      const menu = toggle.closest('.lang-menu');
      const wasOpen = menu.classList.contains('open');
      document.querySelectorAll('.lang-menu.open').forEach(function (m) { m.classList.remove('open'); });
      if (!wasOpen) menu.classList.add('open');
      return;
    }
    const lang = e.target.closest('[data-lang]');
    if (lang) { CWA.setLang(lang.getAttribute('data-lang')); return; }
    document.querySelectorAll('.lang-menu.open').forEach(function (m) { m.classList.remove('open'); });
  });

  /* ---------- component builders (return HTML strings) ---------- */
  const LANGS = [
    { code: 'en', flag: '🇬🇧', name: 'English' },
    { code: 'de', flag: '🇩🇪', name: 'Deutsch' },
    { code: 'da', flag: '🇩🇰', name: 'Dansk' }
  ];
  /* Language switcher: a flag + code trigger that opens a dropdown of
     flag + native-name options. Always meant to sit top-right of its screen. */
  CWA.ui.langMenu = function (cls) {
    const cur = LANGS.filter(function (l) { return l.code === CWA.lang; })[0] || LANGS[0];
    return '<div class="lang-menu ' + (cls || '') + '">' +
      '<button type="button" class="lang-menu-btn" data-lang-toggle aria-haspopup="listbox" aria-label="' + esc(CWA.t('common.language')) + '">' +
      '<span class="lang-flag">' + cur.flag + '</span><span>' + cur.code.toUpperCase() + '</span>' +
      CWA.icon('chevronDown') + '</button>' +
      '<div class="lang-menu-list" role="listbox">' +
      LANGS.map(function (l) {
        return '<button type="button" class="lang-menu-item' + (l.code === CWA.lang ? ' active' : '') + '" data-lang="' + l.code + '" role="option">' +
          '<span class="lang-flag">' + l.flag + '</span><span class="grow">' + esc(l.name) + '</span>' +
          (l.code === CWA.lang ? CWA.icon('check') : '') + '</button>';
      }).join('') + '</div></div>';
  };

  /* On the v3 mobile apps this hands off to the generated (per-person coloured)
     avatar in art.js; the neutral admin shell keeps the plain initials chip. */
  CWA.ui.avatar = function (name, cls) {
    if (CWA.art && document.body.classList.contains('app-v3')) {
      return CWA.art.avatar(name, (cls || '').replace(/\bavatar-lg\b/, 'av-lg'));
    }
    const initials = String(name || '?').split(/\s+/).map(function (w) { return w.charAt(0); }).slice(0, 2).join('').toUpperCase();
    return '<div class="avatar ' + (cls || '') + '">' + esc(initials) + '</div>';
  };

  const STATUS_BADGE = {
    requested: 'badge-sky',
    open: 'badge-amber',
    staffed: 'badge-emerald',
    in_progress: 'badge-primary',
    done: 'badge-muted',
    cancelled: 'badge-red'
  };
  CWA.ui.statusBadge = function (status) {
    return '<span class="badge ' + (STATUS_BADGE[status] || 'badge-muted') + '">' + esc(CWA.t('status.' + status)) + '</span>';
  };

  CWA.ui.typeBadge = function (type) {
    const icons = { pleasure: 'heart', functional: 'route', event: 'users' };
    return '<span class="badge badge-outline">' + CWA.icon(icons[type] || 'bike') + esc(CWA.t('type.' + type)) + '</span>';
  };

  CWA.ui.batteryBar = function (pct) {
    const cls = pct < 25 ? 'critical' : pct < 45 ? 'low' : '';
    return '<span class="battery"><span class="battery-bar"><span class="battery-fill ' + cls + '" style="width:' + pct + '%"></span></span><span class="small tabular">' + pct + '%</span></span>';
  };

  /* Bottom tab bar for the mobile apps.
     tabs: [{id, icon, labelKey, dot}] — id doubles as hash route */
  CWA.ui.tabbar = function (tabs, opts) {
    opts = opts || {};
    return '<nav class="tabbar' + (opts.mobileOnly ? ' mobile-only' : '') + '">' +
      tabs.map(function (t) {
        return '<button type="button" data-nav="#' + t.id + '" data-tab="' + t.id + '">' +
          (t.dot ? '<span class="tab-dot"></span>' : '') +
          CWA.icon(t.icon) + '<span>' + esc(CWA.t(t.labelKey)) + '</span></button>';
      }).join('') + '</nav>';
  };

  /* Admin shell: inset sidebar + breadcrumb header. Renders INTO document.body.
     groups: [{labelKey, items: [{id, icon, labelKey, badge?}]}]
     Returns nothing; pages render views into #view and call CWA.ui.setBreadcrumb(). */
  CWA.ui.adminShell = function (o) {
    const side =
      '<aside class="sidebar">' +
      '<div class="sidebar-header">' +
      '<div class="sidebar-logo"><img src="assets/logo.png" alt=""></div>' +
      '<div class="grow"><div class="medium" style="font-size:.9375rem">' + esc(CWA.t('brand')) + '</div>' +
      '<div class="tiny muted">' + esc(o.subtitle || '') + '</div></div></div>' +
      o.groups.map(function (g) {
        return '<div class="sidebar-group">' +
          (g.labelKey ? '<div class="sidebar-group-label">' + esc(CWA.t(g.labelKey)) + '</div>' : '') +
          g.items.map(function (it) {
            return '<button type="button" class="sidebar-item" data-nav="#' + it.id + '" data-tab="' + it.id + '">' +
              CWA.icon(it.icon) + '<span>' + esc(CWA.t(it.labelKey)) + '</span>' +
              (it.badge ? '<span class="badge badge-primary">' + esc(it.badge) + '</span>' : '') +
              '</button>';
          }).join('') + '</div>';
      }).join('') +
      '<div class="sidebar-footer"><div class="row">' + CWA.ui.avatar(o.userName) +
      '<div class="grow"><div class="small medium truncate">' + esc(o.userName) + '</div>' +
      '<div class="tiny muted truncate">' + esc(o.userRole || '') + '</div></div></div></div>' +
      '</aside>';

    const inset =
      '<div class="inset"><header class="inset-header">' +
      '<a class="icon-btn hide-desktop" href="index.html" aria-label="Home">' + CWA.icon('chevronLeft') + '</a>' +
      '<div class="breadcrumb grow">' + esc(o.breadcrumbRoot) + '<span class="muted">&rsaquo;</span> <span class="current" id="crumb"></span></div>' +
      CWA.ui.langMenu() +
      '</header><div class="inset-body"><div class="page" id="view"></div></div></div>';

    document.body.innerHTML = '<div class="shell">' + side + inset + '</div>' +
      (o.tabs ? CWA.ui.tabbar(o.tabs, { mobileOnly: true }) : '');
  };

  CWA.ui.setBreadcrumb = function (text) {
    const el = document.getElementById('crumb');
    if (el) el.textContent = text;
  };

  /* Simple app header for the mobile apps (title or back-button variants) */
  CWA.ui.appHeader = function (o) {
    return '<header class="app-header">' +
      (o.back ? '<button type="button" class="icon-btn" data-nav="' + o.back + '" aria-label="' + esc(CWA.t('common.back')) + '">' + CWA.icon('arrowLeft') + '</button>' : '') +
      (o.homeLink ? '<a class="icon-btn" href="index.html" aria-label="Demo home">' + CWA.icon('chevronLeft') + '</a>' : '') +
      '<div class="grow"><div class="app-title">' + o.title + '</div>' +
      (o.subtitle ? '<div class="tiny muted">' + o.subtitle + '</div>' : '') + '</div>' +
      (o.right || '') +
      '</header>';
  };

  /* Responsive table: renders a desktop table AND a mobile record-card list.
     cols: [{labelKey, render(row)}], cards: render(row) -> inner HTML for the record card
     rowAttrs(row) -> e.g. 'data-nav="#ride/r1" class="clickable"' */
  CWA.ui.table = function (rows, cols, cardRender, rowAttrs) {
    const desktop =
      '<div class="table-wrap table-desktop"><table class="table"><thead><tr>' +
      cols.map(function (c) { return '<th>' + esc(c.labelKey ? CWA.t(c.labelKey) : '') + '</th>'; }).join('') +
      '</tr></thead><tbody>' +
      rows.map(function (r) {
        return '<tr ' + (rowAttrs ? rowAttrs(r) : '') + '>' +
          cols.map(function (c) { return '<td>' + c.render(r) + '</td>'; }).join('') + '</tr>';
      }).join('') +
      '</tbody></table></div>';
    const mobile =
      '<div class="cards-mobile">' +
      rows.map(function (r) {
        return '<button type="button" class="record-card" ' + (rowAttrs ? rowAttrs(r) : '') + '>' + cardRender(r) + '</button>';
      }).join('') + '</div>';
    return desktop + mobile;
  };

  /* Canonical chat message renderer — use this in EVERY chat view so styling stays
     consistent. myRole: 'client' | 'pilot' | 'admin' (the viewer's role).
     Admin messages are visually distinct for non-admin viewers (violet + role label),
     so passengers/pilots always know when the chapter team speaks. */
  CWA.ui.chatMessage = function (m, myRole) {
    if (m.from === 'system') {
      return '<div class="msg msg-system">' + esc(CWA.t(m.tKey || '')) + '</div>';
    }
    const mine = m.from === myRole;
    if (mine) {
      return '<div class="msg msg-mine">' + esc(m.text) + '</div>' +
        '<div class="msg-meta mine">' + CWA.fmt.time(m.ts) + '</div>';
    }
    if (m.from === 'admin') {
      return '<div class="msg-label">' + CWA.icon('shield') + esc(CWA.t('chat.adminLabel')) + ' · ' + esc(m.name) + '</div>' +
        '<div class="msg msg-admin">' + esc(m.text) + '</div>' +
        '<div class="msg-meta">' + CWA.fmt.time(m.ts) + '</div>';
    }
    return '<div class="msg-meta">' + esc(m.name) + '</div>' +
      '<div class="msg msg-theirs">' + esc(m.text) + '</div>' +
      '<div class="msg-meta">' + CWA.fmt.time(m.ts) + '</div>';
  };

  /* Keyless map embed (OpenStreetMap iframe — stands in for the Google Maps API,
     which needs a billed key; swap src for Maps Embed API in production).
     Known seed addresses resolve to real Munich coordinates; anything else
     falls back to the chapter's home area. */
  const GEO = {
    'agnes-bernauer': [48.1425, 11.5133],
    'fürstenrieder': [48.1268, 11.5119],
    'hirschgarten': [48.1521, 11.5266],
    'rosenau': [48.1287, 11.4954],
    'westendstr': [48.1332, 11.5083],
    'westpark': [48.1207, 11.5251],
    'laimer platz': [48.1330, 11.5050]
  };
  CWA.ui.mapEmbed = function (address, opts) {
    opts = opts || {};
    let pt = [48.1374, 11.5155]; // Munich center fallback
    const a = String(address || '').toLowerCase();
    for (const k in GEO) { if (a.indexOf(k) !== -1) { pt = GEO[k]; break; } }
    const d = 0.006;
    const bbox = (pt[1] - d) + '%2C' + (pt[0] - d * 0.6) + '%2C' + (pt[1] + d) + '%2C' + (pt[0] + d * 0.6);
    const src = 'https://www.openstreetmap.org/export/embed.html?bbox=' + bbox + '&layer=mapnik&marker=' + pt[0] + '%2C' + pt[1];
    return '<div class="map-embed' + (opts.small ? ' map-embed-sm' : '') + '">' +
      '<iframe src="' + src + '" loading="lazy" title="Map"></iframe>' +
      (opts.caption === false ? '' : '<div class="map-caption">' + CWA.icon('mapPin') + '<span>' + esc(address || '') + '</span></div>') +
      '</div>';
  };

  /* Munich address suggestions for booking/setup forms — native <datalist>, the
     mock stand-in for Google Places autocomplete. Give inputs list="cwa-addresses". */
  CWA.ui.addressDatalist = function () {
    const opts = ['Agnes-Bernauer-Str. 12', 'Fürstenrieder Str. 45', 'Hirschgartenallee 8',
      'Westendstr. 305', 'Westpark Rosengarten', 'Rosenauer Weg 3', 'Laimer Platz 2',
      'Nymphenburger Schlosspark', 'Seniorenheim Rosenau'];
    return '<datalist id="cwa-addresses">' + opts.map(function (o) { return '<option value="' + esc(o) + '">'; }).join('') + '</datalist>';
  };

  /* ======================================================================
     v3 shell + content helpers (mobile apps only — see css/brand.css)
     ====================================================================== */

  /* The app-root header: identity on the left, live actions on the right.
     Deliberately NOT a title bar — it carries a person, not a page name. */
  CWA.ui.heroHead = function (o) {
    o = o || {};
    return '<header class="hero-head">' +
      (o.lead || '') +
      '<div class="grow" style="min-width:0">' +
      (o.title ? '<div class="hero-head-title truncate">' + o.title + '</div>' : '') +
      (o.sub ? '<div class="hero-head-sub truncate">' + o.sub + '</div>' : '') +
      '</div>' +
      (o.right || '') +
      '</header>';
  };

  /* Detail-page header: a back knob, no chrome, title lives in the page body. */
  CWA.ui.backHead = function (o) {
    o = o || {};
    return '<header class="hero-head">' +
      '<button type="button" class="icon-pill" ' +
      (o.backAction ? 'id="' + o.backAction + '"' : 'data-nav="' + esc(o.back || '#home') + '"') +
      ' aria-label="' + esc(CWA.t('common.back')) + '">' + CWA.icon('arrowLeft') + '</button>' +
      '<div class="grow" style="min-width:0">' +
      (o.title ? '<div class="hero-head-title truncate">' + o.title + '</div>' : '') +
      (o.sub ? '<div class="hero-head-sub truncate">' + o.sub + '</div>' : '') +
      '</div>' +
      (o.right || '') +
      '</header>';
  };

  CWA.ui.brandDot = function () {
    return '<div class="brand-dot"><img src="assets/logo.png" alt=""></div>';
  };

  CWA.ui.brandLockup = function () {
    return '<div class="brand-lockup"><img src="assets/logo.png" alt="">' +
      '<span>' + esc(CWA.t('brand')) + '</span></div>';
  };

  CWA.ui.bell = function (hasNew) {
    return '<button type="button" class="bell" id="bell-btn" aria-label="' + esc(CWA.t('common.notifications')) + '">' +
      CWA.icon('bell') + (hasNew ? '<span class="bell-dot pinging"></span>' : '') + '</button>';
  };

  CWA.ui.sectionHead = function (title, linkText, hash) {
    return '<div class="section-head"><h2 class="h2">' + esc(title) + '</h2>' +
      (linkText ? '<button type="button" class="link" data-nav="' + esc(hash) + '">' + esc(linkText) +
        CWA.icon('chevronRight') + '</button>' : '') + '</div>';
  };

  /* Circular progress ring (training completion, seats filled…) */
  CWA.ui.ring = function (pct, label, tone) {
    const r = 30, c = 2 * Math.PI * r;
    const off = c * (1 - Math.max(0, Math.min(100, pct)) / 100);
    return '<div class="ring"><svg viewBox="0 0 72 72">' +
      '<circle class="ring-track" cx="36" cy="36" r="' + r + '"/>' +
      '<circle class="ring-fill" cx="36" cy="36" r="' + r + '" stroke="hsl(var(--' + (tone || 'mint') + '))" ' +
      'stroke-dasharray="' + c.toFixed(1) + '" stroke-dashoffset="' + off.toFixed(1) + '"/>' +
      '</svg><span class="ring-label">' + esc(label) + '</span></div>';
  };

  CWA.ui.weatherChip = function (ts) {
    if (!CWA.art) return '';
    const w = CWA.art.weather(ts);
    return '<span class="weather">' + CWA.icon(w.icon) +
      '<span>' + esc(w.deg + '° · ' + CWA.t(w.tKey)) + '</span></span>';
  };

  /* ---- events: one shared vocabulary for both apps + admin ---- */
  CWA.ui.eventTitle = function (r, d) {
    if (r.titleKey) return CWA.t(r.titleKey);
    if (r.title) return r.title;
    if (r.partnerId && d) {
      const p = CWA.store.find(d.partners, r.partnerId);
      if (p) return p.name;
    }
    return r.notes || CWA.t('type.event');
  };
  CWA.ui.eventBody = function (r) {
    return r.bodyKey ? CWA.t(r.bodyKey) : (r.description || r.notes || '');
  };
  CWA.ui.eventArt = function (r) {
    return r.art || 'park';
  };
  CWA.ui.eventSeats = function (r) {
    const roster = r.roster || [];
    const taken = roster.filter(function (x) { return !!x.name; }).length;
    return { total: roster.length, taken: taken, free: roster.length - taken };
  };

  /* Cover art block with the date tab and optional status chips. */
  CWA.ui.eventCover = function (r, opts) {
    opts = opts || {};
    const d = new Date(r.ts);
    return '<div class="cover' + (opts.tall ? ' cover-tall' : '') + '">' +
      CWA.art.scene(CWA.ui.eventArt(r)) +
      (opts.chips ? '<div class="cover-chips">' + opts.chips + '</div>' : '') +
      (opts.date === false ? '' :
        '<div class="cover-date"><div class="d">' + d.getDate() + '</div>' +
        '<div class="m">' + esc(CWA.fmt.monthShort(r.ts)) + '</div></div>') +
      '</div>';
  };

  CWA.ui.coverChip = function (label, icon, cls) {
    return '<span class="cover-chip ' + (cls || '') + '">' + (icon ? CWA.icon(icon) : '') + esc(label) + '</span>';
  };

  /* Stacked avatars for "who is coming" */
  CWA.ui.avatarStack = function (names, max) {
    max = max || 4;
    const shown = names.slice(0, max);
    return '<div class="av-stack">' + shown.map(function (n) { return CWA.art.avatar(n); }).join('') +
      (names.length > max ? '<div class="av-more">+' + (names.length - max) + '</div>' : '') + '</div>';
  };

  /* Seat strip: one square per roster slot. */
  CWA.ui.seatStrip = function (r, myName) {
    return '<div class="seats">' + (r.roster || []).map(function (s) {
      const mine = s.name && myName && s.name === myName;
      return '<span class="seat' + (mine ? ' mine' : s.name ? ' taken' : '') + '">' +
        CWA.icon(s.name ? 'user' : 'armchair') + '</span>';
    }).join('') + '</div>';
  };

  /* Header shadow appears only once the page has scrolled. One listener, ever. */
  let scrollBound = false;
  CWA.ui.bindStickyHead = function () {
    if (scrollBound) return;
    scrollBound = true;
    const onScroll = function () {
      const h = document.querySelector('.hero-head');
      if (h) h.classList.toggle('stuck', window.scrollY > 4);
    };
    window.addEventListener('scroll', onScroll, { passive: true });
    onScroll();
  };

  /* Stagger helper: `style="--i:3"` drives the reveal animation delay. */
  CWA.ui.rev = function (i) { return ' class="reveal" style="--i:' + i + '"'; };
})();
