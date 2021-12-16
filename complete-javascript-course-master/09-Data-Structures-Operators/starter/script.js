'use strict';

// Data needed for a later exercise
const flights =
  '_Delayed_Departure;fao93766109;txl2133758440;11:25+_Arrival;bru0943384722;fao93766109;11:45+_Delayed_Arrival;hel7439299980;fao93766109;12:05+_Departure;fao93766109;lis2323639855;12:30';

// Data needed for first part of the section
const restaurant = {
  name: 'Classico Italiano',
  location: 'Via Angelo Tavanti 23, Firenze, Italy',
  categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
  starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
  mainMenu: ['Pizza', 'Pasta', 'Risotto'],

  openingHours: {
    thu: {
      open: 12,
      close: 22,
    },
    fri: {
      open: 11,
      close: 23,
    },
    sat: {
      open: 0, // Open 24 hours
      close: 24,
    },
  },
};

// The Spread Operator (...)
// const {
//   thu: { open: ThOpen, close: ThClose },
//   fri: { open: FrOpen, close: FrClose },
// } = restaurant.openingHours;

// console.log(ThOpen, ThClose);
// console.log(FrOpen, ThClose);

// const mainMenu = [...restaurant.starterMenu, ...restaurant.mainMenu];
// console.log(mainMenu);

// const newRestaurant = {
//   founder: 'Gennaro',
//   ...restaurant,
//   style: 'Rustic Italian Cusine',
// };
// console.log(newRestaurant);

// Rest Pattern and Parameters
// const sumUpNumbers = function (...numbers) {
//   let sum = 0;
//   for (let i = 0; i < numbers.length; i++) {
//     sum += numbers[i];
//   }
//   console.log(sum);
// };

// sumUpNumbers(2, 5);
// sumUpNumbers(2, 8, 3.4);
// sumUpNumbers(-2, 80);

// const newInput = [34, 12, 9];
// sumUpNumbers(...newInput);

// const orderPizza = function (mainIngredient, ...ingredients) {
//   console.log(mainIngredient);
//   console.log(ingredients);
// };

// orderPizza('cheese');
// orderPizza('cheese', 'shrooms', 'pepper');
