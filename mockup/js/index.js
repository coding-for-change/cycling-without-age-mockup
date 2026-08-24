/* Demo launcher: the front door of the client presentation.
   Persona tiles, the golden-path script, and a way to replay the sign-in flows. */
CWA.reg({
  en: {
    'idx.kicker': 'Booking platform · design prototype',
    'idx.title': 'Give someone the wind in their hair.',
    'idx.sub': 'A clickable prototype of the new Cycling Without Age booking system — four real roles, one shared live database. Everything you do in one role shows up in the others.',
    'idx.pax': 'Passenger app',
    'idx.paxSub': 'Maria, 85 · books a ride in five big, simple steps',
    'idx.pilot': 'Pilot app',
    'idx.pilotSub': 'Jonas · takes open rides, checks in, files the debrief',
    'idx.admin': 'Chapter admin',
    'idx.adminSub': 'Petra runs München — switch to the super-admin role inside',
    'idx.wa': 'WhatsApp bot',
    'idx.waSub': 'Booking a ride without any app at all',
    'idx.open': 'Open',
    'idx.fromLogin': 'Start at the sign-in screen',
    'idx.golden': 'The 3-minute demo',
    'idx.g1': 'Open the Passenger app and book a ride as Maria.',
    'idx.g2': 'Open the Pilot app — a push notification announces the new ride. Grab it.',
    'idx.g3': 'A chat opens on both sides. Send a message and watch it arrive.',
    'idx.g4': 'On ride day: check in, ride, and file the 30-second debrief.',
    'idx.g5': 'Watch the Chapter admin dashboard follow every step live.',
    'idx.tip': 'Open two browser windows side by side (Passenger + Pilot) to see live sync and push notifications. Cross-window sync needs this folder served, for example:',
    'idx.reset': 'Reset demo data',
    'idx.resetSub': 'Restores the original demo state in every role',
    'idx.langs': 'Every screen is fully translated — English, Deutsch, Dansk.'
  },
  de: {
    'idx.kicker': 'Buchungsplattform · Design-Prototyp',
    'idx.title': 'Schenk jemandem den Wind in den Haaren.',
    'idx.sub': 'Ein klickbarer Prototyp des neuen Buchungssystems von Radeln ohne Alter — vier echte Rollen, eine gemeinsame Live-Datenbank. Alles, was du in einer Rolle tust, taucht in den anderen auf.',
    'idx.pax': 'Fahrgast-App',
    'idx.paxSub': 'Maria, 85 · bucht eine Ausfahrt in fünf großen, einfachen Schritten',
    'idx.pilot': 'Pilot·innen-App',
    'idx.pilotSub': 'Jonas · übernimmt offene Fahrten, checkt ein, berichtet',
    'idx.admin': 'Standort-Verwaltung',
    'idx.adminSub': 'Petra leitet München — die Super-Admin-Rolle ist eingebaut',
    'idx.wa': 'WhatsApp-Bot',
    'idx.waSub': 'Eine Fahrt buchen — ganz ohne App',
    'idx.open': 'Öffnen',
    'idx.fromLogin': 'Mit dem Anmelde-Screen starten',
    'idx.golden': 'Die 3-Minuten-Demo',
    'idx.g1': 'Öffne die Fahrgast-App und buche als Maria eine Ausfahrt.',
    'idx.g2': 'Öffne die Pilot·innen-App — eine Push-Nachricht meldet die neue Fahrt. Übernimm sie.',
    'idx.g3': 'Auf beiden Seiten öffnet sich ein Chat. Schick eine Nachricht und sieh zu, wie sie ankommt.',
    'idx.g4': 'Am Fahrttag: einchecken, fahren und den 30-Sekunden-Bericht abgeben.',
    'idx.g5': 'Beobachte, wie das Verwaltungs-Dashboard jeden Schritt live mitverfolgt.',
    'idx.tip': 'Öffne zwei Browserfenster nebeneinander (Fahrgast + Pilot·in) für Live-Sync und Push-Benachrichtigungen. Die Synchronisierung zwischen Fenstern braucht diesen Ordner lokal ausgeliefert, zum Beispiel:',
    'idx.reset': 'Demo-Daten zurücksetzen',
    'idx.resetSub': 'Stellt den ursprünglichen Demo-Zustand in allen Rollen wieder her',
    'idx.langs': 'Jeder Screen ist vollständig übersetzt — English, Deutsch, Dansk.'
  },
  da: {
    'idx.kicker': 'Bookingplatform · designprototype',
    'idx.title': 'Giv nogen vinden i håret.',
    'idx.sub': 'En klikbar prototype af Cykling uden alders nye bookingsystem — fire rigtige roller, én fælles live-database. Alt hvad du gør i én rolle, dukker op i de andre.',
    'idx.pax': 'Passager-app',
    'idx.paxSub': 'Maria, 85 · bestiller en tur i fem store, enkle trin',
    'idx.pilot': 'Pilot-app',
    'idx.pilotSub': 'Jonas · tager ledige ture, tjekker ind, sender rapporten',
    'idx.admin': 'Afdelings-admin',
    'idx.adminSub': 'Petra driver München — skift til superadmin-rollen indeni',
    'idx.wa': 'WhatsApp-bot',
    'idx.waSub': 'Bestil en tur helt uden app',
    'idx.open': 'Åbn',
    'idx.fromLogin': 'Start ved login-skærmen',
    'idx.golden': '3-minutters demoen',
    'idx.g1': 'Åbn passager-appen og bestil en tur som Maria.',
    'idx.g2': 'Åbn pilot-appen — en push-notifikation viser den nye tur. Tag den.',
    'idx.g3': 'En chat åbner på begge sider. Send en besked og se den ankomme.',
    'idx.g4': 'På turdagen: tjek ind, kør turen og udfyld 30-sekunders rapporten.',
    'idx.g5': 'Se admin-dashboardet følge hvert skridt live.',
    'idx.tip': 'Åbn to browservinduer side om side (passager + pilot) for live-sync og push-notifikationer. Synkronisering på tværs af vinduer kræver, at mappen serveres, for eksempel:',
    'idx.reset': 'Nulstil demodata',
    'idx.resetSub': 'Gendanner den oprindelige demotilstand i alle roller',
    'idx.langs': 'Hver skærm er fuldt oversat — English, Deutsch, Dansk.'
  }
});

