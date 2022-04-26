'use strict';

/////////////
// Prototypes
/*
const Person = function (firstName, birthYear) {
  this.firstName = firstName;
  this.birthYear = birthYear;
};

Person.prototype.calcAge = function () {
  const date = new Date().getFullYear();
  console.log(date - this.birthYear);
};

const ivo = new Person('Ivo', 1987);
ivo.calcAge();
*/

/*
//////////////////////
// Coding Challenge #1

// 1. Use a constructor function to implement a Car. A car has a make and a speed property. The speed property is the current speed of the car in km/h;
// 2. Implement an 'accelerate' method that will increase the car's speed by 10, and log the new speed to the console;
// 3. Implement a 'brake' method that will decrease the car's speed by 5, and log the new speed to the console;
// 4. Create 2 car objects and experiment with calling 'accelerate' and 'brake' multiple times on each of them.

// DATA CAR 1: 'BMW' going at 120 km/h
// DATA CAR 2: 'Mercedes' going at 95 km/h

// GOOD LUCK 😀

const Car = function (make, speed) {
  this.make = make;
  this.speed = speed;
};

Car.prototype.accelerate = function () {
  this.speed += 10;
  console.log(`${this.make} going at ${this.speed} km/h`);
};

Car.prototype.brake = function () {
  this.speed -= 5;
  console.log(`${this.make} going at ${this.speed} km/h`);
};

const firstCar = new Car('BMW', 120);
const secondCar = new Car('Mercedes', 95);

firstCar.accelerate();
secondCar.accelerate();
firstCar.brake();
secondCar.brake();
*/

/*
/////////////
//ES6 Classes

class PersonCl {
  constructor(fullName, birthYear) {
    (this.fullName = fullName), (this.birthYear = birthYear);
  }

  calcAge() {
    const date = new Date().getFullYear();
    console.log(date - this.birthYear);
  }

  greet() {
    console.log(`${this._fullName} says hello.`);
  }

  set fullName(name) {
    if (name.includes(' ')) this._fullName = name;
    else alert(`${name} is incorrect!`);
  }

  get fullName() {
    return this._fullName;
  }

  // Static method
  static hey() {
    console.log('Hey there 👋');
    console.log(this);
  }
}

const jessica = new PersonCl('Jessica Davis', 1987);
const david = new PersonCl('David', 1987);
console.log(jessica.fullName);
jessica.calcAge();
jessica.greet();
PersonCl.hey();
*/

/*
///////////////////////////////////////
// Coding Challenge #2

// 1. Re-create challenge 1, but this time using an ES6 class;
// 2. Add a getter called 'speedUS' which returns the current speed in mi/h (divide by 1.6);
// 3. Add a setter called 'speedUS' which sets the current speed in mi/h (but converts it to km/h before storing the value, by multiplying the input by 1.6);
// 4. Create a new car and experiment with the accelerate and brake methods, and with the getter and setter.

// DATA CAR 1: 'Ford' going at 120 km/h

// GOOD LUCK 😀

class CarCl {
  constructor(make, speed) {
    (this.make = make), (this.speed = speed);
  }

  accelerate() {
    this.speed += 10;
    console.log(`${this.make} going at ${this.speed} km/h`);
  }

  brake() {
    this.speed -= 5;
    console.log(`${this.make} going at ${this.speed} km/h`);
  }

  get speedUS() {
    return this.speed / 1.6;
  }

  set speedUS(speed) {
    this.speed = speed * 1.6;
  }
}

const firstCar = new CarCl('Ford', 120);

console.log(firstCar.speedUS);
firstCar.accelerate();
firstCar.brake();
firstCar.speedUS = 100;
console.log(firstCar);
console.log(firstCar.speedUS);
*/

///////////////////////////////////////////////////////
// Inheritance Between "Classes": Constructor Functions

const Person = function (firstName, birthYear) {
  this.firstName = firstName;
  this.birthYear = birthYear;
};

Person.prototype.calcAge = function () {
  const date = new Date().getFullYear();
  console.log(date - this.birthYear);
};

const Student = function (firstName, birthYear, course) {
  Person.call(this, firstName, birthYear);
  this.course = course;
};

// Linking prototypes
Student.prototype = Object.create(Person.prototype);

Student.prototype.introduce = function () {
  console.log(`Hello my name is ${this.firstName} and I study ${this.course}.`);
};

const ivo = new Student('Ivo', 2000, 'JavaScript');
ivo.introduce();
ivo.calcAge();

console.log(ivo instanceof Student);
console.log(ivo instanceof Person);
console.log(ivo instanceof Object);

Student.prototype.constructor = Student;
console.dir(Student.prototype.constructor);
