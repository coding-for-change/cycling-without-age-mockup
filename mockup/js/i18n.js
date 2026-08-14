/* i18n engine. Dictionaries register via CWA.reg({en:{...},de:{...},da:{...}}) */
window.CWA = window.CWA || {};

CWA.dict = { en: {}, de: {}, da: {} };

CWA.reg = function (langs) {
  for (const l in langs) {
    CWA.dict[l] = Object.assign(CWA.dict[l] || {}, langs[l]);
  }
};

CWA.lang = localStorage.getItem('cwa.lang') || 'en';

CWA.t = function (key, params) {
  let s = CWA.dict[CWA.lang][key];
  if (s === undefined) s = CWA.dict.en[key];
  if (s === undefined) s = key;
  if (params) {
    for (const k in params) s = s.split('{' + k + '}').join(params[k]);
  }
  return s;
};

CWA.setLang = function (l) {
  if (!CWA.dict[l]) return;
  CWA.lang = l;
  localStorage.setItem('cwa.lang', l);
  document.documentElement.lang = l;
  if (CWA.renderShell) CWA.renderShell();
  if (CWA.render) CWA.render();
};

document.addEventListener('DOMContentLoaded', function () {
  document.documentElement.lang = CWA.lang;
});

/* Date / number formatting via Intl — no translation keys needed */
CWA.fmt = (function () {
  const locales = { en: 'en-GB', de: 'de-DE', da: 'da-DK' };
  const loc = () => locales[CWA.lang] || 'en-GB';
  const startOfDay = (ts) => { const d = new Date(ts); d.setHours(0, 0, 0, 0); return d.getTime(); };

  return {
    locale: loc,
    time: (ts) => new Intl.DateTimeFormat(loc(), { hour: '2-digit', minute: '2-digit' }).format(ts),
    date: (ts) => new Intl.DateTimeFormat(loc(), { day: 'numeric', month: 'short' }).format(ts),
    dateLong: (ts) => new Intl.DateTimeFormat(loc(), { weekday: 'long', day: 'numeric', month: 'long' }).format(ts),
    weekday: (ts) => new Intl.DateTimeFormat(loc(), { weekday: 'short' }).format(ts),
    monthShort: (ts) => new Intl.DateTimeFormat(loc(), { month: 'short' }).format(ts),
    euro: (n) => new Intl.NumberFormat(loc(), { style: 'currency', currency: 'EUR', maximumFractionDigits: 0 }).format(n),
    num: (n) => new Intl.NumberFormat(loc()).format(n),

    /* "Today" / "Tomorrow" / "Friday, 21 August" */
    day: function (ts) {
      const diff = Math.round((startOfDay(ts) - startOfDay(Date.now())) / 864e5);
      if (diff === 0) return CWA.t('common.today');
      if (diff === 1) return CWA.t('common.tomorrow');
      return this.dateLong(ts);
    },
    dayTime: function (ts) { return this.day(ts) + ' · ' + this.time(ts); },

    /* canonical ride time display: "Tomorrow · Morning" / "Today · 14:30" */
    rideWhen: function (ride) {
      const timePart = ride.slot === 'exact' ? this.time(ride.ts) : CWA.t('slot.' + ride.slot);
      return this.day(ride.ts) + ' · ' + timePart;
    },

    /* relative: "in 3 h 40 min" / "25 min ago" */
    rel: function (ts) {
      const d = ts - Date.now();
      const abs = Math.abs(d);
      const min = Math.round(abs / 6e4);
      const h = Math.floor(min / 60), m = min % 60;
      const days = Math.round(abs / 864e5);
      if (d >= 0) {
        if (min < 60) return CWA.t('rel.inMin', { m: min });
        if (min < 60 * 24) return CWA.t('rel.inHM', { h: h, m: m });
        return CWA.t('rel.inD', { d: days });
      }
      if (min < 60) return CWA.t('rel.agoMin', { m: min });
      if (min < 60 * 24) return CWA.t('rel.agoH', { h: h });
      return CWA.t('rel.agoD', { d: days });
    }
  };
})();
