const addTo80 = n => {
    return n + 80;
}

addTo80(5)
addTo80(5)

// Here, we run the function twice with the same paramter. 
// Even though we already know the answer, we will be running the 
// same function to calculate the same value.

// If this operation took a really long time (like fetching data from a 
// dependency), we can improve the program using caching and memoization.

let cache = {}

// A cache just stores data; first we check if something is in the cache, and if not, we 
// get it from the source.

const memoizedAddTo80 = n => {
    if(n in cache) {
        return cache[n]
    } else {
        cache[n] = addTo80(n)
    }
}