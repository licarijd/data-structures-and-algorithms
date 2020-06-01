Because of the way Binary Trees are structured, we have ways of 
calculating the number of nodes that they have.

For example, on Level 0 of a Binary Tree (the first level with the 
Root Node), we can calculate how many nodes there are by doing 2^0.
We calculate the number of nodes by doing 2^(level).

At Level 1 we have 2^1 = 2,

At Level 2 we have 2^2 = 4, and so on...

We can calculate the total number of nodes on the tree with 2^height - 1,
where "height" is the height of the tree (the number of levels).

So for example, a binary tree with two levels has 3 nodes, which is 4-1 = 3.


The Meaning of O(log n)

From the formula 2^height - 1, we know that 