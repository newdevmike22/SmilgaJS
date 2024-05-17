/*
## Variables #1

1. Create "firstName" and "last_name" variables.
2. Assign your values.
3. Create an "address" variable and assign it a value of "main street".
4. Re-assign a value of "first street" to the address variable.
5. Log all the values to the console.

const firstName = "'Fat' Albert";
const last_name = "Johnson";
let address = "Main Street";
address = "First Street";

console.log(firstName, last_name);
console.log(address);


## String Concatenation #2

1. Create "street" and "country" variables.
2. Assign your values.
3. Create a "fullMailingAddress" variable and assign it the values of "street + country".
4. Log "fullMailingAddress" to the console.

const street = "3226 Itaska Street, St. Louis, MO 63111";
const country = "USA";
const fullMailingAddress = `${street} • ${country}`;
console.log(fullMailingAddress);
*/

/*

## Numbers #3

1. Create "score1", "score2" and "score3" variables.
2. Assign each values between 1-100.
3. Calculate the total score and average score and assign them variables.
4. Log "totalScore" and "averageScore" to the console.
5. Create a "plates" variable with a value of 20.
6. Create a "people" variable with a value of 7.
7. Calculate the remaining plates using modulus and assign it to variable.
8. Add 1 to the remaining plates. 
9. Create a message variable and display 'There are (your value goes here) plates available.'
10. Log the message.
*/

const score1 = 85;
const score2 = 95;
const score3 = 75;
const totalScore = score1 + score2 + score3;
const averageScore = totalScore / 3;

console.log(totalScore);
console.log(averageScore);

const plates = 20;
const people = 7;
let remainingPlates = plates % people;
remainingPlates +=1;
const message = `There are ${remainingPlates} plates available.`;

console.log(message);