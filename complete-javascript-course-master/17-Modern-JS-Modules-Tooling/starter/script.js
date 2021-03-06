import 'core-js/stable';
// Polifilling async functions
import 'regenerator-runtime/runtime';

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

/////////////////
//Top Level await
/*
const getLastPost = async function () {
  const res = await fetch('https://jsonplaceholder.typicode.com/posts');
  const data = await res.json();
  //   console.log(data);

  return { title: data.at(-1).title, text: data.at(-1).body };
};

//Not very clean
// const lastPost = getLastPost().then(post => console.log(post));

const lastPost2 = await getLastPost();
console.log(lastPost2);
*/

///////////////////////////////////////
// The Module Pattern
/*
const ShoppingCart2 = (function () {
  const cart = [];
  const shippingCost = 10;
  const totalPrice = 237;
  const totalQuantity = 23;

  const addToCart = function (product, quantity) {
    cart.push({ product, quantity });
    console.log(
      `${quantity} ${product} added to cart (sipping cost is ${shippingCost})`
    );
  };

  const orderStock = function (product, quantity) {
    console.log(`${quantity} ${product} ordered from supplier`);
  };

  return {
    addToCart,
    cart,
    totalPrice,
    totalQuantity,
  };
})();

ShoppingCart2.addToCart('apple', 4);
ShoppingCart2.addToCart('pizza', 2);
console.log(ShoppingCart2);
console.log(ShoppingCart2.shippingCost);
*/

///////////////////////
// Introduction to NPM
// import cloneDeep from './node_modules/lodash-es/cloneDeep.js';
//imports with parcel don´t need to be so specific
import cloneDeep from 'lodash-es';

const state = {
  cart: [
    { product: 'bread', quantity: 5 },
    { product: 'pizza', quantity: 5 },
  ],
  user: { loggedIn: true },
};
const stateClone = Object.assign({}, state);
const stateDeepClone = cloneDeep(state);

state.user.loggedIn = false;
console.log(stateClone);

console.log(stateDeepClone);

if (module.hot) {
  module.hot.accept();
}
