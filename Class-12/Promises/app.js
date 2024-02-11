

// const p = new Promise((resolve, reject) => {
    
//     // resolve => function which will get executed if opration is success.
//     // reject => function which will be called in case of failures.
// })


// Creating a promise

function connectDatabase() {
   return new Promise((resolve, reject) => {
        setTimeout(function () {
            if (new Date().getTime() % 2 == 0) {
                resolve('DB Connection Open!');
            } else {
                reject(new Error('This is a error!!!!'));
            }
        }, 2000);
    })
}



// // consuming a promise
// connectDB
//     .then(function (message) {
//         console.log('Inside resolve');
//         console.log(message);
//     })
//     .catch(function (err) {
//         console.log('Inside reject');
//         console.log(err);
//     });


console.log('START');
async function main() {
    try {
        const res = await connectDatabase();
        console.log(res);
        console.log('INSIDE MAIN FUNCTION............')
    }
    catch (e) {
        console.log(e.message);
   }
}

main();

console.log('After main!!!!')
console.log('After main!!!!')
console.log('After main!!!!')
console.log('After main!!!!')
console.log('After main!!!!')
console.log('After main!!!!')
console.log('After main!!!!')
console.log('After main!!!!')
console.log('After main!!!!')
console.log('After main!!!!')

console.log('END');

