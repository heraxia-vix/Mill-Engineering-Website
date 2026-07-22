/* ============================================================
   MILL ENGINEERING - Main JavaScript Module
   Navigation, scroll reveals, animations, form handling
   Build Book Volumes 8-10 implementation
   ============================================================ */

(function () {
  'use strict';

  // === NAVIGATION ===
  const header = document.querySelector('.site-header');
  const navToggle = document.querySelector('.nav-toggle');
  const backToTop = document.querySelector('.back-to-top');

  // Scroll detection for header
  let lastScroll = 0;
  function handleScroll() {
    const scrollY = window.scrollY;
    if (scrollY > 60) {
      header.classList.add('scrolled');
    } else {
      header.classList.remove('scrolled');
    }
    // Back to top visibility
    if (backToTop) {
      if (scrollY > 500) {
        backToTop.classList.add('visible');
      } else {
        backToTop.classList.remove('visible');
      }
    }
    lastScroll = scrollY;
  }
  window.addEventListener('scroll', handleScroll, { passive: true });
  handleScroll();

  // Mobile nav toggle
  if (navToggle) {
    navToggle.addEventListener('click', function () {
      this.classList.toggle('active');
      header.classList.toggle('nav-open');
      document.body.style.overflow = header.classList.contains('nav-open') ? 'hidden' : '';
    });
  }

  // Back to top
  if (backToTop) {
    backToTop.addEventListener('click', function () {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    });
  }

  // === SCROLL REVEAL ===
  const revealElements = document.querySelectorAll('.reveal');

  if ('IntersectionObserver' in window) {
    const revealObserver = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-visible');
          revealObserver.unobserve(entry.target);
        }
      });
    }, {
      threshold: 0.1,
      rootMargin: '0px 0px -60px 0px'
    });

    revealElements.forEach(function (el) {
      revealObserver.observe(el);
    });
  } else {
    // Fallback: show all
    revealElements.forEach(function (el) {
      el.classList.add('is-visible');
    });
  }

  // === STAGGERED REVEALS ===
  const grids = document.querySelectorAll('.grid');
  grids.forEach(function (grid) {
    const cards = grid.querySelectorAll('.reveal');
    cards.forEach(function (card, index) {
      card.style.transitionDelay = (index * 80) + 'ms';
    });
  });

  // === FORM HANDLING ===
  const form = document.getElementById('enquiry-form');
  if (form) {
    form.addEventListener('submit', function (e) {
      e.preventDefault();
      // Basic validation visual feedback
      const requiredFields = form.querySelectorAll('[required]');
      let valid = true;
      requiredFields.forEach(function (field) {
        if (!field.value.trim()) {
          field.style.borderColor = 'var(--color-error)';
          valid = false;
        } else {
          field.style.borderColor = '';
        }
      });
      if (valid) {
        // Redirect to thank-you page
        window.location.href = 'thank-you.html';
      }
    });
  }

  // === SMOOTH ANCHOR SCROLLING ===
  document.querySelectorAll('a[href^="#"]').forEach(function (anchor) {
    anchor.addEventListener('click', function (e) {
      const target = document.querySelector(this.getAttribute('href'));
      if (target) {
        e.preventDefault();
        target.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    });
  });

  // === MOUSE GLOW EFFECT (Desktop only) ===
  if (window.matchMedia('(hover: hover)').matches) {
    const glowCards = document.querySelectorAll('.card');
    glowCards.forEach(function (card) {
      card.addEventListener('mousemove', function (e) {
        const rect = card.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;
        card.style.setProperty('--mouse-x', x + 'px');
        card.style.setProperty('--mouse-y', y + 'px');
      });
    });
  }

  // === REDUCED MOTION CHECK ===
  const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)');
  if (prefersReducedMotion.matches) {
    document.documentElement.classList.add('reduced-motion');
  }

})();
