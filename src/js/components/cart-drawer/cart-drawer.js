export default class CartDrawer {
  elTriggers = document.querySelectorAll(".js-cart-drawer-trigger");

  constructor(element) {
    this.el = element;

    this.#exposeTriggers();
  }

  #exposeTriggers = () => {
    this.elTriggers.forEach(trigger => trigger.addEventListener("click", this.#handleAnimations));

    this.el.addEventListener('click', ((e) => {
      const rect = e.target.getBoundingClientRect();
      if (rect.left > e.clientX ||
            rect.right < event.clientX ||
            rect.top > event.clientY ||
            rect.bottom < event.clientY
        ) {
            this.#closeModal();
        }
      })
    );
  }

  #handleAnimations = () => {
    if (this.el.open) {
      this.#closeModal();
    } else {
      this.el.classList.remove("closing");
      this.el.showModal();
    }
  }

  #closeModal = () => {
    this.el.addEventListener("animationend", () => setTimeout(() => this.el.close(), 300), { once: true });
    this.el.classList.add("closing");
  }
}

