// functions, return, if, arrays, for loop

const gas = [15, 50, 25, 65];
const food = [75, 10, 50, 35];

const calculateTotal = (arr) => {
    let total = 0;
    for (let i = 0; i < arr.length; i++) {
        total += arr[i]
    }
    if (total > 100) {
        console.log("Hey! You are spending too much loot!");
        return total;
    }
    console.log("You are within your budget. Good job!");

    return total;
}

const gasTotal = calculateTotal(gas);
const foodTotal = calculateTotal(food);
const randomTotal = calculateTotal([36, 150, 28, 14]);

console.log({
    gas:gasTotal,
    food:foodTotal,
    random:randomTotal
});