// How could you use this ability
// in  JS?

// Each closure has a SEPARATE execution context.  It's references will be different 
// with each call. The number variable will never be the same on any two closures... 

function choosePresident(party){
    // number will get chosen for each separate call
    // so no two console.log's will have same number
    let num = Math.floor(Math.random()* 999)+100
    return function(lastname){
        if (party==='democrat'){
            return `${num}: I vote for ${lastname}`
        }
        if (party==='republican'){
            return `${num}: I vote for ${lastname}`
        }
        return `${num}:  I'm not even voting!  It only encourages them!`
    }
}


// I'm creating *three* separate execution contexts in memory!
// Even though it's one function, there are three separate contexts in memory
let voteRepublican = choosePresident('republican');
let voteDemocrat = choosePresident('democrat');
let noVote = choosePresident();


// What will happen here?
console.log( voteRepublican('Trump') );
console.log( voteDemocrat('Clinton') );
console.log( noVote() );

