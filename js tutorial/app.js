// helper methods

// document.write
// alert
// console.log

/*
document.write("I love cheesecake!");
alert('The Martians are attacking!');
console.log("Make my funk the P-Funk!");
*/

// Variables

let name = "Mike";
console.log(name);

let city = "Puerto Plata is a beautiful city.";
console.log(city);

let team = "Rams";
// the variable team is reassigned
team = "Chargers";
console.log(team);

const age = 56;
// variables using const can't be reassigned. Trying to do so will cause an error
// age = 32;
console.log(age);

let address, state, zip;

address = "1313 Mockingbird Lane";
state = "Feel Good, Missouri";
zip = "63131";

console.log(`My mailing address is ${address}, ${state}, ${zip}.`);

const fullName = "Michael Dodson";
const career = "Web Developer";

console.log(`My name is ${fullName}. I am a ${age} year old ${career}.`);

// Numbers

const addition = 35 + 100;
const subtraction  = 120 - 60;
const multi = 9 * 7;
const division = 75 / 3;
const decimal = 2.6;

let number = 45;
number +=5;

let number2 = 50;
number2 -=10;

let number3 = 20;
number3 *=3;

let number4 = 60;
number4 /=4;

const candyPieces = 17;
const children = 3;
const amount = candyPieces % children;

console.log(addition, subtraction, multi, division, decimal);
console.log(addition - division);
console.log(number);
console.log(number2);
console.log(number3);
console.log(number4);
console.log(amount);
