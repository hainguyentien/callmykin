/* ============================================================
   CallMyKin — main.js
   ============================================================ */

/* ─── 1. Scroll-triggered fade-in ──────────────────────────── */
(function initFadeIn() {
  var els = document.querySelectorAll('.fade-in');
  if (!els.length) return;

  var observer = new IntersectionObserver(function(entries) {
    entries.forEach(function(entry) {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.15 });

  els.forEach(function(el) { observer.observe(el); });
}());


/* ─── 2. Navigation: scroll shadow + hamburger menu ────────── */
(function initNav() {
  var nav     = document.getElementById('nav');
  var burger  = document.getElementById('navBurger');
  var links   = document.getElementById('navLinks');
  if (!nav || !burger || !links) return;

  /* Shadow on scroll */
  window.addEventListener('scroll', function() {
    nav.classList.toggle('scrolled', window.scrollY > 20);
  }, { passive: true });

  /* Hamburger toggle */
  burger.addEventListener('click', function() {
    var isOpen = links.classList.toggle('open');
    burger.classList.toggle('active', isOpen);
    burger.setAttribute('aria-expanded', String(isOpen));
    document.body.style.overflow = isOpen ? 'hidden' : '';
  });

  /* Close on nav link click */
  links.querySelectorAll('a').forEach(function(a) {
    a.addEventListener('click', function() {
      links.classList.remove('open');
      burger.classList.remove('active');
      burger.setAttribute('aria-expanded', 'false');
      document.body.style.overflow = '';
    });
  });

  /* Close on Escape key */
  document.addEventListener('keydown', function(e) {
    if (e.key === 'Escape' && links.classList.contains('open')) {
      links.classList.remove('open');
      burger.classList.remove('active');
      burger.setAttribute('aria-expanded', 'false');
      document.body.style.overflow = '';
      burger.focus();
    }
  });
}());


/* ─── 3. Dialect tab switcher ──────────────────────────────── */
(function initDialectTabs() {
  var tabs   = document.querySelectorAll('.dialect-tab');
  var panels = document.querySelectorAll('.dialect-panel');
  if (!tabs.length) return;

  tabs.forEach(function(tab) {
    tab.addEventListener('click', function() {
      /* Deactivate all */
      tabs.forEach(function(t) {
        t.classList.remove('active');
        t.setAttribute('aria-selected', 'false');
      });
      panels.forEach(function(p) { p.classList.remove('active'); });

      /* Activate clicked */
      tab.classList.add('active');
      tab.setAttribute('aria-selected', 'true');
      var target = document.getElementById('panel-' + tab.dataset.dialect);
      if (target) target.classList.add('active');
    });

    /* Keyboard: arrow keys to navigate tabs */
    tab.addEventListener('keydown', function(e) {
      var tabArr = Array.from(tabs);
      var idx    = tabArr.indexOf(tab);
      var next;
      if (e.key === 'ArrowRight' || e.key === 'ArrowDown') {
        next = tabArr[(idx + 1) % tabArr.length];
      } else if (e.key === 'ArrowLeft' || e.key === 'ArrowUp') {
        next = tabArr[(idx - 1 + tabArr.length) % tabArr.length];
      }
      if (next) {
        next.focus();
        next.click();
        e.preventDefault();
      }
    });
  });
}());


/* ─── 3b. Dialect pronunciation playback ───────────────────── */
(function initDialectAudio() {
  var buttons = document.querySelectorAll('.dp-play');
  if (!buttons.length) return;

  var currentAudio = null;

  buttons.forEach(function(btn) {
    btn.addEventListener('click', function() {
      if (currentAudio) {
        currentAudio.pause();
        currentAudio.currentTime = 0;
      }
      var audio = new Audio(btn.dataset.audio);
      currentAudio = audio;
      btn.classList.add('playing');
      audio.addEventListener('ended', function() { btn.classList.remove('playing'); });
      audio.play().catch(function() { btn.classList.remove('playing'); });
    });
  });
}());


/* ─── 4. Video placeholder → YouTube iframe swap ───────────── */
(function initVideoCards() {
  document.querySelectorAll('.video-card__thumb').forEach(function(thumb) {
    var ytId = (thumb.dataset.youtubeId || '').trim();
    if (!ytId) return;

    var card   = thumb.closest('.video-card');
    var titleEl = card ? card.querySelector('h3') : null;
    var title  = titleEl ? titleEl.textContent : 'CallMyKin Video';

    var iframe = document.createElement('iframe');
    iframe.src = 'https://www.youtube.com/embed/' + ytId;
    iframe.allow = 'accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture';
    iframe.setAttribute('allowfullscreen', '');
    iframe.setAttribute('loading', 'lazy');
    iframe.title = title;

    thumb.innerHTML = '';
    thumb.appendChild(iframe);
  });
}());


/* ─── 5. Hero floating-character parallax (pointer devices) ── */
(function initParallax() {
  var hero  = document.querySelector('.hero');
  var chars = document.querySelectorAll('.hero__char');
  if (!hero || !chars.length) return;

  /* Only run on true pointer/mouse devices; skip touch */
  if (!window.matchMedia('(hover: hover) and (pointer: fine)').matches) return;

  var rafId = null;
  var targetX = 0, targetY = 0;
  var currentX = 0, currentY = 0;

  hero.addEventListener('mousemove', function(e) {
    targetX = e.clientX / window.innerWidth  - 0.5;
    targetY = e.clientY / window.innerHeight - 0.5;
  }, { passive: true });

  hero.addEventListener('mouseleave', function() {
    targetX = 0;
    targetY = 0;
  });

  function tick() {
    /* Lerp for smooth follow */
    currentX += (targetX - currentX) * 0.08;
    currentY += (targetY - currentY) * 0.08;

    chars.forEach(function(c, i) {
      var depth = ((i % 3) + 1) * 12;
      c.style.transform = 'translate(' + (currentX * depth) + 'px, ' + (currentY * depth) + 'px)';
    });

    rafId = requestAnimationFrame(tick);
  }

  /* Start loop when hero is visible */
  var heroObserver = new IntersectionObserver(function(entries) {
    if (entries[0].isIntersecting) {
      if (!rafId) rafId = requestAnimationFrame(tick);
    } else {
      if (rafId) { cancelAnimationFrame(rafId); rafId = null; }
    }
  });
  heroObserver.observe(hero);
}());


/* ─── 6. Smooth active-link highlight on scroll ────────────── */
(function initActiveNav() {
  var navLinks = document.querySelectorAll('.nav__links a[href^="#"]');
  if (!navLinks.length) return;

  var sections = Array.from(navLinks).map(function(a) {
    return document.querySelector(a.getAttribute('href'));
  }).filter(Boolean);

  var observer = new IntersectionObserver(function(entries) {
    entries.forEach(function(entry) {
      if (!entry.isIntersecting) return;
      var id = entry.target.id;
      navLinks.forEach(function(a) {
        var matches = a.getAttribute('href') === '#' + id;
        a.style.color = matches ? 'var(--red)' : '';
        a.style.fontWeight = matches ? '700' : '';
      });
    });
  }, { threshold: 0.4 });

  sections.forEach(function(s) { observer.observe(s); });
}());

export {};
