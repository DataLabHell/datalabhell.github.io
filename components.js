(function () {
  var isIndex = !document.body.classList.contains('inner-page');
  var base = isIndex ? '' : 'index.html';
  var staticBase = isIndex ? 'static/' : 'static/';

  // ── Header ───────────────────────────────────────────────────────────────
  var headerEl = document.querySelector('header');
  if (headerEl) {
    headerEl.innerHTML = [
      '<div class="container">',
      '  <a class="logo" href="' + (isIndex ? '#hero' : 'index.html') + '">',
      '    <img src="' + staticBase + 'brand/LOGO_DLH_header.svg" alt="Data Lab Hell" />',
      '  </a>',
      '  <nav id="main-nav">',
      '    <a href="' + base + '#about">About</a>',
      '    <a href="' + base + '#research">Research</a>',
      '    <a href="' + base + '#team">Team</a>',
      '    <a href="' + base + '#kooperationen">Collaborations</a>',
      '    <a href="' + base + '#contact">Contact</a>',
      '  </nav>',
      '  <button class="burger" id="burger" aria-label="Toggle menu" aria-expanded="false">',
      '    <span></span><span></span><span></span>',
      '  </button>',
      '</div>'
    ].join('\n');

    // Burger toggle
    var burger = document.getElementById('burger');
    var nav = document.getElementById('main-nav');
    burger.addEventListener('click', function () {
      var open = nav.classList.toggle('nav-open');
      burger.classList.toggle('burger-open', open);
      burger.setAttribute('aria-expanded', open);
    });

    // Close nav when a link is clicked
    nav.addEventListener('click', function (e) {
      if (e.target.tagName === 'A') {
        nav.classList.remove('nav-open');
        burger.classList.remove('burger-open');
        burger.setAttribute('aria-expanded', 'false');
      }
    });
  }

  // ── Footer ───────────────────────────────────────────────────────────────
  var footerEl = document.querySelector('footer');
  if (footerEl) {
    footerEl.innerHTML = [
      '<div class="container footer-bottom-inner">',
      '  <p class="copy">&copy; 2026 Data Lab Hell GmbH &middot; Zirl, Austria</p>',
      '  <nav class="footer-legal">',
      '    <a href="#" data-cc-revoke>Einwilligungen widerrufen</a>',
      '    <a href="datenschutz.html">Datenschutz</a>',
      '    <a href="impressum.html">Impressum</a>',
      '  </nav>',
      '</div>'
    ].join('\n');
  }

  // ── Back-to-top button ───────────────────────────────────────────────────
  var btn = document.createElement('button');
  btn.id = 'back-to-top';
  btn.setAttribute('aria-label', 'Back to top');
  btn.textContent = '↑';
  document.body.appendChild(btn);

  btn.addEventListener('click', function () {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  });

  // ── Scroll handlers ──────────────────────────────────────────────────────
  var header = document.querySelector('header');

  window.addEventListener('scroll', function () {
    btn.classList.toggle('visible', window.scrollY > 400);
    if (isIndex && header) {
      header.classList.toggle('scrolled', window.scrollY > 40);
    }
  }, { passive: true });

  // trigger once on load
  if (isIndex && header) {
    header.classList.toggle('scrolled', window.scrollY > 40);
  }

  // ── Active footer link (subpages only) ───────────────────────────────────
  if (!isIndex) {
    var path = window.location.pathname;
    document.querySelectorAll('footer .footer-legal a').forEach(function (a) {
      var href = a.getAttribute('href');
      if (href && path.includes(href.replace('.html', ''))) {
        a.setAttribute('aria-current', 'page');
      }
    });
  }

  // ── Team toggle (index only) ─────────────────────────────────────────────
  if (isIndex) {
    var teamToggle = document.getElementById('team-toggle');
    var teamExpanded = document.getElementById('team-expanded');
    if (teamToggle && teamExpanded) {
      teamToggle.addEventListener('click', function () {
        var open = teamExpanded.style.display !== 'none';
        teamExpanded.style.display = open ? 'none' : 'grid';
        teamToggle.textContent = open ? 'Alle Teammitglieder anzeigen ↓' : 'Weniger anzeigen ↑';
      });
    }
  }

  // ── Active nav highlight (index only, scroll-based) ──────────────────────
  if (isIndex) {
    var sections = document.querySelectorAll('section[id], div.hero[id]');
    var navLinks = document.querySelectorAll('header nav a');

    function onScroll() {
      var headerH = header ? header.offsetHeight : 0;
      var atBottom = window.scrollY + window.innerHeight >= document.documentElement.scrollHeight - 10;
      var current = '';
      sections.forEach(function (sec) {
        if (window.scrollY >= sec.offsetTop - headerH - 8) {
          current = sec.id;
        }
      });
      // If at the bottom of the page, force the last section active
      if (atBottom && sections.length) {
        current = sections[sections.length - 1].id;
      }
      navLinks.forEach(function (a) {
        a.classList.toggle('active', a.getAttribute('href') === '#' + current);
      });
    }

    window.addEventListener('scroll', onScroll, { passive: true });
    onScroll();
  }

  // ── Ticker ───────────────────────────────────────────────────────────────
  var tickerInner = document.querySelector('.ticker-inner');
  if (tickerInner) {
    var track = tickerInner.parentNode; // .ticker-track

    // Wrap original + clone in a single flex row that we will translate
    var wrapper = document.createElement('div');
    wrapper.style.cssText = 'display:flex;gap:7rem;width:max-content;will-change:transform;';
    track.appendChild(wrapper);
    wrapper.appendChild(tickerInner); // move original into wrapper
    var clone = tickerInner.cloneNode(true);
    wrapper.appendChild(clone);

    var speed = 0.5; // px per frame
    var pos = 0;
    var paused = false;
    var singleWidth = 0;

    track.parentNode.addEventListener('mouseenter', function () { paused = true; });
    track.parentNode.addEventListener('mouseleave', function () { paused = false; });

    function tick() {
      if (!paused) {
        pos -= speed;
        if (Math.abs(pos) >= singleWidth) pos = 0;
        wrapper.style.transform = 'translateX(' + pos + 'px)';
      }
      requestAnimationFrame(tick);
    }

    // Wait for images to load so widths are correct
    window.addEventListener('load', function () {
      var gap = parseFloat(getComputedStyle(wrapper).gap) || 0;
      singleWidth = tickerInner.offsetWidth + gap;
      requestAnimationFrame(tick);
    });
  }
})();
