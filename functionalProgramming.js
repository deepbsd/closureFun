// Some things you can do when a language accepts functions as parameters


let arr = [ 1, 2, 3 ];
let arr2 = [ 'one', 'two', 'three' ];

function doubleInt(n){
    return n * 2;
}

// create one for strings...
function doubleStr(string){
    return string+string;
}

// accepts function as parameter
function mapForEach(arr, fn){
    let newArr = [];
    for (let i=0; i<arr.length; i++){
        newArr.push( fn(arr[i]) );
    }

    return newArr;
}

//  These call discrete function...
console.log( mapForEach(arr, doubleInt) );
console.log( mapForEach(arr2, doubleStr) );


// We could also define a function with the function call...
// We actually have a function call as a parameter, so the result
// of the function call is an array, which becomes the first parameter...
let myArrLongerThan5 = mapForEach( mapForEach(arr2, doubleStr), (item) => {
    return item.length > 5;
});

console.log("Each word longer than 5 chars ==> ", myArrLongerThan5 );

//What if we wanted a function where we just pass in the array limiter?
let checkPastLimit = function(limiter){
    return function(limiter,item){
      return item > limiter;
    }.bind(this,limiter);
}

// Here we pass in the limiter using CALL
let limiter = 2;
let greaterThan2 = mapForEach(arr, checkPastLimit(limiter));
console.log(greaterThan2);




