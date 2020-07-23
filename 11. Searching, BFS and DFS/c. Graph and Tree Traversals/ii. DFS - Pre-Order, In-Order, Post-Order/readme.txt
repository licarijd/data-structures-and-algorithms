Depth First Search


        101

    33      105


There are 3 different ways to Depth-First Search:

1) Pre-Order - 101, 33, 105


2) In-Order - 33, 101, 105


3) Post-Order - 33, 105, 101


So unlike BFS, DFS can return 3 different orderings.


In-Order 

In a BST, it literally gives everything in order.

Example:


            9

    4               20

1       6        15     170   


In-order: 1, 4, 6, 9, 15, 20, 170

Obviously, this is useful if you want to get all nodes in order.


Pre-Order 

Pre-Order starts at the parent node, then goes down the left branch, then 
the right branch.

Example:


            9

    4               20

1       6        15     170   


Pre-Order: 9, 4, 1, 6, 20, 15, 170

Basically, it goes all the way down the left branch, then the right 
branch.

This is very useful if we want to recreate a tree, since we start with 
the root node, and then have each of the left children in a row;
this is followed by each right branch.


Post-Order

In Post-Order, we visit the children first (the left child, then the 
right child), before the parent; then, we go up a level

Example:


            9

    4               20

1       6        15     170   


Pre-Order: 1, 6, 4, 15, 170, 20, 9