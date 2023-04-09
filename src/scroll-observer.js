'use strict';

// 1. 모든 섹션 요소들과 메뉴 아이템들을 가지고 온다.
// 2. IntersectionObserver를 이용해서 모든 섹션들을 관찰한다.
// 3. 보여지는 섹션에 해당하는 메뉴 아이템들을 활성화한다. 

export default class ScrollObserver {
  constructor() {
    this.sectionIds = [
      '#home', '#about', '#skills', '#project', '#archive'
    ];
    this.sectionsMap = this.sectionIds.map(id => document.querySelector(id));
    this.navItemsMap = this.sectionIds.map(id => document.querySelector(`[data-link="${id}"]`));
    
    this.selectedNavIndex = 0; 
    this.selectedNavItem = this.navItemsMap[0];

    this.options = {
      root: null,
      rootMargin: '0px',
      threshold: 0.3,
    };
  }

  selectNavItem(selected) {
    this.selectedNavItem.classList.remove('active');
    this.selectedNavItem = selected;
    this.selectedNavItem.classList.add('active');
  }
  
  scrollIntoView(selector) {
    const scrollTo = document.querySelector(selector);
    scrollTo.scrollIntoView({ behavior: 'smooth' });
    this.selectNavItem(this.navItemsMap[this.sectionIds.indexOf(selector)]);
  }

  callback = (entries, observer) => {
    entries.forEach((entry) => {
      if (!entry.isIntersecting && entry.intersectionRatio > 0) {
        const index = this.sectionIds.indexOf(`#${entry.target.id}`);
        // 스크롤링이 아래로 되어서 페이지가 올라옴
        if (entry.boundingClientRect.y < 0) {
          this.selectedNavIndex = index + 1;
        } else {
          this.selectedNavIndex = index - 1;
        }
        this.selectNavItem(this.navItemsMap[this.selectedNavIndex]);
      }
    })
  }

  setScrollObserver() {
    const observer = new IntersectionObserver(this.callback, this.options);
    this.sectionsMap.forEach(sectionEl => observer.observe(sectionEl));
  }
}