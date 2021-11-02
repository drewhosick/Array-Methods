// Reduce Method

const numbers = [1, 2, 3, 4, 5];
// run through callback function to go through the items in an array
const total = numbers.reduce(sum, 0);

function sum(accumulator, value) {
    return accumulator + value;  
}
console.log(total);

// 2nd example
const store = [
    {
        product: 'laptop',
        value: 1000,
        count: 3
    },
    {
        product: 'desktop',
        value: 1500,
        count: 4
    },
    {
        product: 'movible',
        value: 500,
        count: 10
    }
];

const totalValueStore = store.reduce((acc, item) => acc + item.value * item.count, 0);

console.log(totalValueStore);


// filter only items that return as true to a new array

const newNumbers = [1, 2, 3, 4, 5, 6];

const even = newNumbers.filter(isEven);

function isEven(value) {
    return value % 2 === 0;
}

console.log(even);


// 2nd example

const people = [
        {
            name: 'Drew',
            age: 26
        },
        {
            name: 'Marina',
            age: 24
        },
        {
            name: 'Larry',
            age: 15
        },
        {
            name: 'Price',
            age: 17
        }
];

const adults = people.filter(person => person.age >= 18);
console.log(adults);

// isArray

const numero = 1;
const names = ['jeff', 'carter', 'leanne'];
console.log(Array.isArray(names), Array.isArray(numero));