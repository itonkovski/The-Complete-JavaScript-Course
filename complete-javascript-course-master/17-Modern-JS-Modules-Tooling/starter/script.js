//Importing module
// import { addToCart, totalPrice as price, totalQ } from './shoppingCart.js';
console.log('Importing module');

// addToCart('bread', 5);
// console.log(price, totalQ);

// import * as ShoppingCart from './shoppingCart.js';

// ShoppingCart.addToCart('bread', 5);

//Not recomended to import named and default imports together
import add, { cart } from './shoppingCart.js';
add('cheese', 5);
add('bread', 5);
add('milk', 5);

console.log(cart);
