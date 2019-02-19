// I got the idea for this file from a Udemy course 
// called Javascript: Understanding the Weird Parts
// This comes from the lesson on Understanding Closures Part 2


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
/*
fire[0]();  // 3
fire[1]();  // 3
fire[2]();  // 3
*/

console.log("first calls: \n",
fire[0](),"\n",
fire[1](),"\n", 
fire[2](),"\n"  )

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

console.log("second calls: \n",
fire1[0](),"\n",
fire1[1](),"\n", 
fire1[2](),"\n"  )

/*
fire1[0]();  // 0
fire1[1]();  // 1
fire1[2]();  // 2
*/

// Third example

function thirdBuildFunctions(){
    // make it more obvious with an array of strings
    let vals = [ 'one', 'two', 'three', 'four' ];
    let arr = [];
    // go ahead and use let.  we can still prove our
    // point...
    for (let i=0; i<3; i++){
        arr.push(
            (function(j){
                return function(){
                    return j;
                }
            // pass the value of vals[i] at this
            // instant
            }(vals[i]))
        )
    }
    return arr;
}

let fire2 = thirdBuildFunctions();

// What will this be?  'one' or 'four'?
console.log("third calls: ")
console.log( fire2[0]() );

console.log( fire2[1]() );

console.log( fire2[2]() );

// this will throw an error, because there are only three functions in the array
// vals[i] never did equal 'four' because the for loop stopped before i ever got to 3
//
//  --->>>   console.log( fire2[3]() );
