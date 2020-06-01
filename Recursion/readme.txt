Recursion


Algorithms

Algorithms are just functions that programmers write. Algorithms are steps in a process
we take to perform a desired action with computers.

Algorithms allow us to use data types and structures to perform actions on data.


Recursion

- less of an algorithm

- more of a concept

When you're searching for all files of a particular type on your computer (eg. all mp3 files),
you can't just search one folder. You have to look at all folders recursivley to find all your music.

For example, in Unix, the "ls" command lists all files in a particular folder.
So, using "ls" may yield the following:

Dockerfile  controllers/    package.json

As we can see, some of the results are files, and one is a folder called "controllers".
"controllers" is a folder, and we may want to also list the files in "controllers".
To do this, we can use the follwing command:

ls -R

The "R" stands for "Recursive" - we recursivley search the subfolders until there are no 
subfolders left.

Recursion is when you define something in terms of itself. A function that refers to itself inside the function.

DOM traversal is done recursivley.

In JavaScript, when we have nested objects, we use recursion.


Problem: Stack Overlfow

Stack Overflow occurs when a function keeps getting called, too many times.

The call stack "overflows" (runs out of memory).

** Side note - The "debugger" keyword in Chrome halts execution when it gets to the keyword.
It'll then let you use tools to control the function.

When improperly used, recursion could lead to Stack Overflow.

A downside of recursion is that each call takes up memory, and this could
get expensive.

We must have a base case in recursive functions to prevent these problems.


Recursive vs. Iterative

There is a theory that anything that can be done recursivley can also be done iteratively.

Most recursive problems can be solved iterately as well, but in some cases, 
recursion will lead to more readable code.


Recursion Pros

- keeps code readable

- prevents repeated code 

- good for cases where you don't know how many iterations you'll need; like objects 
with unknown depth

Recorsion Cons

- larger memory footprint, since every time we add a function call to the call 
stack, it adds extra memory 

- iterative approaches tend to be more efficient because they don't make these function 
calls with each iteration which take up stack space


Tail Call Optimization

- a feature in many languages which allows recursions to be called without 
increasing the call stack

- so, the issue of the large call stack can actually be solved in production


When to use Recursion 

When it comes to complicated problems, like searching through trees or graphs
(eg. DFS and BFS), recursion is really useful. 

Every time you are using a tree or converting something into a tree, consider recursion.

Recursion may be ideal when:

1) We divide into a number of subproblems that are smaller instances of the same problem

2) Each instance of the subproblem is identical in nature

3) The solutions of each subproblem can be combined to solve the problem at hand

There's a lot of divide and conquer used in recursion. Things like tree traversal
is much simpler with recursion.









