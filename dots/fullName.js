// Arrays and For Loop

const names = ['Vincent', 'Arthur', 'Jerry', 'David', 'Casetta', 'Rosetta'];
const lastName = 'Ribsniffer';
let fullName = [];

// For Loop
for (let i = 0; i < names.length; i++) {
    console.log(i);
    console.log(names[i]);

    fullName.push(`${names[i]} ${lastName}`);
}

console.log(names);
console.log(fullName);