# Closure Fun
Closures are complicated subject in JS.  By no means am I an expert.  But I keep trying
to learn more.

I came across this today in my studies:

```
function buildFunctions(){
    var arr = [];

    for (var i=0; i<3; i++){
        arr.push(function(){
            return i;
        });
    }
    return arr;
}
```

If you then go
```
var fs = buildFunctions();

fs[0]();
fs[1]();
fs[2]();
```
What values do you get?

The answer is surprising:  
```
3
3
3
```
Why is that?  Because the `return i;` doesn't get executed until there's a new
execution context for it to execute in.  At the time when `i` equaled `0` or `1` or
`2`, the return statement was not being executed.  When the enclosed function that was
pushed onto the arr array *does* get executed, `i` equals the last value it had when
the for loop terminated, which was `3`.

So part of the problem here is that we're using `var` in the for loop.  `Var` sends us
too far up the scope chain to find the value of `i`.  We want to know what `i` equals
in the nearest scope.  So if we modify our for loop:
```
for (let i=0; i<3; i++){}
``` 
then we'll get the expected answers:
```
0
1
2
```
However, since we're discussing closures, not the difference between ES5 and ES6
scoping variables, how could we handle this with closures?

```
function newBuildFunctions(){
    var arr = [];

    for (var i=0; i<3; i++){
        arr.push(
            (function(j){
                return function(){
                    return j;
                };
             }(i));
        )
    }
    return arr;
}
```

This looks like a mind blower, and God help the person who ever had to debug this, but
we're wanting to preserve the execution context for each function call.  ES6 with `let`
or `const` would be the easiest way, but then we wouldn't learn about how the JS
engine is working here.

inside the `push` statement, we firing an Immediately Invoked Function Expression (IIFE)
which captures the value of `i` at the time of the push statement.  In order to do
that, we have to create a new execution context for the function that is getting pushed
onto the array.  

At the time the function is pushed, we're passing a parameter to the function as the 
`j` parameter.  We actually fire the IIFE at the time the function is being pushed onto 
the arr.  We're passing the `i` variable as an argument to the IFFE, which is what 
becomes the `j` variable.  The enclosing IIFE provides the parent execution context
for the function that gets pushed onto the array and the `j` parameter's value gets
preserved because the IIFE was called with `i` as an argument, and `i` was the value
it had in the for loop at that instant the function was pushed onto the array.

# What's the Takeaway?

I think there is more than one.  

First, don't go any further up the scope chain than
you need to.  Get into the habit of using `let` and `const`.  But you need to
understand how closures work.  So that gets us to,

Second, a closure will fire its enclosed function at a time and in an execution context
that is different from when the function was originally enclosed.  Unless told
otherwise.  You need to plan for that. Also,

Third, closures are possible because JS remembers the references a function had even
after the enclosed function's execution context goes away.  So if FuncA() encloses
FuncB() and FuncB() has a reference to variable C, there will still be a reference to
FuncB() even after the execution context of FuncA() goes away.  The value of C will be
whatever C was equal to when the execution context of FuncA() went away.  In the
original example, C would have been the value of `i` when the for loop terminated,
which was 3.


