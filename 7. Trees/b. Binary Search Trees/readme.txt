Binary Search Trees


Balanced vs Unbalanced Binary Search Trees 

If we have an extremely unbalanced Binary Search Tree, where one
branch has most of the nodes in the tree, then it hurts our 
lookup time, since traversing the massive branch will be O(n).


                1

        0           2

                        3

                            4

                            ...

                                35

                    
We lose the benefit of O(log n) lookup.

This is a problem with Unbalanced Binary Search Trees; they basically just 
turn into extremely long linked lists.

Although average time complexity for access, search, insertion, and deletion
of BSTs is O(log n), worst case for every operation is O(n).

So ideally, we want to balance our Binary Search Trees.

There are some advanced algorithms to balance search tree.
There are types of tree like AVL Trees and Red Black Trees which allow 
us to make sure that our Binary Search Tree is balanced.

** Companies are unlikely to ask candidates to balance a BST;
it can be very tedious and time consuming. The idea is to be able 
to talk about ways to balance a search tree.


Binary Search Tree Pros 

- better than O(n) performance for access, search, insertion, and deletion.

- ordered, and preserve relationships

- flexible size


Binary Search Tree Cons 

- No O(1) operations (we always have to do some sort of traversal
through the tree to perform operations)

