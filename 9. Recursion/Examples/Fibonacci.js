// Given a number N, return the index value of the Fibonacci
// sequence, where the sequence is:

// 0, 1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89, 144, ...

// The pattern of the sequence is that each value is the sum of the
// previous 2 values. So for N = 8, we get 21

// See https://www.udemy.com/course/master-the-coding-interview-data-structures-algorithms/learn/lecture/12394682#content
// 3:45 for a visual representation of the call tree for the recursive solution!


// Big-O: O(2^n)
// The size of the tree exponentially grows with n (see the link above)
const fibonacciRecursive = n => {

    if (n < 2) {

        return n

    }

    return fibonacciRecursive(n - 1) + fibonacciRecursive(n - 2)
}

// Big-O: O(n)
const fibonacciIterative = n => {

    let arr = [0, 1]

    for (let i = 2; i < n; i++) {

        arr.push(arr[i - 2] + arr[i - 1])
    }

    return arr[n]
}


console.log(fibonacciRecursive(8))

console.log(fibonacciIterative(8))


// Exponential Time O(2^n)

// - can be seen in recursive algorithms that solve a problem of size n

// - it's extremely slow, the recursive solution shouldn't be used

// - solutions like the recursive fibonnaci can be improved to O(n) using
// Dynamic Programming and Memoization (see Dynamic Programming/
// Memoization Examples/Fibonacci with Dynamic Programming)