(function () {
  var esc = CWA.esc;
  var t = CWA.t;

  var personas = [
    { href: 'passenger.html', icon: 'armchair', t: 'idx.pax', s: 'idx.paxSub', tone: 'sun', persona: 'passenger' },
    { href: 'pilot.html', icon: 'bike', t: 'idx.pilot', s: 'idx.pilotSub', tone: 'mint', persona: 'pilot' },
    { href: 'admin.html', icon: 'dashboard', t: 'idx.admin', s: 'idx.adminSub', tone: 'lav' },
    { href: 'whatsapp.html', icon: 'whatsapp', t: 'idx.wa', s: 'idx.waSub', tone: 'sky' }
  ];

  function render() {
    document.body.innerHTML =
      '<div class="launch stack-xl">' +

      '<div class="between">' +
      '<div class="row">' + CWA.ui.brandDot() +
      '<div><div class="hero-head-title">' + esc(t('brand')) + '</div>' +
      '<div class="hero-head-sub">' + esc(t('idx.kicker')) + '</div></div></div>' +
      CWA.ui.langMenu() +
      '</div>' +

      '<div class="launch-hero reveal">' +
      '<div style="position:relative;z-index:1;max-width:26rem">' +
      '<div class="display display-lg">' + esc(t('idx.title')) + '</div>' +
      '<p style="opacity:.78;margin-top:1rem">' + esc(t('idx.sub')) + '</p>' +
      '</div>' +
      '<div class="launch-art">' + CWA.art.hero('trishaw') + '</div>' +
      '</div>' +

      '<div class="persona-grid">' +
      personas.map(function (p, i) {
        return '<div class="persona-card tile-' + p.tone + ' reveal" style="--i:' + (i + 1) + '">' +
          '<div class="row"><div class="icon-tile on-ink">' + CWA.icon(p.icon) + '</div>' +
          '<div class="grow"><div class="persona-name">' + esc(t(p.t)) + '</div></div></div>' +
          '<p class="small" style="opacity:.8;flex:1">' + esc(t(p.s)) + '</p>' +
          '<div class="row wrap">' +
          '<a class="btn btn-ink" href="' + p.href + '">' + esc(t('idx.open')) + CWA.icon('arrowRight') + '</a>' +
          (p.persona
            ? '<button type="button" class="btn btn-ghost btn-sm" data-replay="' + p.persona + '" data-href="' + p.href + '">' +
            CWA.icon('key') + esc(t('idx.fromLogin')) + '</button>'
            : '') +
          '</div></div>';
      }).join('') +
      '</div>' +

      '<div class="card stack">' +
      '<div class="row"><div class="icon-tile on-sun">' + CWA.icon('sparkles') + '</div>' +
      '<span class="h2">' + esc(t('idx.golden')) + '</span></div>' +
      '<div class="stack">' +
      ['idx.g1', 'idx.g2', 'idx.g3', 'idx.g4', 'idx.g5'].map(function (k, i) {
        return '<div class="row-lg"><div class="av" style="background:hsl(var(--ink));color:#fff">' + (i + 1) + '</div>' +
          '<div class="grow small">' + esc(t(k)) + '</div></div>';
      }).join('') +
      '</div></div>' +

      '<div class="alert alert-sky">' + CWA.icon('info') +
      '<div><div>' + esc(t('idx.tip')) + '</div>' +
      '<code class="kbd" style="font-size:.75rem;display:inline-block;margin-top:.4rem">python3 -m http.server -d mockup 8000</code>' +
      '<div class="small mt-2">' + esc(t('idx.langs')) + '</div></div></div>' +

      '<div class="between wrap">' +
      '<div class="small muted">' + esc(t('idx.resetSub')) + '</div>' +
      '<button type="button" class="btn btn-destructive-outline" id="reset-btn">' + CWA.icon('reset') + esc(t('idx.reset')) + '</button>' +
      '</div></div>';

    document.getElementById('reset-btn').addEventListener('click', function () {
      CWA.store.reset();
    });
    document.querySelectorAll('[data-replay]').forEach(function (b) {
      b.addEventListener('click', function () {
        CWA.auth.replay(b.getAttribute('data-replay'));
        location.href = b.getAttribute('data-href');
      });
    });
  }

  CWA.render = render;
  CWA.store.get(); // ensure seeded
  render();
})();
