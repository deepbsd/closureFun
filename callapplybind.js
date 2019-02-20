// You can pass a parent context to an object or function with the bind method.
// All objects in JS have access to call(), apply(), and bind().

let passenger = {
    firstname: 'Fox',
    lastname: 'Mulder',
    getFullName: function(){
        let fullname = this.firstname + ' ' + this.lastname;
        return fullname;
    }
}


let seeUfo = function(greeting, message){
    console.log('Passenger: ' + this.getFullName());
    console.log("Arguments: " + greeting + ' ' + message);
    console.log("===================");
}


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
logPassengerName('Be careful, Fox!', 'Do you see any aliens?');     // Passenger: Fox Mulder


// using call()  context is first variable, arguments follow context
seeUfo.call(passenger, 'Hi Fox!', 'Look out for little green men!')  // add arguments after context

