export default class Difference {
  constructor(oldOfficer, newOfficer, items) {
    this.oldOfficer = document.querySelector(oldOfficer);
    this.newOfficer = document.querySelector(newOfficer);
    this.items = items;
  }

  hideItems() {
    this.oldOfficer.querySelectorAll(this.items).forEach((item, i, arr) => {
      if (i !== arr.length - 1) {
        item.style.display = "none";
      }
    });
    this.newOfficer.querySelectorAll(this.items).forEach((item, i, arr) => {
      if (i !== arr.length - 1) {
        item.style.display = "none";
      }
    });
  }

  init(){
    this.hideItems();
  }
}
