import Slider from "./slider";

export default class MiniSlider extends Slider {
  constructor(container, next, previous) {
    super(container, next, previous);
  }

  bindTriggers() {
    this.next.addEventListener("click", () => {
      this.container.appendChild(this.slides[0]);
    });

    this.previous.addEventListener("click", () => {
      const active = this.slides[this.slides.length - 1];
      this.container.insertBefore(active, this.slides[0]);
    });
  }

  init() {
    this.container.style.cssText = `
    display: flex;
    flex-wrap: wrap;
    overflow: hidden;
    align-itens: flex-start
    `;

    this.bindTriggers();
  }
}
