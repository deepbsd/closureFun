// More on closures and execution contexts...

// Mind you 3000 milliseconds is like three years to a computer...
// sayHiWhen() is long gone by the time the setTimeout anonymous child
// function gets executed...

function sayHiWhen(){
    // start exists in the parent execution context only
    let start = new Date();
    console.log("starting...");

    let wait = 3000;

    setTimeout(function(){
       // start is long gone, but the ref to its memory location persists
       // so this anonymous child function still has access to the "start" variable...
       let end = new Date();
       console.log("Start seconds: ", start.getSeconds(), " End seconds: ", end.getSeconds());
    },wait)
}


sayHiWhen();
