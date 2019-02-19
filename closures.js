function buildFunctions(){
    var arr = [];

    // var bypasses the local execution context of the for loop
    // let would preserve the local execution context at this instant
    for (var i=0; i<3; i++){
        arr.push(function(){
            return i;
        });
    }
    return arr;
}

let fire = buildFunctions();

fire[0]();  // 3
fire[1]();  // 3
fire[2]();  // 3


// Second example

function newBuildFunctions(){
    let arr = [];

    for (let i=0; i<3; i++){
        arr.push(function(){
            return i;
        })
    }
    return arr;
}

let fire1 = newBuildFunctions();

fire1[0]();  // 0
fire1[1]();  // 1
fire1[2]();  // 2


// Third example

function thirdBuildFunctions(){
    let vals = [ 'one', 'two', 'three', 'four' ];
    let arr = [];
    for (let i=0; i<3; i++){
        arr.push(
            (function(j){
                return function(){
                    return j;
                }
            }(vals[i]))
        )
    }
    return arr;
}

let fire2 = thirdBuildFunctions();

// What will this be?  'one' or 'four'?
console.log( fire2[0]() );

console.log( fire2[1]() );

console.log( fire2[2]() );

// this will throw an error, because there are only three functions in the array
// vals[i] never did equal 'four' because the for loop stopped before i ever got to 3
//
//  --->>>   console.log( fire2[3]() );
