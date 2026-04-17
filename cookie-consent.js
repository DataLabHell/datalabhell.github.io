(function () {
  var COOKIE_NAME = 'dlh_cookie_consent';

  function getConsent() {
    var m = document.cookie.match(/(?:^|;\s*)dlh_cookie_consent=([^;]+)/);
    return m ? m[1] : localStorage.getItem(COOKIE_NAME);
  }
  function setConsent() {
    document.cookie = COOKIE_NAME + '=1; path=/; domain=.datalabhell.at; max-age=31536000; SameSite=Lax';
    localStorage.setItem(COOKIE_NAME, '1');
  }
  function revokeConsent() {
    document.cookie = COOKIE_NAME + '=; path=/; domain=.datalabhell.at; max-age=0; SameSite=Lax';
    localStorage.removeItem(COOKIE_NAME);
  }

  // Wire up any revoke links on the page (delegated so it works with dynamic footer)
  document.addEventListener('click', function (e) {
    if (e.target.closest('[data-cc-revoke]')) {
      e.preventDefault();
      revokeConsent();
      showBanner();
    }
  });

  if (getConsent()) return;

  showBanner();

  function showBanner() {
    if (document.getElementById('cookie-banner')) return;
    var lang = document.cookie.match(/(?:^|;\s*)dlh_lang=([^;]+)/)
      ? document.cookie.match(/(?:^|;\s*)dlh_lang=([^;]+)/)[1]
      : localStorage.getItem('dlh_lang') || ((navigator.language || 'de').toLowerCase().startsWith('de') ? 'de' : 'en');
    var t = lang === 'en'
      ? { title: 'Privacy Notice', body: 'This website uses only technically necessary cookies. No tracking or analytics cookies are used. For more information please see our <a href="https://datalabhell.at/datenschutz.html">Privacy Policy</a>.', btn: 'Got it' }
      : { title: 'Datenschutzhinweis', body: 'Diese Website verwendet ausschließlich technisch notwendige Cookies. Es werden keine Tracking- oder Analyse-Cookies eingesetzt. Weitere Informationen finden Sie in unserer <a href="https://datalabhell.at/datenschutz.html">Datenschutzerklärung</a>.', btn: 'Verstanden' };
    var banner = document.createElement('div');
    banner.id = 'cookie-banner';
    banner.innerHTML =
      '<div class="cc-inner">' +
        '<div class="cc-text">' +
          '<strong>' + t.title + '</strong>' +
          '<p>' + t.body + '</p>' +
        '</div>' +
        '<div class="cc-actions">' +
          '<button id="cc-accept">' + t.btn + '</button>' +
        '</div>' +
      '</div>';

    document.body.appendChild(banner);

    document.getElementById('cc-accept').addEventListener('click', function () {
      setConsent();
      banner.classList.add('cc-hidden');
      setTimeout(function () { banner.remove(); }, 400);
    });
  }
})();
