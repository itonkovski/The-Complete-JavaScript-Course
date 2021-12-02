'use strict';

// Using Google, StackOverflow and MDN

// PROBLEM 1:
// We work for a company building a smart home thermometer. Our most recent task is this: "Given an array of temperatures of one day, calculate the temperature amplitude. Keep in mind that sometimes there might be a sensor error."

// const temperatures = [3, -2, -6, -1, 'error', 9, 13, 17, 15, 14, 9, 5];

// const calcTempAmplitude = function (temps) {
//   let maxTemp = temps[0];
//   let minTemp = temps[0];

//   for (let i = 0; i < temps.length; i++) {
//     const currentTemp = temps[i];

//     if (typeof currentTemp !== 'number') {
//       console.log(`Error! Occurred during the ${i} measurement.`);
//       continue;
//     }

//     if (currentTemp > maxTemp) maxTemp = currentTemp;
//     if (currentTemp < minTemp) minTemp = currentTemp;
//   }
//   console.log(`Min temp: ${minTemp} degrees.`);
//   console.log(`Max temp: ${maxTemp} degrees.`);
//   return maxTemp - minTemp;
// };

// const amplitude = calcTempAmplitude(temperatures);
// console.log(amplitude);

// PROBLEM 2:
// Function should now receive 2 arrays of temps

/*
const firstTemp = [3, -2, -6, -1, 'error', 9, 13, 17, 15, 14, 9, 5];
const secondTemp = [1, 0, -1, 2, 6, 5, 10, 7, 11, 13, 15, 16];

const calcTempAmplitude = function (firstInput, secondInput) {
  const temps = firstInput.concat(secondInput);
  let maxTemp = temps[0];
  let minTemp = temps[0];

  for (let i = 0; i < temps.length; i++) {
    const currentTemp = temps[i];

    if (typeof currentTemp !== 'number') {
      console.log(`Error! Occurred during the ${i + 1} measurement.`);
      continue;
    }

    if (currentTemp > maxTemp) maxTemp = currentTemp;
    if (currentTemp < minTemp) minTemp = currentTemp;
  }
  console.log(`Min temp: ${minTemp} degrees.`);
  console.log(`Max temp: ${maxTemp} degrees.`);
  return maxTemp - minTemp;
};

const amplitude = calcTempAmplitude(firstTemp, secondTemp);
console.log(amplitude);
*/

// Coding Challenge #1

// Given an array of forecasted maximum temperatures, the thermometer displays a string with these temperatures.

// Example: [17, 21, 23] will print "... 17ºC in 1 days ... 21ºC in 2 days ... 23ºC in 3 days ..."

// Create a function 'printForecast' which takes in an array 'arr' and logs a string like the above to the console.

// Use the problem-solving framework: Understand the problem and break it up into sub-problems!

// TEST DATA 1: [17, 21, 23]
// TEST DATA 2: [12, 5, -5, 0, 4]

const firstTemps = [17, 21, 23];
const secondTemps = [12, 5, -5, 0, 4];

const printForecast = function (temps) {
  let stringToPrint = '';
  for (let i = 0; i < temps.length; i++) {
    stringToPrint += `${temps[i]}ºC in ${i + 1} days ... `;
  }
  console.log('... ' + stringToPrint);
};

printForecast(secondTemps);
