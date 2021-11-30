'use strict';

// LECTURE: Functions
// 1. Write a function called 'describeCountry' which takes three parameters:
// 'country', 'population' and 'capitalCity'. Based on this input, the
// function returns a string with this format: 'Finland has 6 million people and its
// capital city is Helsinki'
// 2. Call this function 3 times, with input data for 3 different countries. Store the
// returned values in 3 different variables, and log them to the console

/*
function describeCountry(country, population, capitalCity) {
    const result = `${country} has ${population} million people and its capital city is ${capitalCity}.`;

    return result;
}

const describeNorway = describeCountry('Norway', 11, 'Oslo');

console.log(describeNorway);
*/

// LECTURE: Function Declarations vs. Expressions
// 1. The world population is 7900 million people. Create a function declaration
// called 'percentageOfWorld1' which receives a 'population' value, and
// returns the percentage of the world population that the given population
// represents. For example, China has 1441 million people, so it's about 18.2% of
// the world population
// 2. To calculate the percentage, divide the given 'population' value by 7900
// and then multiply by 100
// 3. Call 'percentageOfWorld1' for 3 populations of countries of your choice,
// store the results into variables, and log them to the console
// 4. Create a function expression which does the exact same thing, called
// 'percentageOfWorld2', and also call it with 3 country populations (can be
// the same populations)

/*
function percentageOfWorld1(population) {
    const percentage = (population / 7900) * 100;
    return percentage;
}

const percentageOfWorld2 = function (population) {
    const percentage = (population / 7900) * 100;
    return percentage;
}

const firstPercentage = percentageOfWorld1(10).toFixed(2);
const secondPercentage = percentageOfWorld1(140).toFixed(2);
const thirdPercentage = percentageOfWorld1(140).toFixed(2);

console.log(firstPercentage, secondPercentage, thirdPercentage);
*/

// LECTURE: Arrow Functions
// 1. Recreate the last assignment, but this time create an arrow function called
// 'percentageOfWorld3'

/*
const percentageOfWorld = population => (population / 7900) * 100;

const firstPercentage = percentageOfWorld(10).toFixed(2);
const secondPercentage = percentageOfWorld(140).toFixed(2);
const thirdPercentage = percentageOfWorld(140).toFixed(2);

console.log(firstPercentage, secondPercentage, thirdPercentage);
*/

// LECTURE: Functions Calling Other Functions
// 1. Create a function called 'describePopulation'. Use the function type you
// like the most. This function takes in two arguments: 'country' and
// 'population', and returns a string like this: 'China has 1441 million people,
// which is about 18.2% of the world.'
// 2. To calculate the percentage, 'describePopulation' call the
// 'percentageOfWorld1' you created earlier
// 3. Call 'describePopulation' with data for 3 countries of your choice

/*
const percentageOfWorld = population => ((population / 7900) * 100).toFixed(2);

function describePopulation(country, population) {
    const percentage = percentageOfWorld(population);
    const result = `${country} has ${population} million people, which is about ${percentage}% of the world.`
    return result;
}

const finalResult = describePopulation('Norway', 10);

console.log(finalResult);
*/

// Coding Challenge #1
// Back to the two gymnastics teams, the Dolphins and the Koalas! There is a new
// gymnastics discipline, which works differently.
// Each team competes 3 times, and then the average of the 3 scores is calculated (so
// one average score per team).
// A team only wins if it has at least double the average score of the other team.
// Otherwise, no team wins!
// Your tasks:
// 1. Create an arrow function 'calcAverage' to calculate the average of 3 scores
// 2. Use the function to calculate the average for both teams
// 3. Create a function 'checkWinner' that takes the average score of each team
// as parameters ('avgDolhins' and 'avgKoalas'), and then logs the winner
// to the console, together with the victory points, according to the rule above.
// Example: "Koalas win (30 vs. 13)"
// 4. Use the 'checkWinner' function to determine the winner for both Data 1 and
// Data 2
// 5. Ignore draws this time
// Test data:
// § Data 1: Dolphins score 44, 23 and 71. Koalas score 65, 54 and 49
// § Data 2: Dolphins score 85, 54 and 41. Koalas score 23, 34 and 27
// Hints:
// § To calculate average of 3 values, add them all together and divide by 3
// § To check if number A is at least double number B, check for A >= 2 * B.
// Apply this to the team's average scores �
// GOOD LUCK 

