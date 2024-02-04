

// function add(x, y) {
//     const res = x + y;
//     return res;
// }

// const ans = add(3, 4);

// console.log(ans);





console.log(a);

function fun() {
    var b = 200;

    console.log('Inside fun');
    
    function innerFun() {
        console.log('Inner fun');
        b = b + 1;
        console.log(b);
    }

    function innerFunV2() {
        console.log('Inner fun');
        b = b + 1;
        console.log(b);
    }

    innerFun();
}

var a = 200;

var f = fun();

var z = fun();

f();
f();
f();

z();
z();



