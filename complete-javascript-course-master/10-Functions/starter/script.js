'use strict';

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