/*
const firstTeam = 'Dolphins';
const secondTeam = 'Koalas';

const calcAverage = (firstScore, secondScore, thirdScore) => (firstScore + secondScore + thirdScore) / 3;

const scoreDolphins = calcAverage(44, 23, 71);
const scoreKoalas = calcAverage(65, 54, 49);

const checkWinner = function (avgDolphins, avgKoalas) {
    if (avgDolphins >= 2 * avgKoalas) {
        console.log(`${firstTeam} wins (${avgDolphins} vs. ${avgKoalas})`);
    } else if (avgKoalas >= 2 * avgDolphins) {
        console.log(`${secondTeam} wins (${avgKoalas} vs. ${avgDolphins})`);
    } else {
        console.log(`Draw. Play again.`);
    }
}

checkWinner(scoreDolphins, scoreKoalas);
*/

// LECTURE: Introduction to Arrays
// 1. Create an array containing 4 population values of 4 countries of your choice.
// You may use the values you have been using previously.Store this array into a
// variable called 'populations'
// 2. Log to the console whether the array has 4 elements or not(true or false)
// 3. Create an array called 'percentages' containing the percentages of the
// world population for these 4 population values.Use the function
// 'percentageOfWorld1' that you created earlier to compute the 4
// percentage values

/*
const populations = [11, 140, 320, 90];

console.log(populations.length === 4);

function percentageOfWorld1(population) {
    const percentage = ((population / 7900) * 100).toFixed(2);
    return percentage;
}

const percentages = [percentageOfWorld1(populations[0]),
percentageOfWorld1(populations[1]),
percentageOfWorld1(populations[2]),
percentageOfWorld1(populations[populations.length - 1])];

console.log(percentages);
*/

// LECTURE: Basic Array Operations (Methods)
// 1. Create an array containing all the neighbouring countries of a country of your
// choice. Choose a country which has at least 2 or 3 neighbours. Store the array
// into a variable called 'neighbours'
// 2. At some point, a new country called 'Utopia' is created in the neighbourhood of
// your selected country. So add it to the end of the 'neighbours' array
// 3. Unfortunately, after some time, the new country is dissolved. So remove it from
// the end of the array
// 4. If the 'neighbours' array does not include the country ‘Germany’, log to the
// console: 'Probably not a central European country :D'
// 5. Change the name of one of your neighbouring countries. To do that, find the
// index of the country in the 'neighbours' array, and then use that index to
// change the array at that index position. For example, you can search for
// 'Sweden' in the array, and then replace it with 'Republic of Sweden'.

/*
const neighbours = ['Roumania', 'Serbia', 'Greece'];

neighbours.push('Utopia');
neighbours.pop(neighbours.length - 1);

if (!neighbours.includes('Germany')) {
    console.log('Probably not a central European country :D');
}

neighbours[neighbours.indexOf('Serbia')] = 'Republic of Serbia';
console.log(neighbours);
*/

// Coding Challenge #2
// Steven is still building his tip calculator, using the same rules as before: Tip 15% of
// the bill if the bill value is between 50 and 300, and if the value is different, the tip is
// 20%.
// Your tasks:
// 1. Write a function 'calcTip' that takes any bill value as an input and returns
// the corresponding tip, calculated based on the rules above (you can check out
// the code from first tip calculator challenge if you need to). Use the function
// type you like the most. Test the function using a bill value of 100
// 2. And now let's use arrays! So create an array 'bills' containing the test data
// below
// 3. Create an array 'tips' containing the tip value for each bill, calculated from
// the function you created before
// 4. Bonus: Create an array 'total' containing the total values, so the bill + tip
// Test data: 125, 555 and 44
// Hint: Remember that an array needs a value in each position, and that value can
// actually be the returned value of a function! So you can just call a function as array
// values (so don't store the tip values in separate variables first, but right in the new
// array) 
// GOOD LUCK

/*
const calcTip = function (billAmmount) {
    const tip = billAmmount >= 50 && billAmmount <= 300 ? billAmmount * 0.15 : billAmmount * 0.2;
    return tip;
}

const bills = [125, 555, 44];

const tips = [calcTip(bills[0]), calcTip(bills[1]), calcTip(bills[2])];

const totalAmmounts = [bills[0] + tips[0], bills[1] + tips[1], bills[2] + tips[2]];

console.log(tips);
console.log(totalAmmounts);
*/

