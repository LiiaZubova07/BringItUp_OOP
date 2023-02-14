export default class Slider {
  constructor({
    container = null,
    btns = null,
    next = null,
    previous = null,
  } = {}) {
    this.container = document.querySelector(container);
    this.slides = this.container.children;
    this.btns = document.querySelectorAll(btns);
    this.previous = document.querySelector(previous);
    this.next = document.querySelector(next);
    this.slideIndex = 1;
  }
}
