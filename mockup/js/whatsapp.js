/* WhatsApp bot demo: books a REAL ride into the shared store — no app required.
   Bot speaks the demo language (shared language switcher). German: Sie-form
   (the bot talks to passengers, per contract). */
CWA.reg({
  en: {
    'wa.title': 'WhatsApp booking',
    'wa.explainer': 'The same booking, no app required — the bot writes straight into the chapter’s system.',
    'wa.online': 'online',
    'wa.inputPh': 'Type a message',
    'wa.greet': 'Hello! I’m the Cycling Without Age bot 🚲 I can book a free trishaw ride for you.',
    'wa.chipBook': 'Book a ride',
    'wa.chipHow': 'How does it work?',
    'wa.how': 'A trained volunteer pilot picks you up at home with a trishaw and takes you out for a free ride — blanket and wind in the hair included. Shall we book one?',
    'wa.askName': 'Wonderful! What’s your name?',
    'wa.askDay': 'When would you like to ride, {name}?',
    'wa.saturday': 'Saturday',
    'wa.askSlot': 'Morning or afternoon?',
    'wa.askPickup': 'Where should we pick you up?',
    'wa.waiverIntro': 'Almost done! Here is the short version of our ride waiver:',
    'wa.agreeQ': 'Do you agree?',
    'wa.agree': 'I agree ✓',
    'wa.confirm': 'Perfect, {name}! I’ll book a free trishaw ride for you: {when}, pick-up at {place}. Shall I?',
    'wa.yesBook': 'Yes, book it!',
    'wa.startOver': 'Start over',
    'wa.booked': '✅ Booked! You’ll get a WhatsApp message as soon as a pilot takes your ride.',
    'wa.again': 'Book another ride',
    'wa.whatTitle': 'What just happened',
    'wa.whatBody': 'That booking was real: the bot wrote it straight into the chapter’s live system. The ride is now open, and every pilot in München was just notified.',
    'wa.toPilot': 'Watch it appear in the pilot feed',
    'wa.toAdmin': 'See it in the chapter dashboard'
  },
  de: {
    'wa.title': 'WhatsApp-Buchung',
    'wa.explainer': 'Dieselbe Buchung ganz ohne App — der Bot schreibt direkt ins System des Standorts.',
    'wa.online': 'online',
    'wa.inputPh': 'Nachricht schreiben',
    'wa.greet': 'Hallo! Ich bin der Bot von Radeln ohne Alter 🚲 Ich kann für Sie eine kostenlose Rikscha-Ausfahrt buchen.',
    'wa.chipBook': 'Fahrt buchen',
    'wa.chipHow': 'Wie funktioniert das?',
    'wa.how': 'Ein geschulter ehrenamtlicher Pilot holt Sie mit einer Rikscha zu Hause ab und fährt eine kostenlose Runde mit Ihnen — Decke und Wind in den Haaren inklusive. Sollen wir eine Fahrt buchen?',
    'wa.askName': 'Wunderbar! Wie heißen Sie?',
    'wa.askDay': 'Wann möchten Sie fahren, {name}?',
    'wa.saturday': 'Samstag',
    'wa.askSlot': 'Lieber vormittags oder nachmittags?',
    'wa.askPickup': 'Wo dürfen wir Sie abholen?',
    'wa.waiverIntro': 'Fast geschafft! Hier die Kurzfassung unserer Einverständniserklärung:',
    'wa.agreeQ': 'Sind Sie einverstanden?',
    'wa.agree': 'Einverstanden ✓',
    'wa.confirm': 'Perfekt, {name}! Ich buche für Sie eine kostenlose Rikscha-Ausfahrt: {when}, Abholung: {place}. Soll ich?',
    'wa.yesBook': 'Ja, fest buchen!',
    'wa.startOver': 'Von vorn beginnen',
    'wa.booked': '✅ Gebucht! Sie erhalten eine WhatsApp-Nachricht, sobald eine Pilot·in Ihre Fahrt übernimmt.',
    'wa.again': 'Noch eine Fahrt buchen',
    'wa.whatTitle': 'Was gerade passiert ist',
    'wa.whatBody': 'Diese Buchung war echt: Der Bot hat sie direkt ins Live-System des Standorts geschrieben. Die Fahrt ist jetzt offen, und alle Pilot·innen in München wurden gerade benachrichtigt.',
    'wa.toPilot': 'Sieh zu, wie sie im Pilot·innen-Feed auftaucht',
    'wa.toAdmin': 'Sieh sie im Standort-Dashboard'
  },
  da: {
    'wa.title': 'WhatsApp-booking',
    'wa.explainer': 'Samme booking helt uden app — botten skriver direkte ind i afdelingens system.',
    'wa.online': 'online',
    'wa.inputPh': 'Skriv en besked',
    'wa.greet': 'Hej! Jeg er Cykling uden alders bot 🚲 Jeg kan booke en gratis rickshaw-tur til dig.',
    'wa.chipBook': 'Book en tur',
    'wa.chipHow': 'Hvordan virker det?',
    'wa.how': 'En trænet frivillig pilot henter dig derhjemme i en rickshaw og tager dig med på en gratis tur — tæppe og vind i håret inkluderet. Skal vi booke en tur?',
    'wa.askName': 'Skønt! Hvad hedder du?',
    'wa.askDay': 'Hvornår vil du gerne på tur, {name}?',
    'wa.saturday': 'Lørdag',
    'wa.askSlot': 'Formiddag eller eftermiddag?',
    'wa.askPickup': 'Hvor skal vi hente dig?',
    'wa.waiverIntro': 'Næsten i mål! Her er den korte version af vores samtykkeerklæring:',
    'wa.agreeQ': 'Er du indforstået?',
    'wa.agree': 'Jeg accepterer ✓',
    'wa.confirm': 'Perfekt, {name}! Jeg booker en gratis rickshaw-tur til dig: {when}, afhentning: {place}. Skal jeg det?',
    'wa.yesBook': 'Ja, book den!',
    'wa.startOver': 'Start forfra',
    'wa.booked': '✅ Booket! Du får en WhatsApp-besked, så snart en pilot tager din tur.',
    'wa.again': 'Book endnu en tur',
    'wa.whatTitle': 'Hvad der lige skete',
    'wa.whatBody': 'Bookingen var ægte: Botten skrev den direkte ind i afdelingens live-system. Turen er nu åben, og alle piloter i München har lige fået besked.',
    'wa.toPilot': 'Se den dukke op i pilot-feedet',
    'wa.toAdmin': 'Se den i afdelingens dashboard'
  }
});

