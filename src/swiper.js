'use strict'

// Swiper.js
const swiper = new Swiper('.swiper', {
  // Optional parameters
  direction: 'horizontal',
  loop: true,

  // autoplay
  autoplay: {
    delay: 3000,
    disableOnInteraction: false,
  },

  // If we need pagination
  pagination: {
    el: '.swiper-pagination',
    type: 'fraction',
  },

  // Navigation arrows
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
});