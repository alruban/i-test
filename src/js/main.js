import '../css/main.scss'
import cartDrawer from './components/cart-drawer';
import addToCart from './components/add-to-cart';

const themeFunctions = [
  cartDrawer,
  addToCart
];

for (const themeFn of themeFunctions) themeFn();