(function () {
  const t = function (k, p) { return CWA.t(k, p); };
  const esc = function (s) { return CWA.esc(s); };
  const icon = function (n) { return CWA.icon(n); };

  /* ---------- conversation state ---------- */
  let state = 'idle';        // which input the bot expects: 'name' | 'pickup' | others via chips
  let booking = {};          // { name, dayOffset, slot, pickup }
  let booked = false;        // a ride was booked this session → keep the "what happened" panel
  let lastChips = null;      // current chip set, re-offered if free text arrives out of turn
  let scrollEl = null, chipsRow = null;
  let renderedLang = null;

  /* ---------- static chrome (rebuilt only on language change) ---------- */
  function buildChrome() {
    renderedLang = CWA.lang;
    document.body.innerHTML =
      '<div class="stack" style="max-width:30rem;margin:0 auto;padding:1.25rem 1rem 3rem">' +
      '<div class="between">' +
      '<a class="icon-btn" href="index.html" aria-label="' + esc(t('common.back')) + '">' + icon('chevronLeft') + '</a>' +
      '<div class="h2">' + esc(t('wa.title')) + '</div>' +
      CWA.ui.langMenu() +
      '</div>' +
      '<p class="small muted center">' + esc(t('wa.explainer')) + '</p>' +
      '<div class="phone-frame">' +
      '<div class="wa-header"><div class="avatar">CWA</div>' +
      '<div class="grow"><div class="wa-title">' + esc(t('brand')) + ' München</div>' +
      '<div class="wa-sub">' + esc(t('wa.online')) + '</div></div>' + icon('whatsapp') + '</div>' +
      '<div class="wa-scroll" id="wa-scroll"></div>' +
      '<div class="wa-input-row">' +
      '<input id="wa-input" type="text" placeholder="' + esc(t('wa.inputPh')) + '" autocomplete="off">' +
      '<button type="button" class="wa-send" id="wa-send" aria-label="' + esc(t('common.send')) + '">' + icon('send') + '</button>' +
      '</div></div>' +
      '<div id="wa-after" class="stack"></div>' +
      '</div>';

    scrollEl = document.getElementById('wa-scroll');
    chipsRow = null;
    document.getElementById('wa-send').addEventListener('click', sendText);
    document.getElementById('wa-input').addEventListener('keydown', function (e) {
      if (e.key === 'Enter') sendText();
    });
    if (booked) showAfter();
    startConversation();
  }

  /* ---------- message primitives ---------- */
  function scrollDown() { scrollEl.scrollTop = scrollEl.scrollHeight; }
  function timeStamp() { return '<div class="wa-time">' + esc(CWA.fmt.time(Date.now())) + '</div>'; }

  function addUser(text) {
    const el = document.createElement('div');
    el.className = 'wa-msg wa-user';
    el.innerHTML = esc(text) + timeStamp();
    scrollEl.appendChild(el);
    scrollDown();
  }

  /* bot bubble: typing dots for ~700 ms, then the message (html pre-escaped by callers) */
  function bot(html, done) {
    const el = document.createElement('div');
    el.className = 'wa-msg wa-bot';
    el.innerHTML = '<span class="wa-typing"><span></span><span></span><span></span></span>';
    scrollEl.appendChild(el);
    scrollDown();
    setTimeout(function () {
      el.innerHTML = html + timeStamp();
      scrollDown();
      if (done) done();
    }, 700);
  }

  function clearChips() { if (chipsRow) { chipsRow.remove(); chipsRow = null; } }

  function chips(list) {
    lastChips = list;
    clearChips();
    chipsRow = document.createElement('div');
    chipsRow.className = 'wa-chips';
    list.forEach(function (c) {
      const b = document.createElement('button');
      b.type = 'button';
      b.className = 'wa-chip';
      b.textContent = c.label;
      b.addEventListener('click', function () {
        clearChips();
        lastChips = null;
        addUser(c.label);
        c.action();
      });
      chipsRow.appendChild(b);
    });
    scrollEl.appendChild(chipsRow);
    scrollDown();
  }

  function sendText() {
    const input = document.getElementById('wa-input');
    const v = input.value.trim();
    if (!v) return;
    input.value = '';
    clearChips();
    addUser(v);
    if (state === 'name') { gotName(v); }
    else if (state === 'pickup') { gotPickup(v); }
    else if (lastChips) { chips(lastChips); } // gently re-offer the options
  }

  /* ---------- state machine ---------- */
  function startConversation() {
    scrollEl.innerHTML = '';
    chipsRow = null;
    lastChips = null;
    state = 'idle';
    booking = {};
    bot(esc(t('wa.greet')), function () {
      chips([bookChip(), { label: t('wa.chipHow'), action: how }]);
    });
  }

  function bookChip() { return { label: t('wa.chipBook'), action: askName }; }

  function how() {
    bot(esc(t('wa.how')), function () {
      chips([bookChip()]);
    });
  }

  function askName() {
    state = 'idle';
    bot(esc(t('wa.askName')), function () {
      state = 'name';
      chips([{ label: 'Rosa Eder', action: function () { gotName('Rosa Eder'); } }]);
    });
  }

  function gotName(name) {
    booking.name = name;
    state = 'idle';
    bot(esc(t('wa.askDay', { name: name })), function () {
      state = 'day';
      chips([
        { label: t('common.today'), action: function () { gotDay(0); } },
        { label: t('common.tomorrow'), action: function () { gotDay(1); } },
        { label: t('wa.saturday'), action: function () { gotDay(satOffset()); } }
      ]);
    });
  }

  function satOffset() {
    const off = (6 - new Date().getDay() + 7) % 7;
    return off === 0 ? 7 : off; // "Saturday" on a Saturday means next week
  }

  function gotDay(dayOffset) {
    booking.dayOffset = dayOffset;
    state = 'idle';
    bot(esc(t('wa.askSlot')), function () {
      state = 'slot';
      chips([
        { label: t('slot.morning'), action: function () { gotSlot('morning'); } },
        { label: t('slot.afternoon'), action: function () { gotSlot('afternoon'); } }
      ]);
    });
  }

  function gotSlot(slot) {
    booking.slot = slot;
    state = 'idle';
    bot(esc(t('wa.askPickup')), function () {
      state = 'pickup';
      chips([{ label: 'Hirschgartenallee 8', action: function () { gotPickup('Hirschgartenallee 8'); } }]);
    });
  }

  function gotPickup(place) {
    booking.pickup = place;
    state = 'idle';
    bot(esc(t('wa.waiverIntro')) + '<br><br>' + esc(t('waiver.text')), function () {
      bot(esc(t('wa.agreeQ')), function () {
        state = 'waiver';
        chips([{ label: t('wa.agree'), action: confirmStep }]);
      });
    });
  }

  function rideTs() {
    const d = new Date();
    d.setDate(d.getDate() + booking.dayOffset);
    d.setHours(booking.slot === 'morning' ? 9 : 13, 0, 0, 0);
    return d.getTime();
  }

  function confirmStep() {
    state = 'idle';
    const when = CWA.fmt.day(rideTs()) + ' · ' + t('slot.' + booking.slot);
    bot(esc(t('wa.confirm', { name: booking.name, when: when, place: booking.pickup })), function () {
      state = 'confirm';
      chips([
        { label: t('wa.yesBook'), action: bookRide },
        { label: t('wa.startOver'), action: startConversation }
      ]);
    });
  }

  /* THE REAL WRITE — identical semantics to the app pages */
  function bookRide() {
    state = 'idle';
    const name = booking.name, pickup = booking.pickup, slot = booking.slot, ts = rideTs();
    CWA.store.update(function (db) {
      var client = db.clients.filter(function (c) { return c.name === name; })[0];
      if (!client) {
        client = { id: CWA.store.uid('c'), name: name, age: null, phone: '+49 151 555 0000', address: pickup, mobilityNotes: '', waiverSigned: true, signedBy: 'whatsapp', proxy: null };
        db.clients.push(client);
      } else {
        client.waiverSigned = true;
      }
      var ride = { id: CWA.store.uid('r'), chapterId: 'muc', type: 'pleasure', status: 'open', clientId: client.id, source: 'whatsapp',
        ts: ts, slot: slot, durationMin: 60, riders: 1, pickup: pickup, stops: [], returnRide: false,
        trishawId: 't1', pilotId: null, notes: '', debrief: null, createdAt: Date.now() };
      db.rides.push(ride);
      var when = CWA.fmt.rideWhen(ride);
      CWA.store.notify(db, 'pilot', 'notif.rideOpen', { name: name, when: when, place: pickup }, '#feed');
      CWA.store.notify(db, 'admin', 'notif.newRequest', { name: name, when: when }, '#requests');
    });
    booked = true;
    bot(esc(t('wa.booked')), function () {
      showAfter();
      chips([{ label: t('wa.again'), action: function () { gotName(booking.name); } }]);
    });
  }

  /* ---------- "what just happened" panel below the phone ---------- */
  function showAfter() {
    document.getElementById('wa-after').innerHTML =
      '<div class="card stack-sm">' +
      '<div class="row"><div class="icon-tile icon-tile-sm">' + icon('sparkles') + '</div>' +
      '<span class="h2">' + esc(t('wa.whatTitle')) + '</span></div>' +
      '<p class="small muted">' + esc(t('wa.whatBody')) + '</p></div>' +
      '<a class="link-card" href="pilot.html"><div class="icon-tile">' + icon('bike') + '</div>' +
      '<div class="grow medium">' + esc(t('wa.toPilot')) + '</div>' +
      '<span class="link-card-chevron">' + icon('chevronRight') + '</span></a>' +
      '<a class="link-card" href="admin.html"><div class="icon-tile">' + icon('dashboard') + '</div>' +
      '<div class="grow medium">' + esc(t('wa.toAdmin')) + '</div>' +
      '<span class="link-card-chevron">' + icon('chevronRight') + '</span></a>';
  }

  /* ---------- boot ---------- */
  /* No router: single view. Language change rebuilds the chrome and restarts the
     conversation (already-booked state is kept); store changes are a no-op here. */
  CWA.render = function () {
    if (renderedLang !== CWA.lang) buildChrome();
  };

  CWA.store.get(); // ensure seeded
  buildChrome();
})();
