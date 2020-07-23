Dynamic Programming


Dynamic Programming is an optimization technique using caching. If you have something you can cache, you can use Dynamic Programming.

At a high level, dynamic programming is a way of solving problems by breaking it down into a collection of subproblems, 
solving each of those subproblems just once, and storing their solutions in case next time the same subproblem occurs.


Fibbonacci

When we solve the Fibonacci Problem from ../Recursion/Examples, the tree of 
function calls looks like the following.


                                        fib(7)

                    fib(6)                                    fib(5)
            
            fib(5)            fib(3)                  fib(4)          fib(3)

        fib(3)    fib(2)    fib(2)  fib(1)        fib(3)   fib(2)   fib(2)   fib(1)

    fib(2)  fib(1)                            fib(2)  fib(1)  


We can see how this problem is extremely inneficient - it has runtime complexity of O(2^n),
exponential time. It doesn't have efficient space complexity either - there 
are many repeated function calls (4 repeated calls from fib(1) alone!!).
Most of the problem is repeated tasks.

But, this means that Memoization drastically helps in this scenario.
We can return a memoized version of fib(1), fib(2), and other repeated 
tasks.


Dynamic Programming Summary

Dynamic Programming combines 2 concepts:

1) Divide and Conquer (recursion, like in Fibonacci)

2) Memoization


Here are some steps you can take to tell/take if Dynamic Programming might be beneficial:

1) Can the problem be divided into subproblems?

- is it a treelike structure where a problem can be divided up? 

- if so, it could indicate a recursive solution

2) Recursive Solution 

3) Are there repetetive subproblems?

- if so, they can be momoized

4) Memoize the Subproblems!


Bottom-Up Approach

See /Memoization Examples/Fibbonacci with Bottom-Up Approach

This is another way to solve the Fibonacci problem with Momoization.
The method we've used thus far in /Memoization Examples/Fibbonacci with
Dynamic Programming uses Top-Down Approach. It is very unlikely that an interviewer
will ask you to implement both!


** Popular Dynamic Programming practice questions: https://www.udemy.com/course/master-the-coding-interview-data-structures-algorithms/learn/lecture/12409090#content