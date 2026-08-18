/* ==========================================================================
   CWA.auth — the shared sign-in / sign-up / onboarding machinery.

   Both mobile apps run the exact same flow with their own copy and art:
     welcome → (passkey | phone → one-time code) → app
     welcome → sign up (page-owned wizard) → animated onboarding → app

   The mock is honest about the real thing: a passkey ceremony has a system
   sheet and a verify moment; an SMS code arrives and iOS autofills it. Both
   are played back here so the client sees the real rhythm, not a jump cut.
   ========================================================================== */
(function () {
  var esc = CWA.esc;
  var t = function (k, p) { return CWA.t(k, p); };
  var A = {};

  /* ------------------------------- session ------------------------------- */
  function key(persona) { return 'cwa.auth.' + persona; }
  function outKey(persona) { return 'cwa.auth.' + persona + '.loggedOut'; }
  function onbKey(persona) { return 'cwa.onb.' + persona; }

  A.read = function (persona) {
    try { return JSON.parse(localStorage.getItem(key(persona))); } catch (e) { return null; }
  };
  A.save = function (persona, s) {
    localStorage.setItem(key(persona), JSON.stringify(s));
    localStorage.removeItem(outKey(persona));
    return s;
  };
  /* Golden path needs zero login: seed the demo persona unless the user logged out. */
  A.boot = function (persona, demo) {
    var s = A.read(persona);
    if (s && s.loggedIn) return s;
    if (localStorage.getItem(outKey(persona)) === '1') return null;
    return A.save(persona, demo);
  };
  A.logout = function (persona) {
    localStorage.removeItem(key(persona));
    localStorage.setItem(outKey(persona), '1');
    location.hash = '';
    location.reload();
  };
  /* Used by the launcher to replay the flow from the very first screen. */
  A.replay = function (persona) {
    localStorage.removeItem(key(persona));
    localStorage.removeItem(onbKey(persona));
    localStorage.setItem(outKey(persona), '1');
  };
  A.onboarded = function (persona) { return localStorage.getItem(onbKey(persona)) === '1'; };
  A.markOnboarded = function (persona) { localStorage.setItem(onbKey(persona), '1'); };

  /* ------------------------------ one-time code -------------------------- */
  A.otpRow = function (digits) {
    var out = '<div class="otp-row" id="otp-row">';
    for (var i = 0; i < 6; i++) {
      var v = (digits && digits[i]) || '';
      out += '<input class="otp-box' + (v ? ' filled' : '') + '" data-otp="' + i + '" type="text" ' +
        'inputmode="numeric" maxlength="1" autocomplete="one-time-code" aria-label="' + (i + 1) + '" value="' + esc(v) + '">';
    }
    return out + '</div>';
  };

  /* Wires typing, backspace, paste and the SMS-autofill playback. */
  A.bindOtp = function (root, state, onComplete) {
    var boxes = [].slice.call(root.querySelectorAll('[data-otp]'));
    function sync() {
      boxes.forEach(function (b, i) {
        b.value = state.digits[i] || '';
        b.classList.toggle('filled', !!state.digits[i]);
      });
      if (state.digits.filter(Boolean).length === 6) onComplete(state.digits.join(''));
    }
    boxes.forEach(function (b, i) {
      b.addEventListener('input', function () {
        var v = b.value.replace(/\D/g, '').slice(-1);
        state.digits[i] = v;
        b.value = v;
        b.classList.toggle('filled', !!v);
        if (v && boxes[i + 1]) boxes[i + 1].focus();
        if (state.digits.filter(Boolean).length === 6) onComplete(state.digits.join(''));
      });
      b.addEventListener('keydown', function (e) {
        if (e.key === 'Backspace' && !b.value && boxes[i - 1]) { boxes[i - 1].focus(); state.digits[i - 1] = ''; }
      });
      b.addEventListener('paste', function (e) {
        var txt = (e.clipboardData || window.clipboardData).getData('text').replace(/\D/g, '').slice(0, 6);
        if (!txt) return;
        e.preventDefault();
        state.digits = txt.split('');
        sync();
      });
    });
    if (boxes[0] && !state.digits.filter(Boolean).length) setTimeout(function () { boxes[0].focus(); }, 120);
    return { boxes: boxes, sync: sync };
  };

  /* ------------------------------- login flow ---------------------------- */
  /* cfg: {persona, demo, setHtml, root, art, titleKey, subKey, passkeyHintKey,
           signupHash, signupKey, code, phone, onLogin} */
  A.loginFlow = function (cfg) {
    var st = { stage: 'idle', phone: cfg.phone || '', digits: ['', '', '', '', '', ''], error: false };
    var fillTimer = null;
    /* every shared string is overridable, so the pilot app can speak du-form */
    function K(name) { return (cfg.keys && cfg.keys[name]) || name; }
    function root() { return cfg.root(); }
    function stopTimers() { clearTimeout(fillTimer); }

    /* ---- #welcome ---- */
    function welcome() {
      stopTimers();
      if (st.stage === 'passkey' || st.stage === 'ok') { verifying(); return; }
      cfg.setHtml(
        '<div class="auth-screen">' +
        '<div class="between" style="padding:.25rem 0 .5rem">' + CWA.ui.brandLockup() + CWA.ui.langMenu() + '</div>' +
        '<div class="auth-art reveal">' + CWA.art.hero(cfg.art) + '</div>' +
        '<div class="stack-lg grow" style="justify-content:flex-start">' +
        '<div class="stack-sm reveal" style="--i:1">' +
        '<div class="display">' + esc(t(cfg.titleKey)) + '</div>' +
        '<p class="muted">' + esc(t(cfg.subKey)) + '</p>' +
        '</div>' +
        '<div class="stack reveal" style="--i:2">' +
        '<button type="button" class="btn-hero" id="pk-btn">' +
        '<span class="grow">' + esc(t(K('auth.passkey'))) +
        '<span class="btn-hero-sub">' + esc(t(cfg.passkeyHintKey)) + '</span></span>' +
        '<span class="btn-hero-knob">' + CWA.icon('key') + '</span></button>' +
        '<button type="button" class="btn btn-outline btn-lg btn-block" data-nav="#phone">' +
        CWA.icon('phone') + esc(t(K('auth.usePhone'))) + '</button>' +
        '</div>' +
        '<div class="row reveal" style="--i:3"><span class="divider grow"></span>' +
        '<span class="tiny muted">' + esc(t(K('auth.or'))) + '</span><span class="divider grow"></span></div>' +
        '<button type="button" class="btn btn-secondary btn-lg btn-block reveal" style="--i:4" data-nav="' + esc(cfg.signupHash) + '">' +
        CWA.icon('plus') + esc(t(cfg.signupKey)) + '</button>' +
        '<p class="tiny muted center reveal" style="--i:5">' + esc(t(K('auth.terms'))) + '</p>' +
        '</div></div>');

      root().querySelector('#pk-btn').addEventListener('click', function () {
        st.stage = 'passkey';
        CWA.render();
      });
    }

    /* the passkey ceremony: verify → confirmed → in */
    function verifying() {
      var ok = st.stage === 'ok';
      cfg.setHtml(
        '<div class="auth-screen" style="justify-content:center;align-items:center;text-align:center;gap:1.5rem">' +
        '<div class="passkey-orb' + (ok ? ' ok' : '') + '">' + CWA.icon(ok ? 'check' : 'key') + '</div>' +
        '<div class="stack-sm">' +
        '<div class="display display-sm">' + esc(t(K(ok ? 'auth.welcomeBack' : 'auth.verifying'))) + '</div>' +
        (ok ? '' : '<p class="muted">' + esc(t(cfg.passkeyHintKey)) + '</p>') +
        '</div></div>');
      if (ok) { fillTimer = setTimeout(cfg.onLogin, 800); return; }
      fillTimer = setTimeout(function () { st.stage = 'ok'; CWA.render(); }, 1300);
    }

    /* ---- #phone ---- */
    function phone() {
      stopTimers();
      cfg.setHtml(
        CWA.ui.backHead({ back: '#welcome' }) +
        '<div class="app-body stack-lg" style="padding-bottom:2rem">' +
        '<div class="stack-sm reveal">' +
        '<div class="display display-sm">' + esc(t(K('auth.phoneTitle'))) + '</div>' +
        '<p class="muted">' + esc(t(K('auth.phoneSub'))) + '</p></div>' +
        '<div class="field reveal" style="--i:1"><label class="label" for="ph-in">' + esc(t('common.phone')) + '</label>' +
        '<input class="input" id="ph-in" type="tel" inputmode="tel" autocomplete="tel" value="' + esc(st.phone) + '"></div>' +
        '<button type="button" class="btn-hero reveal" style="--i:2" id="ph-next"' + (st.phone.length < 6 ? ' disabled' : '') + '>' +
        '<span class="grow">' + esc(t(K('auth.sendCode'))) + '</span>' +
        '<span class="btn-hero-knob">' + CWA.icon('arrowRight') + '</span></button>' +
        '</div>');

      var inp = root().querySelector('#ph-in');
      var btn = root().querySelector('#ph-next');
      inp.addEventListener('input', function () {
        st.phone = inp.value;
        btn.disabled = st.phone.replace(/\D/g, '').length < 6;
      });
      btn.addEventListener('click', function () {
        st.digits = ['', '', '', '', '', ''];
        st.error = false;
        CWA.nav('#code');
      });
    }

    /* ---- #code ---- */
    function code() {
      stopTimers();
      cfg.setHtml(
        CWA.ui.backHead({ back: '#phone' }) +
        '<div class="app-body stack-lg" style="padding-bottom:2rem">' +
        '<div class="stack-sm reveal">' +
        '<div class="display display-sm">' + esc(t(K('auth.codeTitle'))) + '</div>' +
        '<p class="muted">' + esc(t(K('auth.codeSub'), { phone: st.phone })) + '</p></div>' +
        '<div class="reveal" style="--i:1">' + A.otpRow(st.digits) + '</div>' +
        (st.error ? '<p class="small center text-destructive">' + esc(t(K('auth.wrongCode'))) + '</p>' : '') +
        '<div class="center reveal" style="--i:2"><span class="code-hint">' + CWA.icon('mail') +
        esc(t(K('auth.codeDemo'), { code: cfg.code })) + '</span></div>' +
        '<button type="button" class="btn btn-ghost btn-block reveal" style="--i:3" id="resend">' +
        esc(t(K('auth.resend'))) + '</button>' +
        '</div>');

      var el = root();
      var api = A.bindOtp(el, st, function (entered) {
        if (entered !== cfg.code.replace(/\s/g, '')) {
          st.error = true;
          st.digits = ['', '', '', '', '', ''];
          el.querySelector('.otp-row').animate(
            [{ transform: 'translateX(0)' }, { transform: 'translateX(-8px)' }, { transform: 'translateX(8px)' }, { transform: 'translateX(0)' }],
            { duration: 260 });
          setTimeout(function () { CWA.render(); }, 280);
          return;
        }
        st.stage = 'ok';
        setTimeout(function () {
          cfg.setHtml(
            '<div class="auth-screen" style="justify-content:center;align-items:center;text-align:center;gap:1rem">' +
            '<div style="width:min(20rem,80%)">' + CWA.art.hero('celebrate') + '</div>' +
            '<div class="display display-sm">' + esc(t(K('auth.welcomeBack'))) + '</div></div>');
          fillTimer = setTimeout(cfg.onLogin, 1000);
        }, 220);
      });

      /* SMS autofill playback — the digits drop in one by one, like a real phone */
      if (!st.digits.filter(Boolean).length && !st.error) {
        var chars = cfg.code.replace(/\s/g, '').split('');
        var i = 0;
        var tick = function () {
          if (!document.body.contains(api.boxes[0])) return;
          st.digits[i] = chars[i];
          api.boxes[i].value = chars[i];
          api.boxes[i].classList.add('filled', 'pop');
          i++;
          if (i < 6) { fillTimer = setTimeout(tick, 110); return; }
          api.sync();
        };
        fillTimer = setTimeout(tick, 1500);
      }

      el.querySelector('#resend').addEventListener('click', function () {
        st.digits = ['', '', '', '', '', ''];
        st.error = false;
        CWA.ui.toast(t(K('auth.resent')), 'info');
        CWA.render();
      });
    }

    return { welcome: welcome, phone: phone, code: code, state: st };
  };

  /* ------------------------------ onboarding ----------------------------- */
  /* cfg: {persona, slides:[{art,title,body,tone}], setHtml, root, onDone} */
  A.onboarding = function (cfg) {
    var i = Math.min(cfg.start || 0, cfg.slides.length - 1);
    var dir = 'r';

    function render() {
      if (cfg.onIndex) cfg.onIndex(i);
      var s = cfg.slides[i];
      var last = i === cfg.slides.length - 1;
      cfg.setHtml(
        '<div class="onb">' +
        '<div class="onb-top">' +
        (last ? '<span></span>' :
          '<button type="button" class="onb-skip" id="onb-skip">' + esc(t('common.skip')) + '</button>') +
        '</div>' +
        '<div class="onb-stage slide-in-' + dir + '" id="onb-stage">' +
        '<div class="onb-art">' + CWA.art.hero(s.art) + '</div>' +
        '<div class="onb-copy">' +
        '<div class="display">' + esc(s.title) + '</div>' +
        '<p class="muted">' + esc(s.body) + '</p>' +
        '</div></div>' +
        '<div class="onb-foot">' +
        '<div class="progress-dots">' + cfg.slides.map(function (_, k) {
          return '<span class="' + (k < i ? 'done' : k === i ? 'current' : '') + '"></span>';
        }).join('') + '</div>' +
        '<button type="button" class="btn-hero" id="onb-next">' +
        '<span class="grow">' + esc(t(last ? 'common.start' : 'common.continue')) + '</span>' +
        '<span class="btn-hero-knob">' + CWA.icon(last ? 'check' : 'arrowRight') + '</span></button>' +
        '</div></div>');

      var el = cfg.root();
      el.querySelector('#onb-next').addEventListener('click', function () {
        if (last) { finish(); return; }
        i++; dir = 'r'; render();
      });
      var skip = el.querySelector('#onb-skip');
      if (skip) skip.addEventListener('click', finish);

      /* swipe between slides — this is a phone mock, it should feel like one */
      var stage = el.querySelector('#onb-stage');
      var x0 = null;
      stage.addEventListener('touchstart', function (e) { x0 = e.touches[0].clientX; }, { passive: true });
      stage.addEventListener('touchend', function (e) {
        if (x0 === null) return;
        var dx = e.changedTouches[0].clientX - x0;
        x0 = null;
        if (dx < -50 && !last) { i++; dir = 'r'; render(); }
        if (dx > 50 && i > 0) { i--; dir = 'l'; render(); }
      });
    }

    function finish() {
      A.markOnboarded(cfg.persona);
      cfg.onDone();
    }

    return { render: render, reset: function () { i = 0; dir = 'r'; } };
  };

  CWA.auth = A;
})();
