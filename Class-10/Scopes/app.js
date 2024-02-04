



// let a = 100;

// console.log(a);

// function fun() {
//     console.log('Inside fun');
// }

// fun();



// Global scope - Outermost scope

// Blocks scope and function scope

// function sendEmail(email) {
//     const url = 'http://sendemail.com';

//     console.log(`sending email to : ${email} via ${url}`);
// }

// sendEmail('abc@gmail.com');

// console.log(url);

// let a = 500;

// if (true) {
//     var favNumber = 37;
//     let firstName = "Max";
// }

// console.log(favNumber);

// console.log(firstName);

var c = 300;

function fun() {
    var a = 100;

    function innerFun() {
        console.log(b);
        console.log('Inside inner fun');
    }

    innerFun()

    console.log('inside fun');
}


fun();

console.log(c);












