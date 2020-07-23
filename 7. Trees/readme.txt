Trees


Trees are heirarchical data structures. 

Unlike linked lists or arrays, which are linear, trees can have 
zero or more child nodes.

A tree usually starts with a single Root Node (Parent Node), and 
every child of the tree descends from this Root Node.

Each child has only one parent. So, there is a parent-child relationship
that is unidirectional (goes one way, from root down).

Leaf nodes are at the end of a tree data structure.

Within trees, we can have a subtree.

                    1 
                /       \
               2         3
              / \       / \
             4   5     6   7

1 is the Root Node

4, 5, 6, 7 are Leaf Nodes 

2, 4, 5 is a Subtree

3, 6, 7 is a Subtree 


Uses of Trees 

The DOM on for web pages is a tree of HTML elements.

<head> and <body> are children of the Root Node <html>

Facebook comments are trees as well - we can comment, and reply
to comments.

ASTs (Abstract Syntax Trees) are used by compilers to organize the 
keywords which make up programs.

Linked Lists are a kind of tree which are linear.


Binary Trees

Each node can have either 0, 1, or 2 children.

Each child can only have one parent.


A Perfect Binary Tree has no gaps in it - each parent has 2 children,
and each Leaf Node has no children. There are no nodes which only have
one child. And, the depth of all leaves are the same:

                    1 
                /       \
               2         3
              / \       / \
             4   5     6   7


A Full Binary Tree is similar - nodes have 0 or 2 cildren (never one child),
but the depth of leaves can vary:

                    1 
                /       \
               2         3
              / \       
             4   5       


Perfect Binary Trees are very efficient, and therefore desirable.
They also have some properties we can always rely on:

- the number of nodes on each level doubles as we move down the tree

- the number of nodes on the last level is equal to the sum of the number
of nodes on all other levels + 1

So if we organize our data in this way, we have about half of the data in the
bottom level. If we could somehow avoid visiting every node, there are some 
efficiencies that we have.


O(log n) Time Complexity

These efficiencies are why certain binary tree operations have O(log n)
time complexity. In a perfect binary tree, the number of nodes on the
last level is equal to the sum of the number of nodes on all other levels + 1.
The efficiencies gained from not visiting every node is why we have 
O(log n).


Binary Tree Operations 

lookup - O(log n)

insert - O(log n)

delete - O(log n)