// LECTURE: Introduction to Objects
// 1. Create an object called 'myCountry' for a country of your choice, containing
// properties 'country', 'capital', 'language', 'population' and
// 'neighbours' (an array like we used in previous assignments)

/*
const myCountry = {
    country: 'Bulgaria',
    capital: 'Sofia',
    language: 'Bulgarian',
    population: 7,
    neighbours: ['Serbia', 'Greece', 'Rumania']
}
*/

// LECTURE: Dot vs. Bracket Notation
// 1. Using the object from the previous assignment, log a string like this to the
// console: 'Finland has 6 million finnish-speaking people, 3 neighbouring countries
// and a capital called Helsinki.'
// 2. Increase the country's population by two million using dot notation, and then
// decrease it by two million using brackets notation.

/*
const myCountry = {
    country: 'Bulgaria',
    capital: 'Sofia',
    language: 'Bulgarian',
    population: 7,
    neighbours: ['Serbia', 'Greece', 'Rumania']
}

console.log(`${myCountry.country} has ${myCountry.population} million ${myCountry.language}-speaking people, ${myCountry.neighbours.length} neighbouring countries and a capital called ${myCountry.capital}.`);

myCountry.population += 2;
console.log(myCountry.population);

myCountry['population'] -= 2;
console.log(myCountry.population);
*/

/*
const myCountry = {
    country: 'Bulgaria',
    capital: 'Sofia',
    language: 'Bulgarian',
    population: 7,
    neighbours: ['Serbia', 'Greece', 'Rumania'],
    isInEU: true,
    getSummary: function () {
        return `${this.country} has population of ${this.population} million people and ${this.isInEU ? 'is' : 'is not'} part of the EU.`;
    }
}

console.log(myCountry.getSummary());
*/

// Coding Challenge #3
// Let's go back to Mark and John comparing their BMIs! This time, let's use objects to
// implement the calculations! Remember: BMI = mass / height ** 2 = mass
// / (height * height) (mass in kg and height in meter)
// Your tasks:
// 1. For each of them, create an object with properties for their full name, mass, and
// height (Mark Miller and John Smith)
// 2. Create a 'calcBMI' method on each object to calculate the BMI (the same
// method on both objects). Store the BMI value to a property, and also return it
// from the method
// 3. Log to the console who has the higher BMI, together with the full name and the
// respective BMI. Example: "John's BMI (28.3) is higher than Mark's (23.9)!"
// Test data: Marks weights 78 kg and is 1.69 m tall. John weights 92 kg and is 1.95 m
// tall.
// GOOD LUCK

/*
const markMiller = {
    fullName: 'Mark Miller',
    mass: 78,
    height: 1.69,
    calcBMI: function () {
        this.bmi = (this.mass / this.height ** 2).toFixed(2);
        return this.bmi
    }
}

const johnSmith = {
    fullName: 'John Smith',
    mass: 92,
    height: 1.95,
    calcBMI: function () {
        this.bmi = (this.mass / this.height ** 2).toFixed(2);
        return this.bmi
    }
}

markMiller.calcBMI();
johnSmith.calcBMI();

console.log(markMiller.bmi);
console.log(johnSmith.bmi);

if (markMiller.bmi > johnSmith.bmi) {
    console.log(`${markMiller.fullName}'s BMI (${markMiller.bmi}) is higher than ${johnSmith.fullName}'s (${johnSmith.bmi})!`);
} else if (johnSmith.bmi > markMiller.bmi) {
    console.log(`${johnSmith.fullName}'s BMI (${johnSmith.bmi}) is higher than ${markMiller.fullName}'s (${markMiller.bmi})!`);
}
else {
    console.log("They have equal BMI");
}
*/

// LECTURE: Iteration: The for Loop
// 1. There are elections in your country! In a small town, there are only 50 voters.
// Use a for loop to simulate the 50 people voting, by logging a string like this to
// the console (for numbers 1 to 50): 'Voter number 1 is currently voting'

/*
for (let voter = 1; voter <= 50; voter++) {
    console.log(`Voter number ${voter} is currently voting`);
}
*/

