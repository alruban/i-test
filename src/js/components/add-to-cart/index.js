import AddToCart from "./add-to-cart";

function addToCartController() {
  const elAddToCart = document.querySelector(".js-add-to-cart");
  if (elAddToCart) new AddToCart(elAddToCart);
}

const index = () => requestIdleCallback(addToCartController);
export default index;
