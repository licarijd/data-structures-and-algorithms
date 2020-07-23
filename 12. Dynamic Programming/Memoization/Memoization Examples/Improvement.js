// Ideally, from Example.js, we don't want to fill the cache in the global scope.
// It's good practice to fill the cache inside the function it's being used
// in.


const memoizedAddTo80 = () => {

    let cache = {}

    // The above object will be re-initializaed to empty each time a normal function is
    // run, but in JavaScript we can get around this using closures.

    return n => {
        if (n in cache) {
            return cache[n]
        } else {
    
            cache[n] = n + 80
            return cache[n]
        }
    }
}

// Notice that we removed the "n" parameter. What this means is that
// by calling

const memoized = memoizedAddTo80()

// we would get the inner function returned to us to use (this is like currying
// in Haskell).

// And we can call:
console.log(memoized(5))
console.log(memoized(6))
console.log(memoized(5))

// memoizedAddTo80() was only called once to create the variable 'memoized', 
// so the cache is preserved each time we call memoized()