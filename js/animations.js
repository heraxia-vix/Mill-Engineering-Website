/* ============================================================
   MILL ENGINEERING - GSAP Animation System
   Build Book Volume 8: Motion System Implementation
   Premium scroll reveals, parallax, hover interactions
   ============================================================ */

(function () {
  'use strict';

  // Only init if GSAP is available
  if (typeof gsap === 'undefined') return;

  // Register ScrollTrigger
  if (typeof ScrollTrigger !== 'undefined') {
    gsap.registerPlugin(ScrollTrigger);
  }

  // === MOTION TOKENS ===
  const MOTION = {
    ease: 'power3.out',
    easeIn: 'power2.in',
    easeSpring: 'elastic.out(1, 0.5)',
    durationFast: 0.3,
    durationNormal: 0.6,
    durationSlow: 1.0,
    stagger: 0.08
  };

  // === RESPECT REDUCED MOTION ===
  const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  if (prefersReducedMotion) {
    gsap.globalTimeline.timeScale(20); // instant
    return;
  }

  // === HERO ANIMATION ===
  const hero = document.querySelector('.hero');
  if (hero) {
    const heroTl = gsap.timeline({ defaults: { ease: MOTION.ease } });
    heroTl
      .from('.hero-eyebrow', { y: 20, opacity: 0, duration: 0.5, delay: 0.2 })
      .from('.hero h1', { y: 40, opacity: 0, duration: 0.8 }, '-=0.3')
      .from('.hero .lede', { y: 30, opacity: 0, duration: 0.6 }, '-=0.5')
      .from('.hero-actions', { y: 20, opacity: 0, duration: 0.5 }, '-=0.3');

    // Parallax glow movement
    gsap.to('.hero-glow', {
      y: -80,
      scrollTrigger: {
        trigger: '.hero',
        start: 'top top',
        end: 'bottom top',
        scrub: 1
      }
    });
    gsap.to('.hero-glow-2', {
      y: -40,
      x: 20,
      scrollTrigger: {
        trigger: '.hero',
        start: 'top top',
        end: 'bottom top',
        scrub: 1.5
      }
    });
  }


  // === SECTION REVEALS (ScrollTrigger enhanced) ===
  if (typeof ScrollTrigger !== 'undefined') {
    // Section headings reveal
    gsap.utils.toArray('.section-head').forEach(function (head) {
      const eyebrow = head.querySelector('.eyebrow');
      const h2 = head.querySelector('h2');
      const p = head.querySelector('p');
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: head,
          start: 'top 85%',
          once: true
        }
      });
      if (eyebrow) tl.from(eyebrow, { y: 15, opacity: 0, duration: 0.4 });
      if (h2) tl.from(h2, { y: 30, opacity: 0, duration: 0.6 }, '-=0.2');
      if (p) tl.from(p, { y: 20, opacity: 0, duration: 0.5 }, '-=0.3');
    });

    // Card grid staggered reveals
    gsap.utils.toArray('.grid').forEach(function (grid) {
      const cards = grid.querySelectorAll('.card, .entity-card');
      if (cards.length > 0) {
        gsap.from(cards, {
          y: 40,
          opacity: 0,
          duration: MOTION.durationNormal,
          stagger: MOTION.stagger,
          ease: MOTION.ease,
          scrollTrigger: {
            trigger: grid,
            start: 'top 85%',
            once: true
          }
        });
      }
    });

    // Timeline steps stagger
    const timelineSteps = document.querySelectorAll('.timeline-step');
    if (timelineSteps.length > 0) {
      gsap.from(timelineSteps, {
        y: 30,
        opacity: 0,
        duration: 0.5,
        stagger: 0.1,
        ease: MOTION.ease,
        scrollTrigger: {
          trigger: '.timeline',
          start: 'top 80%',
          once: true
        }
      });
    }

    // CTA band entrance
    gsap.utils.toArray('.cta-band').forEach(function (band) {
      gsap.from(band, {
        scale: 0.95,
        opacity: 0,
        duration: 0.8,
        ease: MOTION.ease,
        scrollTrigger: {
          trigger: band,
          start: 'top 85%',
          once: true
        }
      });
    });

    // Parallax for image placeholders
    gsap.utils.toArray('.img-placeholder').forEach(function (img) {
      gsap.from(img, {
        y: 30,
        opacity: 0,
        duration: 0.8,
        ease: MOTION.ease,
        scrollTrigger: {
          trigger: img,
          start: 'top 85%',
          once: true
        }
      });
    });
  }

  // === AMBIENT ORB PARALLAX ===
  if (typeof ScrollTrigger !== 'undefined') {
    gsap.to('.orb-1', {
      y: -100,
      scrollTrigger: { trigger: 'body', start: 'top top', end: 'bottom bottom', scrub: 2 }
    });
    gsap.to('.orb-2', {
      y: 80,
      scrollTrigger: { trigger: 'body', start: 'top top', end: 'bottom bottom', scrub: 3 }
    });

    // === TECHNOLOGY PARTNERS GRID STAGGER ===
    var partnerCards = document.querySelectorAll('.partner-card');
    if (partnerCards.length > 0) {
      gsap.from(partnerCards, {
        y: 50,
        opacity: 0,
        scale: 0.92,
        duration: 0.6,
        stagger: {
          each: 0.08,
          from: 'start'
        },
        ease: 'power3.out',
        scrollTrigger: {
          trigger: '.partners-grid',
          start: 'top 85%',
          once: true
        }
      });
    }

    // Partners section glow parallax
    var partnersGlow1 = document.querySelector('.partners-glow--1');
    var partnersGlow2 = document.querySelector('.partners-glow--2');
    if (partnersGlow1) {
      gsap.to(partnersGlow1, {
        y: -60, x: 20,
        scrollTrigger: { trigger: '.partners-showcase', start: 'top bottom', end: 'bottom top', scrub: 2 }
      });
    }
    if (partnersGlow2) {
      gsap.to(partnersGlow2, {
        y: 40, x: -15,
        scrollTrigger: { trigger: '.partners-showcase', start: 'top bottom', end: 'bottom top', scrub: 2.5 }
      });
    }
  }

})();
