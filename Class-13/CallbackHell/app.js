
// console.log("START");

// function add(a, b, callback) {
//     console.log('Starting the addition process.');
//     setTimeout(function () {
//         // console.log('Inside setimeout')
//         const res1 = a + b; // takes 2 sec
//         callback(res1);
//     }, 2000);
// }

// function multiply(x, y, callback) {
//     console.log('Starting the multiply process.');
//     setTimeout(function () {
//         // console.log('Inside multiply setTimeout callback');
//         const res2 = x * y;
//         callback(res2);
//     }, 3000);
// }

// function exponentiation(m, n, callback) {
//     console.log('Starting the exponentiation process.');
//     setTimeout(function () {
//         // console.log('Inside exponentiation setTimeout callback');
//         const res3 = m ** n;
//         callback(res3);
//     }, 1000);
// }


// add(3, 4, function (res1) {
//     console.log(`Result of addition is : ${res1}`);
//     multiply(res1, 10, function (res2) {
//         console.log(`Result of multiply is : ${res2}`);
//         exponentiation(res2, 2, function (res3) {
//             console.log(`Final Resutlt is ${res3}`);
//             console.log('Everything is done!');
//         })
//     })
// });

// console.log("END");

// console.log('After add!')
// console.log('After add!')
// console.log('After add!')
// console.log('After add!')
// console.log('After add!')



// Better code with Promises --------------------------


// const promise = fetch('https://fakestoreapi.com/products');

// promise
//     .then((res) => {
//         console.log('inside resolve')
//         console.log(res);
//     })
//     .catch((err) => {
//         console.log('Inside reject');
//         console.log(err);
//     })


function add(a, b) {
    console.log('Starting the addition process.');
    return new Promise((resolve, reject) => {
        setTimeout(function () {
            const res1 = a + b; // takes 2 sec
            resolve(res1);
        }, 2000);
    })

}

function multiply(x, y) {
    return new Promise((resolve, reject) => {
        console.log('Starting the multiply process.');
        setTimeout(function () {
            const res2 = x * y;
            if (res2 % 2 === 0) {
                reject(new Error('result of multiply is even'));
            } else {
                resolve(res2);
            }
        }, 3000);
    })
}

function exponentiation(m, n) {
    return new Promise((resolve, reject) => {
        console.log('Starting the exponentiation process.');
        setTimeout(function () {
            const res3 = m ** n;
            resolve(res3);
        }, 1000);
    })
   
}


// add(3, 4)
//     .then((res1) => {
//         console.log(`Result of addition is ${res1}`);
//         return multiply(res1, 10);
//     })
//     .then((res2) => {
//         console.log(`Result of multiply is ${res2}`);
//         return exponentiation(res2, 2);
//     })
//     .then((res3) => {
//         console.log(`Result if exponentiation is ${res3}`);
//         console.log("Everything is done");
//     })
//     .catch((err) => {
//         console.log(err);
//     })


async function main() {
    try {
        const res1 = await add(2, 3);
        console.log(`Result of addition is ${res1}`);
        const res2 = await multiply(res1, 10);
        console.log(`Result of multiply is ${res2}`);
        const res3 = await exponentiation(res2, 2);
        console.log(`Result if exponentiation is ${res3}`);
        console.log(`Everything is done ${res3}`);
    }
    catch (e) {
        console.log('inside catch')
        console.log(e);
    }
}

main();

