
function doStep1(init, callback) {
    const result = init + 1;

    // ..
    // 
    callback(result);
}
  
function doStep2(init, callback) {
  const result = init + 2;
  callback(result);
}
  
function doStep3(init, callback) {
  const result = init + 3;
  callback(result);
}

// Callback Hell
function doOperation() {
    doStep1(10, function (result1) {
        doStep2(result1, function (result2) {
            doStep3(result2, function (result3) {
                console.log(result3);
                console.log('Every thing done');
            })
        })
    })
}
  
doOperation();



  