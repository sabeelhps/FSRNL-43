// function fun(x, y) {
//     return z;
// }

// if x,y or z are also function the fun is known as HOF


const radiusArr = [1, 2, 3, 4, 5, 6, 7, 8];


// paremeter -- array parameters
// Area --- array areas
// diameter -- array diameter
const PI = 3.14;

function calParameter(arr) {
    const res = [];
    for (let radius of arr) {
        res.push(2 * PI * radius);
    }
    return res;
}

function calArea(arr) {
    const res = [];
    for (let radius of arr) {
        res.push(PI * radius * radius);
    }
    return res;
}

function calDiameter(arr) {
    const res = [];
    for (let radius of arr) {
        res.push(2* radius);
    }
    return res;
}

// console.log(calParameter(radiusArr));
// console.log(calArea(radiusArr));
// console.log(calDiameter(radiusArr));



function area(radius) {
    return PI * radius * radius;
}

function paremeter(radius) {
    return 2*PI*radius;
}

function diameter(radius) {
    return 2 * radius;
}

function squareRadius(radius) {
    return radius ** 2;
}

function calculate(arr, logic) {
    const res = [];
    for (let radius of arr) {
        res.push(logic(radius));
    }
    return res;
}


console.log(calculate(radiusArr, area));
console.log(calculate(radiusArr, paremeter));
console.log(calculate(radiusArr, diameter));
console.log(calculate(radiusArr, squareRadius));

// area, paremeter, diameter, squareRadius ----- Callbacks


// Arrow functions and function expression

// Difference between normal function declaration (using a function keyword), arrow function, function expression.

 



