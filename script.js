document.addEventListener('DOMContentLoaded', function () {
  var toggle = document.getElementById('nav-toggle');
  var nav = document.getElementById('main-nav');

  if (toggle && nav) {
    toggle.addEventListener('click', function () {
      var isOpen = nav.classList.toggle('open');
      toggle.setAttribute('aria-expanded', isOpen ? 'true' : 'false');
    });

    nav.querySelectorAll('a').forEach(function (link) {
      link.addEventListener('click', function () {
        nav.classList.remove('open');
        toggle.setAttribute('aria-expanded', 'false');
      });
    });
  }

  var yearEl = document.getElementById('year');
  if (yearEl) {
    yearEl.textContent = new Date().getFullYear();
  }

  initHeroStars();
  initHeroParallax();
});

function prefersReducedMotion() {
  return window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches;
}

function initHeroStars() {
  var container = document.getElementById('hero-stars');
  if (!container) return;

  var reduced = prefersReducedMotion();
  var count = 46;

  for (var i = 0; i < count; i++) {
    var star = document.createElement('span');
    var size = Math.random() * 1.6 + 0.8;
    star.className = 'star';
    star.style.width = size + 'px';
    star.style.height = size + 'px';
    star.style.top = (Math.random() * 100) + '%';
    star.style.left = (Math.random() * 100) + '%';

    if (reduced) {
      star.style.animation = 'none';
      star.style.opacity = '0.3';
    } else {
      star.style.animationDelay = (Math.random() * 4) + 's';
      star.style.animationDuration = (3 + Math.random() * 3) + 's';
    }
    container.appendChild(star);
  }
}

function initHeroParallax() {
  var hero = document.getElementById('hero');
  var layer = document.getElementById('orbit-layer');
  if (!hero || !layer) return;

  if (prefersReducedMotion()) {
    hero.querySelectorAll('animateMotion').forEach(function (el) {
      el.setAttribute('repeatCount', '1');
      el.setAttribute('dur', '0.01s');
    });
    return;
  }

  if (window.matchMedia && window.matchMedia('(hover: none)').matches) {
    return; // skip pointer parallax on touch devices
  }

  hero.addEventListener('mousemove', function (e) {
    var rect = hero.getBoundingClientRect();
    var px = (e.clientX - rect.left) / rect.width - 0.5;
    var py = (e.clientY - rect.top) / rect.height - 0.5;
    layer.style.transform = 'translate(' + (px * 22) + 'px, ' + (py * 22) + 'px)';
  });

  hero.addEventListener('mouseleave', function () {
    layer.style.transform = 'translate(0, 0)';
  });
}
