export default class CartDrawer {
  elTriggers = document.querySelectorAll(".js-cart-drawer-trigger");

  constructor(element) {
    this.el = element;

    this.exposeTriggers();
  }

  exposeTriggers() {
    this.elTriggers.forEach(trigger => {
      trigger.addEventListener("click", () => {
        if (this.el.open) {
          this.el.close();
        } else {
          this.el.showModal();
        }
      });
    });
  }
}