// LECTURE: Looping Arrays, Breaking and Continuing
// 1. Let's bring back the 'populations' array from a previous assignment
// 2. Use a for loop to compute an array called 'percentages2' containing the
// percentages of the world population for the 4 population values.Use the
// function 'percentageOfWorld1' that you created earlier
// 3. Confirm that 'percentages2' contains exactly the same values as the
// 'percentages' array that we created manually in the previous assignment,
//     and reflect on how much better this solution is

/*
const populations = [11, 140, 320, 90];

function percentageOfWorld(population) {
    const percentage = ((population / 7900) * 100).toFixed(2);
    return percentage;
}

const percentages = [];

for (let index = 0; index < populations.length; index++) {
    percentages.push(percentageOfWorld(populations[index]));
    //another solution
    // const input = percentageOfWorld(populations[index]);
    // percentages.push(input);
}

console.log(percentages);
*/

// LECTURE: Looping Backwards and Loops in Loops
// 1. Store this array of arrays into a variable called 'listOfNeighbours'
// [['Canada', 'Mexico'], ['Spain'], ['Norway', 'Sweden',
// 'Russia']];
// 2. Log only the neighbouring countries to the console, one by one, not the entire
// arrays. Log a string like 'Neighbour: Canada' for each country
// 3. You will need a loop inside a loop for this. This is actually a bit tricky, so don't
// worry if it's too difficult for you! But you can still try to figure this out anyway

/*
const listOfNeighbours = [['Canada', 'Mexico'], ['Spain'], ['Norway', 'Sweden', 'Russia']];

for (let i = 0; i < listOfNeighbours.length; i++) {
    for (let y = 0; y < listOfNeighbours[i].length; y++) {
        console.log(`Neighbour: ${listOfNeighbours[i][y]}`);
    }
}
*/

// LECTURE: The while Loop
// 1. Recreate the challenge from the lecture 'Looping Arrays, Breaking and Continuing',
// but this time using a while loop (call the array 'percentages3')
// 2. Reflect on what solution you like better for this task: the for loop or the while
// loop?

/*
const populations = [11, 140, 320, 90];

function percentageOfWorld(population) {
    const percentage = ((population / 7900) * 100).toFixed(2);
    return percentage;
}

const percentages = [];
let index = 0;

while (index < populations.length) {
    percentages.push(percentageOfWorld(populations[index]));
    index++;
}
console.log(percentages);
*/

// Coding Challenge #4
// Let's improve Steven's tip calculator even more, this time using loops!
// Your tasks:
// 1. Create an array 'bills' containing all 10 test bill values
// 2. Create empty arrays for the tips and the totals ('tips' and 'totals')
// 3. Use the 'calcTip' function we wrote before (no need to repeat) to calculate
// tips and total values (bill + tip) for every bill value in the bills array. Use a for
// loop to perform the 10 calculations!
// Test data: 22, 295, 176, 440, 37, 105, 10, 1100, 86 and 52
// Hints: Call ‘calcTip ‘in the loop and use the push method to add values to the
// tips and totals arrays 
// Bonus:
// 4. Bonus: Write a function 'calcAverage' which takes an array called 'arr' as
// an argument. This function calculates the average of all numbers in the given
// array. This is a difficult challenge (we haven't done this before)! Here is how to
// solve it:
// 4.1. First, you will need to add up all values in the array. To do the addition,
// start by creating a variable 'sum' that starts at 0. Then loop over the
// array using a for loop. In each iteration, add the current value to the
// 'sum' variable. This way, by the end of the loop, you have all values
// added together
// 4.2. To calculate the average, divide the sum you calculated before by the
// length of the array (because that's the number of elements)
// 4.3. Call the function with the 'totals' array
// GOOD LUCK 

const bills = [22, 295, 176, 440, 37, 105, 10, 1100, 86, 52];

const calcTip = function (billAmmount) {
    const tip = billAmmount >= 50 && billAmmount <= 300 ? billAmmount * 0.15 : billAmmount * 0.2;
    return tip;
}

const tips = [];
const totals = [];

for (let i = 0; i < bills.length; i++) {
    const tipInput = calcTip(bills[i]);
    tips.push(tipInput);
    totals.push(tipInput + bills[i]);
}

console.log(tips, bills, totals);

const calcAverage = function (arr) {
    let sum = 0;
    for (let i = 0; i < arr.length; i++) {
        sum += arr[i];
    }
    return sum / totals.length;
}

console.log(calcAverage(totals))