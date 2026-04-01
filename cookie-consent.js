(function () {
  var STORAGE_KEY = 'dlh_cookie_consent';

  // Wire up any revoke links on the page (delegated so it works with dynamic footer)
  document.addEventListener('click', function (e) {
    if (e.target.closest('[data-cc-revoke]')) {
      e.preventDefault();
      localStorage.removeItem(STORAGE_KEY);
      showBanner();
    }
  });

  if (localStorage.getItem(STORAGE_KEY)) return;

  showBanner();


  function showBanner() {
    if (document.getElementById('cookie-banner')) return;
    var lang = localStorage.getItem('dlh_lang') ||
      ((navigator.language || 'de').toLowerCase().startsWith('de') ? 'de' : 'en');
    var t = lang === 'en'
      ? { title: 'Privacy Notice', body: 'This website uses only technically necessary cookies. No tracking or analytics cookies are used. For more information please see our <a href="datenschutz.html">Privacy Policy</a>.', btn: 'Got it' }
      : { title: 'Datenschutzhinweis', body: 'Diese Website verwendet ausschließlich technisch notwendige Cookies. Es werden keine Tracking- oder Analyse-Cookies eingesetzt. Weitere Informationen finden Sie in unserer <a href="datenschutz.html">Datenschutzerklärung</a>.', btn: 'Verstanden' };
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
    localStorage.setItem(STORAGE_KEY, '1');
    banner.classList.add('cc-hidden');
    setTimeout(function () { banner.remove(); }, 400);
  });
  } // end showBanner
})();
