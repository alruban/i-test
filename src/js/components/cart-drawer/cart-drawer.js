export default class CartDrawer {
  elTriggers = document.querySelectorAll(".js-cart-drawer-trigger");

  constructor(element) {
    this.el = element;

    this.#bindEvents();
  }

  #bindEvents = () => {
    this.elTriggers.forEach(trigger => trigger.addEventListener("click", () => {
      if (this.el.open) {
        this.el.classList.add("closing");
      } else {
        this.el.showModal();
      }
    }));

    this.el.addEventListener("animationend", (e) => {
      if (e.animationName === "close") {
        this.#closeModal();
      }
    });

    this.el.addEventListener('click', ((e) => {
      const rect = e.target.getBoundingClientRect();
      if (rect.left > e.clientX ||
        rect.right < e.clientX ||
        rect.top > e.clientY ||
        rect.bottom < e.clientY
      ) {
        this.el.classList.add("closing");
      }
      })
    );
  }

  #closeModal = () => {
    this.el.close();
    this.el.classList.remove("closing");
    this.el.removeAttribute("open");
  }
}

