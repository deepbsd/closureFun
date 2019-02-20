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


let logName = function(language1, language2){
    console.log('Passenger: ' + this.getFullName());
}


let logPassengerName = logName.bind(passenger);

// if we just try to run logName(), I'll get a TypeError because
// getFullName() will not be part of the parent execution context.
// The "this" context will not include getFullName().
//logName();  // TypeError


// On line 19, we bind the execution context of the passenger object
// to the logName function.  logPassengerName now has that context
// built-in and will execute without error.  getFullName() will be
// available under this new context
logPassengerName();
