

// const a = 10;
// const b = 20;

// const res = a + b;

// console.log(res);

// //... 500 line of code


// const a1 = 30;
// const b1 = 40;

// const res1 = a1 + b1;

// console.log(res1);


// //1000 line of code 

// const a2 = 50;
// const b2 = 40;

// const res2 = a2 + b2;

// console.log(res2);


// function functionName() {
//     function body
// }


// Read about exception handling  in JS

// function defintion
function add(a, b, c = 5) { //a,b are function parameters
    if (typeof a !== 'number' || typeof b !== 'number' || typeof c !== 'number') {
        console.log('Invalid Params..');
        throw new Error('Invalid Arguments');
    } 
    
    const res = a + b + c;
    console.log(`Sum of ${a}, ${b} and ${c} is : ${res}`);
    // ..1000 lines of code
}

// function call 
add(10, 20, 30);

add(1, 2, 3); // arguments

add(10, 50);

try {
    add(true, false, 30);
}
catch (e) {
    console.log('Inside catch block');
} 
finally {
    
}

// add(false, false, false);

// add(true, 20, false);

// add("abc",5, 10)

console.log('After function call');




