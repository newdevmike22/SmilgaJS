// document.write("Hello World!"";
// alert("Hello World!");
// console.log("Hello World!");

// document.write("Hello World!");
// alert("Hola amigos!");
// console.log("Make my funk the P-Funk!");
// console.log({ album: "Mothership Connection" });

// STATEMENTS & COMMENTS
// I woke up early today.
// statements - sets of instructions
// comments - shortcut Command + /

// These are statements
// console.log("Whatever you do, make it funky!");
// console.log("I want pizza for dinner.");

// This is how you write a comment in JavaScript.

/* 
  This is another way to write a comment
  for multiple lines of code. 
*/

// VARIABLES
/*
let name = "El Magnifico Miguel";
console.log(name);

let color = "black";
console.log(name + " wore a " + color + " mask.");

let clothes = "black mask and suit";
console.log(`${name} wore a ${clothes}.`);

// assigning value to a variable later
let character, animal;

character = "Pepé Le Pew";
animal = "skunk";

console.log(`${character} is a lovable ${animal}.`);

// You can also reassign a value to a variable later
name = '"Jefferson Street" Joe Gilliam';
team = "The Pittsburgh Steelers";
// Numbers don't need quotation marks for variables;
number = 17;

console.log(`${name} wore number ${number} for the ${team}.`);
*/

// There are 3 ways to start a variable: var, let and const.
// Are variable starting with const can't be altered like var or let.
// var is the old way of starting your variable.

// String Concatenation

/*
let city = "Santiago";
const country = "The Dominican Republic";

city = "Puerto Plata";
console.log(`Senora Gomez was born in ${city} of ${country}. `);
*/

// NUMBERS
/*
const number = 60;
let age = 12;
console.log(number + age);

age = 5;
console.log(number - age);

const add = number + age;
console.log(add);

const subtract = number - age;
console.log(subtract);

const multiply = number * age;
console.log(multiply);

const divide = number / age;
console.log(divide);

age += 5;
age++;
age--;
console.log(age);

// Modulus
const slices = 32;
const kids = 10;
const amount = slices % kids;

console.log(amount);
*/

// DATA TYPES
/*
// String
const text = "A bit of text.";

// Number
const num = 55;

// Boolean
let value = true;

// Null
let result = null;

// Undefined
let place;

// Symbol(ES6)

console.log(typeof text);
console.log(typeof num);
console.log(typeof value);
console.log(typeof result);
console.log(typeof place);
*/

// ARRAYS

const aunts = ["May", "Barbara", "Helen", "ChiChi"];

let favAunt = aunts[0];

//console.log(aunts);
//console.log(aunts[3] + " is my aunt in the Dominican Republic.");
//console.log(`${favAunt} is my favorite aunt of all time!`);

// FUNCTIONS

// Declare and Invoke
function hello() {
  //console.log("Hello from Moonbase 2!");
}

hello();

const Angie = "Hello Angie!";
const Marie = "Hi Marie?";
const Arlene = "Hola Arlene.";

function greet() {
  //console.log(Angie);
  //console.log(Marie);
  //console.log(Arlene);
}

greet();

// parameters and arguments

function hiThere(name) {
  //console.log("How are you " + name + "?");
}

hiThere("May");
hiThere("Darren");
hiThere("Steve");

// return

wallHeight = 80;

function calculate(value) {
  // const newValue = value * 2.54;
  return value * 2.54;
}

const width = calculate(100);
const height = calculate(wallHeight);

const dimensions = [width, height];
//console.log(dimensions);

// expressions
function addValues(num1, num2) {
  return num1 + num2;
}

const firstValue = addValues(3, 4);
const secondValue = addValues(12, 34);

const add = function (num1, num2) {
  return num1 + num2;
};
const thirdValue = add(20, 30);
const values = [firstValue, secondValue, thirdValue];
//console.log(values);

// OBJECTS
const person = {
  name: "John",
  lastName: "Wick",
  age: 36,
  married: false,
  occupation: "Full Stack Developer",
  favFoods: ["nachos", "tacos", "pasta"],
  greeting() {
    //console.log("My name is John Wick.");
  },
};

//console.log(person.name);
//console.log(person.favFoods[1]);
person.greeting();

// CONDITIONAL STATEMENTS

// If Statements
if (10 > 8) {
  console.log("Yabba-Dabba-Doo!");
}

const value = 16 > 30;

if (value) {
  console.log("Green Eggs and Ham.");
} else {
  console.log("Who let the dogs out?");
}

const age1 = 21;
const age2 = 16;

if (age2 >= age1) {
  console.log("Welcome to Happy Times Niteclub");
} else {
  console.log("Sorry but you are not old enough to enter.");
}
