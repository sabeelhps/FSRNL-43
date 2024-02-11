// Implicit binding

const person = {
    name: 'Max',
    age: 25,
    greet: function () {
        console.log(`Hello from ${this.name}`);
        console.log(this);
    }
}


function fun() {
    console.log(this);
}


fun();
window.fun();



