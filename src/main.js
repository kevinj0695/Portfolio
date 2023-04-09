'use strict';
import Scroll from './scroller.js';
import ScrollObserver from './scroll-observer.js';

const scroll = new Scroll();
window.addEventListener('scroll', () => {
  scroll.getPercent();
});

const scrollObserver = new ScrollObserver();
scrollObserver.setScrollObserver();

const navItems = document.querySelector('.nav__items');
navItems.addEventListener('click', (event) => {
  const link = event.target.dataset.link;
  if (link == null) {
    return;
  }
  navItems.classList.remove('open'); 
  scrollObserver.scrollIntoView(link);
});

// nav toggle btn
const navtoggleBtn = document.querySelector('.nav__toggle-btn');
navtoggleBtn.addEventListener('click', () => {
  navItems.classList.toggle('open');
});