// The Fibonacci problem from ../../Recursion/Examples/Fibonacci.js
// is one of the best examples of why Dynamic Programming
// and Memoization is so important.

// Dynamic Programming = Caching. Optimizing using a cache.

// The recursive Fibonacci in the file above isn't very efficient -
// it has O(2^n) runtime - exponential. As well as having bad time complexity,
// every nested function call gets added to the call stack, which increases 
// memory complexity as well. 

// We can use Dynamic Programming for this problem, because 
// the solution to each subproblem is "optimal" - we do a lot of
// problems repeatedly which are the same.
// Time and space complexity both improve by using memoization.

// This solution improves time complexity to O(n).


let calculations = 0

// Old, slow solution - 2^n time complexity
const fibonacci = n => {

    calculations++

    if (n < 2) {

        return n
    }

    return fibonacci(n - 1) + fibonacci(n - 2)
}

// FibonacciMaster vastly ourperforms the regular recursive solution above
const fibonacciMaster = () => {

    let cache = {}

    // We want to make sure we don't reset the cache every time we
    // run this function. So we return another function using
    // closures. 
    return function fib(n) {

        if (n in cache) {

            return cache[n]

        } else {

            if (n < 2) {

                return n

            } else {

                cache[n] = fib(n - 1) + fib(n - 2)

                return cache[n]
            }
        }
    }
}


// Create the cache variable
const fasterFib = fibonacciMaster()

console.log('Dynamic Programming ', fasterFib(10))


// Moral of the story - if there are any repeated function
// calls, memoize the result (store it in a cache and check
// the cache before running the function again)!

// The one downside of the Memoization approach is that we 
// increased space complexity. In the old example with plain recursion,
// functions get added to the call stack, but we do at least pop them off 
// the stack. In the case of Memoization, the cache persists in memory.

// In this case, the time complexity improvement makes the space complexity
// increase worth it.

