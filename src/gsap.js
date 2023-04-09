'use strict'

// gsap animation
// gsap ScrollTriggerPlugin
gsap.registerPlugin(ScrollTrigger);

gsap.from(".items", {
  rotation: -120,
  duration: 1,
})

// gsap - about
gsap.from(".about__items", {
  scrollTrigger: {
    trigger: ".about__items",
    toggleActions: "restart pause restart pause"
  },
  opacity: 0,
  x: -200,
  duration: 1.2,
});

// gsap-skills
gsap.from(".skill__flex-box", {
  scrollTrigger: {
    trigger: ".skill__flex-box",
    toggleActions: "restart pause restart pause"
  },
  opacity: 0,
  y: -100,
  duration: 1.2,
});

// gsap - project - swiper-wrapper
gsap.from('.swiper-wrapper', {
  scrollTrigger: {
    trigger: ".swiper-wrapper",
  },
  opacity: 0,
  y: -100,
  duration: 1.2,
});

// gsap - archive
gsap.from('.archive__github', {
  scrollTrigger: {
    trigger: ".archive__title",
    toggleActions: 'restart',
  },
  opacity: 0,
  y: 100,
  duration: 0.5,
});

gsap.from('.archive__tistory', {
  scrollTrigger: {
    trigger: ".archive__title",
    toggleActions: 'restart',
  },
  opacity: 0,
  y: -100,
  duration: 0.5,
});