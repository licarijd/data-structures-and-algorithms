Big-O

In official terms, Big-O asymptomatic analysis.

Big-O is a measure of Time Complexity.

Good Code is:

- Readable

- Scalable (relelvent to Big-O)


** Note about measuring performance in JavaScript 

'performance' object is built, and available in browser windows. 

It has useful functions like 'now()' which can be used as a timer.


We use Big-O to measure performance relative to the size of the data being used for 
an algorithm. This makes more sense than using units of time, since there are factors like
hardware, programming languages, computer tasks, etc which will affect the result.
The runtime would be different every time.

It's a measure of operations a computer has to perform.

So in a sense, 'O' stands for operations. We express the number of operations of 
an algorithm.// When we talk about big-O, we only care about the largest term.


In General:

- Constant Time O(1) is excellent

- O(log n) is good

- Linear Time O(n) is fair

- O(n log n) is bad

- Quadratic Time O(n^2) and Over is horrible


Rules of calculating Big-O:


Worst Case:

- always think about the worst case (eg. don't assume a break will happen
before a loop reaches the end of an array)

- Big O always expresses the worst case 


Remove Constants:

- For runtimes with terms that have n values, 
eg. O(n^3 + 1/2n + 1000), discard the constants (1000 in this case)


Different Terms for Inputs:

- if there are 2 sets of data, eg. 2 arrays, then we must have different terms for them
(see Example 4)

- we can't just drop one of the inputs

- rather, there is a term for each input, eg. O(n + m) for 2 inputs


Drop Non-Dominant Terms:

- Smaller terms become less relevent as input grows

- For example, for O(n^3 + 5n + 100), the 3^n is the only term which will
have a significant impact on runtime as n grows 

- So, we would discard 5n and 100

- The runtime will be O(n^3)


** Iterating through half a collection is still O(n)

** Two seperate collections in order: O(n + m)

** Two seperate nested collections in order: O(n + m) - this is expressed as O(n^2)
if both loops are based on the same collection 

** The number of inputs determines the term.

Example - 5 nested loops based on the same input is O(n^5)

Example - 5 nested loops based on different inputs is O(a * b * c * d * e)

** '+' is for steps in order 

** '*' is for nested steps


Big-O is a measure of time complexity. Things that cause time in a function are:

- Operations (+, -, *, /)

- Comparisons (<, >, ==)

- Looping (for, while)

- Outside function call, eg, func()


Big-O Summary

O(1) Constant - No loops 

O(n) Linear - for loops and while loops 

O(n^2) Quadratic - every element in a collection needs to be compared to every other
element. Two nested loops.

O(n!) - a loop is added for each element




