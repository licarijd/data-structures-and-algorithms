// Recursive functions have a base case, and a recursive call.

let counter = 0;

const inception = () => {
    if (counter > 3) {
        return "done!"
    }
    counter++
    return inception()
}

// Without "return", the inception() call which gets added to the call stack 
// each time will not return anything. When the counter reaches 4 and we start popping the inception()
// calls off the call stack, it will return a bunch of "undefined". So, we need to
// make sure we return inception(), so the value of "done" gets bubbled up the calls.
// See https://www.udemy.com/course/master-the-coding-interview-data-structures-algorithms/learn/lecture/12394014#overview 8:00

// So in recursion, the function gets closer and closer to the base case, and
// when it reaches the base case, it starts popping function calls off the call stack.

// The top of the call stack is the call that actually returns the value, and then 
// each call on the stack returns what the previously popped call returns.

// So in this case, the "done" gets popped off the call stack first, and then gets bubbled up 
// as all calls on the call stack are popped.