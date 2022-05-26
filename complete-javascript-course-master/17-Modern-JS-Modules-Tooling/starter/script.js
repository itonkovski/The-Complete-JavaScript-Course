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

//Top Level await
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
