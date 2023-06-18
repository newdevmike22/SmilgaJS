/* String properties and methods 

let text = " H.R. Pufnstuf ";

console.log(text.length); // Will come out to 13
console.log(text.toLowerCase());
console.log(text.toUpperCase());
console.log(text.charAt(2)); // Will show a capital R
console.log(text.charAt(text.length - 1));
console.log(text.indexOf('P'));
console.log(text.trim());
console.log(text.trim().toLowerCase().startsWith("h.r."));
console.log(text.includes("nstuf"));
console.log(text.slice(0, 2));
console.log(text.slice(-2))
*/

/* Template Literals 
const name = "Cheese";
const age = 30;
const city = "St. Louis, MO";
const sentence = (`${name} is a ${age} old comedian from ${city}.`);
console.log(sentence);
console.log(sentence.length);
console.log(`Cheri just turned ${age + 10}.`);

function fullName (firstName, lastName) {
    return `${firstName} ${lastName}`;
}

let yourFullName = fullName('Michael', 'Dodson');
console.log(yourFullName.toUpperCase());

// arrow function
let teamName = (teamCity, teamName) => {
    return `The ${teamCity} ${teamName}.`
}

let favTeam = teamName ("Las Vegas", "Raiders");
console.log(favTeam);
*/

// Array Properties and Methods

let names = ['Mike', 'Kevin', 'Angie', 'Marie', 'Vincent'];

console.log(names.length);
console.log(names[names.length - 1]);

// concat will join an array
const lastNames = ['Dodson', 'Doyle', 'Johnson'];
const allNames = names.concat(lastNames);
console.log(allNames);

// reverse
console.log(allNames.reverse());

// unshift will add an item to the start of an array
allNames.unshift('Arthur');
console.log(allNames);

// shift removes the first item
allNames.shift();
console.log(allNames);

// push adds to the end
allNames.push('Spanky');
console.log(allNames);

// pop removes an item from the end
allNames.pop();
//console.log(allNames);

// splice
const specificNames = allNames.splice(2, 1);
console.log(specificNames);
console.log(allNames);