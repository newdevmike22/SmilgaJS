/* CODING CHALLENGE UNO */
// 1. Create "firstName" and "lastName" variables.
// 2. Assign your values.
// 3. Create an "address" value and assign it a value of "main street".
// 4. Later change that value to "first street".
// 5. Log your values to the console.

const firstName = "Michael";
const lastName = "Dodson";
let address = "Main Street";

address = "First Street";
//console.log(`My name is ${firstName} ${lastName}. I currently live on 4426 ${address}.`);

/* CODING CHALLENGE DOS */
// 1. Create "street" and "country" variables.
// 2. Assign your values.
// 3. Create a "fullMailingAddress" variable and assign it the result of "street + country".
// 5. Log "fullMailingAddress" to the console.

let street = "3601 Enright St., St. Louis, MO 63108 ";
let country = "USA";
let fullMailingAddress = street + country;
//console.log(fullMailingAddress);

/* CODING CHALLENGE TRES */
// 1. Create "score1", "score2", and "score3" variables and assign values from 0-100.
// 2. Calculate total score and average score, and assign them to the variables.
// 3. Console log the total score and average score.
// 4. Create "plates" variable and assign it a value of 20.
// 5. Create "people" variable and assign it a value of 7.
// 6. Calculate remaining plates and assign to a variable.
// 7. Add one to the remaining plates.
// 8. Create a message variable and use string concatenation.
// 9. Console log the message.

let score1 = 90;
let score2 = 86;
let score3 = 100;

const totalScore = score1 + score2 + score3;
const averageScore = totalScore / 3;

//console.log(totalScore);
//console.log(averageScore);

const plates = 20;
const people = 7;
let extraPlates = plates % people;
extraPlates++;

//const message = "There are " + extraPlates + " plates left to serve our guests with.";
//console.log(message);

/* CODING CHALLENGE CUATRO */
// 1. Create "fruits" array and store some fruit values.
// 2. Setup the last item as a number.
// 3. Assign first fruit to a variable.
// 4. Re-assign last array to an actual fruit.
// 5. Log both first fruit variable and entire array.

const fruits = ["orange", "apple", "banana", "grape", "mango", 16];
const firstFruit = fruits[0];
fruits[5] = "watermelon";

//console.log(firstFruit, fruits);

/* CODING CHALLENGE CINCO */
// 1. Create "calculateTotal" function.
// 2. Add two parameters, subTotal and tax.
// 3. Return sum of parameters.

// 4. Create 3 vars "order1", "order2", "order3".
// 5. Call calculateResult, pass in some values and assign result to each order.
// 6. Log all 3 orders.
// 7. Refacter "calculateTotal" to a function expression.

function calculateTotal(subTotal, tax) {
  return subTotal + tax;
}

const totalAmount = calculateTotal(20, 2);

//console.log(totalAmount);

let order1 = 20;
let order2 = 25;
let order3 = 30;

function calculateResult() {
  //console.log("The sum of your order is $" + order1 + ".");
  //console.log("The sum of your order is $" + order2 + ".");
  //console.log("The sum of your order is $" + order3 + ".");
}

calculateResult();

function calculateSum(subTotal, tax) {
  return subTotal + tax;
}

const sumAmount = calculateSum(56, 2);

const add = function (subTotal, tax) {
  return subTotal + tax;
};

const secondAmount = add(75, 36);
const totalSums = [sumAmount, secondAmount];

//console.log(totalSums);

function Name(animal) {
  return animal;
}

const bullFrog = Name("Jeremiah was a bullfrog.");
//console.log(bullFrog);

/* CODING CHALLENGE SEIS */

// 1. Create a car object.
// 2. Add make, model, year, colors (array), and hybrid (boolean) keys.
// 3. Add two methods (drive and stop).
// 4. In the function body setup a log with some random text.
// 5. Log car make.
// 6. Log first color.
// 7. Invoke both methods.

const car = {
  make: "Nissan",
  model: "Rogue SL",
  year: 2023,
  colors: ["Silver", "Black"],
  hybrid: true,
  drive() {
    console.log("Drive me to the stop please.");
  },
  stop() {
    //console.log("I need to stop by my mother's house.");
  },
};

console.log(car.make, car.colors[0]);
car.drive();
car.stop();

/* CODING CHALLENGE SIETE 

1. Create two objects "person1, "person2"
2. Setup name, age (15 - 25), status ("resident", "tourist") keys
3. Setup if else condition where age must be bigger than 18 and status must be equal to resident
4. Test both objects
*/

const personOne = {
  name: "Bubba Smith",
  age: 25,
  status: "tourist"
}

const personTwo = {
  name: "Jamming Jane",
  age: 21,
  status: "resident"
}

if (personOne.name === "Joe Nameth" ) {
  console.log("Joe Nameth is a Hall of Famer!");
} else if (personOne.name === "Bubba Smith" && personOne.age > 18 && personOne.status !== "resident") {
  console.log(`${personOne.name} is a great football player!`);
  console.log(`${personOne.status}`);
  console.log(`${personOne.age}`);
}

if (personTwo.name === "Bootsy Collins" ) {
  console.log("I luv ya baby!");
} else if (personTwo.name === "Jamming Jane" && personTwo.age > 18 && personTwo.status !== "tourist") {
  console.log(`${personTwo.name} really knows how to jam on her bass!`);
  console.log(`${personTwo.status}`);
  console.log(`${personTwo.age}`);
}