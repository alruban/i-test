import CartDrawer from "./cart-drawer";

function cartDrawerController() {
  const elCartDrawer = document.querySelector(".js-cart-drawer");
  if (elCartDrawer) new CartDrawer(elCartDrawer);
}

const index = () => requestIdleCallback(cartDrawerController);
export default index;
