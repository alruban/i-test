export default class AddToCart {
  elCartDrawer = document.querySelector(".js-cart-drawer");
  elAddToCartLoading = document.querySelector(".js-add-to-cart-loading");
  elAddToCartButtonText = document.querySelector(".js-add-to-cart-text");

  constructor(element) {
    this.el = element;

    this.#handleClick();
  }

  #handleClick = () => {
    this.el.addEventListener("click", () => {
      this.#setLoadingState(true, () => {
        setTimeout(() => {
          this.elCartDrawer.showModal();
          this.#setLoadingState(false);
        }, 1000);
      });
    });
  }

  #setLoadingState = (isLoading, callback) => {
    if (isLoading) {
      this.elAddToCartLoading.setAttribute("aria-hidden", "false");
      this.elAddToCartLoading.style.visibility = "visible";
      this.elAddToCartButtonText.style.display = "hidden";
    } else {
      this.elAddToCartLoading.setAttribute("aria-hidden", "true");
      this.elAddToCartLoading.style.visibility = "hidden";
      this.elAddToCartButtonText.style.display = "block";
    }

    if (callback) callback();
  }
}

