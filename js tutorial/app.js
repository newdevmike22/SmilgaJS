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