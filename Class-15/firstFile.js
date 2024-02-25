console.log('Hello World!');

const fruits = ["Apple", "Banana", "Cherry"];

console.log(fruits);


const person = {
    name: "John",
    age: 30,
    city: "New York"
}

console.log(person);


const names = ["John", "Peter", "Sally", "Jane"];

for (let name of names) {
    console.log(`Hello, ${name}!`);
}


function fun() {
    console.log("This is a function!");
}

fun();


const add = (a, b) => a + b;

console.log(add(5, 10));


class Car{
    constructor(brand){
        this.carname = brand;
    }
}

const myCar = new Car("Ford");

console.log(myCar.carname);