'use strict';

/*
// Functions Accepting Callback Functions

const oneWord = function (str) {
  return str.replace(/ /g, '').toLowerCase();
};

const upperFirstWord = function (str) {
  const [firstWord, ...others] = str.split(' ');
  return [firstWord.toUpperCase(), ...others].join(' ');
};

// Higher-order function
const transform = function (str, fun) {
  console.log(`Original string => ${str}`);
  console.log(`One word transformation => ${fun(str)}`);
  console.log(`Upper first transformation => ${fun(str)}`);
};

transform('Lorem ipsum dolor sit amet', oneWord);
transform('Lorem ipsum dolor sit amet', upperFirstWord);
*/

//The call method
const lufthansa = {
  airline: 'Lufthansa',
  iataCode: 'LH',
  bookings: [],
  book(flightNumber, name) {
    console.log(
      `${name} booked a seat with ${this.airline} flight ${this.iataCode}${flightNumber}`
    );
    this.bookings.push({ flight: `${this.iataCode}${flightNumber}`, name });
  },
};

lufthansa.book(239, 'John Johnson');
lufthansa.book(321, 'Robert Robertson');

const euroWings = {
  airline: 'Euro Wings',
  iataCode: 'EW',
  bookings: [],
};

const book = lufthansa.book;

// Call method
book.call(euroWings, 445, 'Sarah Williams');

const flightData = [554, 'Mary Cooper'];
book.call(euroWings, ...flightData);

console.log(euroWings);

// Bind Method
const bookLH = book.bind(lufthansa);
const bookEW = book.bind(euroWings);

bookLH(123, 'Steven Stevenson');

const bookEW234 = book.bind(euroWings, 234);
bookEW234('Veronica Simpson');

// With Event Listeners
lufthansa.airplanes = 300;
lufthansa.buyPlanes = function () {
  console.log(this);
  this.airplanes++;
  console.log(this.airplanes);
};

document
  .querySelector('.buy')
  .addEventListener('click', lufthansa.buyPlanes.bind(lufthansa));

// Partial application
const addTax = (rate, value) => value + value * rate;
console.log(addTax(0.1, 200));

const addVAT = addTax.bind(null, 0.23);
console.log(addVAT(100));

//Function returning function example
const addTaxRate = function (rate) {
  return function (value) {
    return value + value * rate;
  };
};

const AddVATNew = addTaxRate(0.23);
console.log(AddVATNew(100));
