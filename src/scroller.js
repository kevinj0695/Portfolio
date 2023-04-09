'use strict';

export default class Scroll {
  constructor() {
    this.scroller = document.querySelector('.scroller--var');
    this.docEl = document.documentElement;
    this.scrollHeight = this.docEl.scrollHeight - this.docEl.clientHeight;
    this.scroller.style.width = (this.docEl.scrollTop/this.scrollHeight) * 100 + '%'
  }

  getPercent() {
    let scrollTop = this.docEl.scrollTop;
    let scrollPercent = (scrollTop/this.scrollHeight) * 100;
    this.scroller.style.transfrom = `translateX(${(-100 + scrollPercent)}%)`;
    return scrollPercent;
  }
}