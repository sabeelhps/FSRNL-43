
let fullName = 'Sarah';

function sayName() {
    console.log(fullName);
}

function fun() {
    let fullName = "ABC";
    sayName();
    console.log(fullName);
}

fun();
console.log(fullName);

// Sarah 
// ABC
// Sarah


