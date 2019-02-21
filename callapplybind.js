// You can pass a parent context to an object or function with the bind method.
// All objects in JS have access to call(), apply(), and bind().

let passenger = {
    firstname: 'Fox',
    lastname: 'Mulder',
    getFullName: function(){
        let fullname = this.firstname + ' ' + this.lastname;
        return fullname;
    }
};


let seeUfo = function(calledby, greeting, message){
    console.log('UFO Passenger: ' + this.getFullName());
    console.log("Called by: "+ ' ' + calledby + "   Arguments: " + greeting + ' ' + message);
    console.log("===================");
};


let logPassengerName = seeUfo.bind(passenger);

// if we just try to run seeUfo(), I'll get a TypeError because
// getFullName() will not be part of the parent execution context.
// The "this" context will not include getFullName().
//logName();  // TypeError


// On line 21, we bind the execution context of the passenger object
// to the logName function.  logPassengerName now has that context
// built-in and will execute without error.  getFullName() will be
// available under this new context

// this works great
logPassengerName('bind()', 'Be careful, Fox!', 'Do you see any aliens?');     // Passenger: Fox Mulder


// using call()  context is first variable, arguments follow context
seeUfo.call(passenger, 'call()', 'Hi Fox!', 'Look out for little green men!');  // add arguments after context


// using apply()  only difference is that arguments must be in ARRAY
seeUfo.apply(passenger, ['apply()', 'Hey Fox!', "You're a spooky guy!"]);

// Let's give Scully her own ufo...
let newUfo = {
    firstname: 'Dana',
    lastname: 'Scully',
    sayPassenger: function(){
        let fullname = this.firstname + ' ' + this.lastname;
        return fullname;
    }
};

// I could just make an IIFE for the function and use apply with it...
(function(greeting, message){
    console.log("UFO Passenger: "+this.sayPassenger());
    console.log("Greeting: ",greeting," Message: ",message);
    console.log("=====================");
}).apply(newUfo, ['Hey Scully!', 'Watch out!'])


// ************************************************************ //
//                    Function borrowing...
// ************************************************************ //
let boss = {
    firstname: 'Walter',
    lastname: 'Skinner'
};

// We're borrowing the function sayPassenger() from newUfo...
console.log("newUfo: ",newUfo.sayPassenger.apply(boss));
// Try it on the first function called seeUfo()
console.log("passenger obj: ",passenger.getFullName.apply(boss))


// ************************************************************ //
//                    Function currying ...
// ************************************************************ //
// Function currying is using another function but binding a different 
// parameter to a new function, so the new function becomes a specialized
// version of the curried function.  Adds a default value as a parameter.
console.log("============ Function Currying =============")

function multiply(a, b){
    return a * b;
}

let multiplyByFour = multiply.bind(this, 4);

// Now multiplyByFour() will take only one argument and always multiply it by 4
console.log("Function currying: multiplyByFour(4): ",multiplyByFour(4));   // 16

