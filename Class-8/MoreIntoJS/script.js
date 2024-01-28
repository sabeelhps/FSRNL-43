

// Conditional statements

// if ----------------------------------------statments

// if (expression) {
//     // work
// }

// expression should be evaluated to true/false

const num = 20;

// compariason operators - >, < ,>=, <=, ==, ===, !=

if (num < 25) {
    console.log('Number is less than 25');
}


// if-else -----------------------------------

const isRaining = true;

if (isRaining) {
    console.log('Take umbrella');
} else {
    console.log('Dont take the umbrella');
}


// if-elseif-else -----------------------

let age = parseInt(prompt("Enter your age"));

// console.log(age);
// console.log(typeof age);

// age = 100;

// console.log(typeof age);

// Logical Operators - &&, ||, !

if (age < 18) {
    console.log('You cannot enter a club');
} else if (age >= 18 && age <= 25) {
    console.log('You can enter but cannot drink!');
} else {
    console.log('You can enter and drink!');
}




