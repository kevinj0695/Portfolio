'use strict';

const scroller = document.querySelector('.scroller--var');
const docEl = document.documentElement;
const scrollHeight = docEl.scrollHeight - docEl.clientHeight;
scroller.style.width = (docEl.scrollTop/scrollHeight) * 100 + '%'
window.addEventListener('scroll', () => {
  getScrollPercent();
});

const navItems = document.querySelector('.nav__items');
navItems.addEventListener('click', (event) => {
  const link = event.target.dataset.link;
  if (link == null) {
    return;
  }
  navItems.classList.remove('open');
  scrollIntoView(link);
});

function getScrollPercent() {
  let scrollTop = docEl.scrollTop;
  let scrollPercent = (scrollTop/scrollHeight) * 100 + '%';
  scroller.style.width = scrollPercent;
  return scrollPercent;
}

// nav toggle btn
const navtoggleBtn = document.querySelector('.nav__toggle-btn');
navtoggleBtn.addEventListener('click', () => {
  navItems.classList.toggle('open');
});

// 1. 모든 섹션 요소들과 메뉴 아이템들을 가지고 온다.
// 2. IntersectionObserver를 이용해서 모든 섹션들을 관찰한다.
// 3. 보여지는 섹션에 해당하는 메뉴 아이템들을 활성화한다. 

const sectionIds = [
  '#home', '#about', '#skills', '#project', '#archive'
];
const sectionsMap = sectionIds.map(id => document.querySelector(id));
const navItemsMap = sectionIds.map(id => 
  document.querySelector(`[data-link="${id}"]`)
);

let selectedNavIndex = 0;
let selectedNavItem = navItemsMap[0];
function selectNavItem(selected) {
  selectedNavItem.classList.remove('active');
  selectedNavItem = selected;
  selectedNavItem.classList.add('active');
}

function scrollIntoView(selector) {
  const scrollTo = document.querySelector(selector);
  scrollTo.scrollIntoView({ behavior: 'smooth' });
  selectNavItem(navItemsMap[sectionIds.indexOf(selector)]);
}

const options = {
  root: null,
  rootMargin: '0px',
  threshold: 0.3,
};

const callback = (entries, observer) => {
  entries.forEach(entry => {
    if (!entry.isIntersecting && entry.intersectionRatio > 0) {
      const index = sectionIds.indexOf(`#${entry.target.id}`);
      // 스크롤링이 아래로 되어서 페이지가 올라옴
      if (entry.boundingClientRect.y < 0) {
        selectedNavIndex = index + 1;
      } else {
        selectedNavIndex = index - 1;
      }
      selectNavItem(navItemsMap[selectedNavIndex]);
    }
  })
};

const observer = new IntersectionObserver(callback, options);
sectionsMap.forEach(sectionEl => observer.observe(sectionEl));

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
// if (docEl.clientWidth > 768) {
  gsap.from(".skill__flex-box", {
    scrollTrigger: {
      trigger: ".skill__flex-box",
      toggleActions: "restart pause restart pause"
    },
    opacity: 0,
    y: -100,
    duration: 1.2,
  });
// }

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