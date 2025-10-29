import '../css/main.scss'
import cartDrawer from './components/cart-drawer';

const themeFunctions = [
  cartDrawer
];

for (const themeFn of themeFunctions) themeFn();
