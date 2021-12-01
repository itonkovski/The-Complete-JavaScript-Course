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
