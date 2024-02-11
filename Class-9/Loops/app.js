// WET - write everything twice

// console.log("1")
// console.log("2")
// console.log("3")
// console.log("4")
// console.log("5")
// console.log("6")
// console.log("7")
// console.log("8")
// console.log("9")
// console.log("10")

// for (initialisation; condition; updation){
//     work
// }


// for (let num = 1; num <= 10; num = num + 1){
//     console.log(num);
// }

// i=100, 0, -100, -200

// for (let i = 100; i <= 500; i = i - 100){
//     console.log(i)
// }


// 100
// 0 
// -100
// -200


// While Loops

// while (condition) {
//     //work
// }


// let i = 100;

// while (i <= 1000) {
//     console.log(i);
//     i = i + 100;
// }


// const fruits = ['Apple', 'Oranges', 'Grapes', 'Kiwi', 'PineApple'];

// for (let i = 0; i < fruits.length; i=i+1){
//     console.log(fruits[i].toUpperCase());
// }


// For of loops - They are used to iterate over iterable objects - string, array, map, set.


let str = "GeeksforGeeks"; //iterable object

for (let char of str) { // iterator
    // console.log(char);
}




const firstName = "Sabeel";
const lastName = "Khan";

// Mr. lastName, firstName

const fullName = `Mr. ${lastName}, ${firstName}`;

// console.log(fullName);

const products = [
    { name: 'Iphone', price: 2000 },
    { name: 'Ipad', price: 1000 },
    { name: 'Watch', price: 500 }
];

// for (let product of products) {
//     console.log(`Product : ${product.name} :::: Price: ${product.price}`);
//     if (product.name === 'Ipad') {
//         console.log('breaking the loop.....')
//         break;
//     }
// }


// break, continue


// for (let i = 1; i <= 10; i++){
//     if (i === 5) {
//         console.log('Before break!')
//         break;   
//         console.log('After break')
//     }
//     console.log(i);
// }



// for (let i = 1; i <= 10; i++){
//     if (i === 5) {
//         console.log('Before continue!')
//         continue;
//         console.log('After continue')
//     }
//     console.log(i);
// }



// For in loops - Explore more about it

// const person = {
//     name: 'Max',
//     age: 20,
//     isAdult: true
// }

// for (let prop in person) {
//     console.log(`${prop}----> ${person[prop]}`);
// }











