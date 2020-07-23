Because of the way Binary Trees are structured, we have ways of 
calculating the number of nodes that they have.

For example, on Level 0 of a Binary Tree (the first level with the 
Root Node), we can calculate how many nodes there are by doing 2^0.
We calculate the number of nodes by doing 2^(level).

At Level 0 we have 2^0 = 1 Node (the root Node),

At Level 1 we have 2^1 = 2,

At Level 2 we have 2^2 = 4, and so on...

We can calculate the total number of nodes on the tree with 2^height - 1,
where "height" is the height of the tree (the number of levels).

So for example, a binary tree with two levels has 3 nodes, which is 2^2 - 1 = 3.


The Meaning of O(log n)

We know that at level 3 for example, we have 8 nodes to check if we traverse
the tree. So from this, we can derive the formula:

2^height - 1,

for the total number of nodes in a tree, where the height starts from 1.

An if we simplify this formula, we can say that the log of the number of nodes 
is the height:

log nodes = height 

or

log nodes = steps

Note that we've dropped the '- 1' since it's insignificant.


** log is like the opposite operation of an exponent with base 10. 
log 100 = 2 because 10^2 = 100


log n basically means that based on the height, the maximum number of
decisions we're going to take if we access, search, insert/delete from 
the tree (eg. to look for a node) is log n.


Binary Search Trees 

A BST is a binary tree in which:

1) All child nodes in the tree to the right of the current Node must be 
greater than the current Node (and all child nodes in the tree to the left 
of the current Node must be less than the current Node).

2) A node can only have up to 2 children.

This gives us a big performance boost when we're searching (from O(n) to O(log n)),
because we don't need to check each element of a tree.
We can simply ask ourselves if the value we're looking for
is less than or equal to the current node. If the value we're looking for is greater,
we go right. If the value we're looking for is less, we go left.

So in a binary tree of height 3, we'll only have to do 3 checks to see
if a value is in a tree!

This is an example of divide and conquer; rather than search everything,
we divide each side of the tree into less than and greater than the root node.

Example - Search for the Number 7

                        1 (check 1, 7 is greater than 1 so go right)

            2                       3 (check 2, 7 is greater than 3 so go right)

    4               5       5               7 (check 3, found!)


Binary Search Trees have an advantage over hash tables in that they preserve
relationships. For example, folders in a computer have parent folders and subfolders,
and BSTs allow us to preserve these relationships.

