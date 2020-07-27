How JavaScript Works


What is a Program

A program needs to allocate memory.

A program needs to parse and execute scripts (read and run commands).

Every browser has a JavaScript engine (Chrome uses V8). The engine compiles JavaScript 
code into machine-executable instructions for the browser.


The JavaScript engine consists of two parts:


1) Memory Heap

- where memory allocation happens

- allocating memory in the memory heap happens every time we declare a variable

- there's a limited amount of memory; unused memory that doesn't get cleaned up leads 
to memory leaks

- memory leaks can be caused by global variables; if we don't remember to clean up after
ourselves, it can fill up the memory heap


2) Call Stack

- where code is read and executed

- tells you where you are in the program


Call Stack Example

If we have nested functions:

const one = () => {
    const two = () => {
        console.log(4)
    }
    two()
}

And we run the outer function "one()", one is pushed onto the call stack,
then "two()" is pushed to the call stack since it was called by "one".
Then, the "console.log()" statement is pushed to the call stack, since it's
called by two();

The call stack looks like this:

console.log(4)
two()
one()

First, we run the console.log(4), and pop it off the stack.
Then, we pop the two() off the stack.
Lastly, we pop the one() off the stack.


** JavaScript is a Single-Threaded Language that can be Non-Blocking **

Single-Threaded means that JavaScript has only one call stack (it can only do one
thing at a time). Multi-Threaded languages have multiple call stacks!!

Running code on a single thread can be easy, since we don't have to deal with complicated
scenarios that arise in a multi-threaded environment. An example of an issue that can come 
up in multi-threaded languages are deadlocks. That is why JavaScript was designed to 
be single threaded. It only executes one things at a time.

Synchronous programming means things get executed in sequence, one 
by one.


** Stack Overlfow

- occurs when a call stack grows too large, and overlfows (runs out of space)

- this is common in infinite loops/recursion, eg.

const foo = () => {
    foo()
}


Asynchronous Programming (JavaScript)

JavaScript is single-threaded - but what if one task takes a very long time to run?
It wouldn't be great if a website froze until the task completes. The solution is 
asynchronous programming. When we do things that take a long time like image processing,
or making requests over the network like API calls, we do things asynchronously.
Asynchronous programming can be achieved in JavaScript using "setTimeout",
which comes with our browsers. The first parameter of setTimeout is a function,
and the next is the number of milleseconds we want to wait before we run the 
function.


Asynchronous Programming Example - The Call Stack, Web API, Callback Queue, Event Loop

Say the operation "console.log(2)" takes a very long time to run. We could run it 
asynchronously in this call stack using setTimeout:

console.log(1)
setTimeout(() => {
    console.log(2)
}, 2000)
console.log(3)

To understand this, we'll have to explain a few more things!


In order for JavaScript to run, we need more than just the JavaScript engine.
We need a JavaScript Runtime Environment (included in browsers).

The JavaScript runtime environment has Web APIs, a Callback Queue, and an Event Loop.


Web APIs:

DOM (document)

AJAX (XMLHttpRequest)

Timeout (setTimeout) ** note that setTimeout isn't JavaScript, it's a Web API feature which browsers implement


Callback Queue:     --->    Event Loop

onClick

onLoad

onDone


Back to the call stack example:

console.log(1)
setTimeout(() => {
    console.log(2)
}, 2000)
console.log(3)

First, console.log(1) gets pushed to the call stack, and runs in the browser.

Then, the setTimeout gets pushed to the call stack.

Since it's not JavaScript, it triggers the web API. It gets popped out of the call stack,
and the Web API sets a 2 second timer (it knows that in 2 seconds, it needs to do something).
After the 2 seconds, the Web API checks the function in the setTimeout that needs to be run 
(console.log(2) in this case).

So, setTimeout is popped from the call stack, and the callback function
(a callback is a function that is to be executed after another function has finished executing) which
in this case is:

() => {
    console.log(2)
}

is added to the Callback Queue (essentially says that we're ready to run something that needs to be run).

The Event Loop constantly checks that the call stack is empty. If it is, then it checks the Callback Queue to see 
if anything needs to be done. 

In our case, we have an empty Call Stack, and:

() => {
    console.log(2)
}

in our Callback Queue. So, we move the operation from the Callback Queue to the Call Stack.

So essentially, if no work needs to be done from the Call Stack, we start working on tasks from the 
Callback Queue.

console.log(2) is run, and it's popped out of the Call Stack. During the 2 second wait, the console.log(3)
was run from the Call Stack. So the result is:

1
3
2

So interestingly, using a setTimeout of 0 seconds yields the same result, since the callback first gets delegated to 
the Web API and pushed to the Callback Queue, then Event Loop, and finally the Call Stack. By the time that all happens,
console.log(3) has already run. Also, the Event Loop only runs and adds the result from the Web API 
to the Call Stack once the Call Stack is empty. So, we have to work through everything on the Call Stack 
first.


So essentially, asynchronous programming in JavaScript involves delegating operations to a Web API, which
adds the operations to a Callback Queue. In the meantime, operations in the Call Stack continues to run.
Then, when the Call Stack is empty, the stuff from the Callback Queue gets added to the Call Stack so that 
it can run. This is why JavaScript can be non-blocking.


When we create an event listener, we essentially use the Event Loop to listen for events, and when they 
occur, we run the callback. Example:

element.addEventListener('click', () => {
    console.log('click')
})


