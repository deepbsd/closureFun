// How could you use this ability
// in  JS?


function choosePresident(party){
    return function(lastname){
        if (party==='democrat'){
            return `I vote for ${lastname}`
        }
        if (party==='republican'){
            return `I vote for ${lastname}`
        }
        return `I'm not even voting!  It only encourages them!`
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

