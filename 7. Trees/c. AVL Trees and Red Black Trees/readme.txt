AVL Trees and Red Black Trees 


Usually in production, you want to have a balanced Binary Search Tree.

AVL and Red Black Trees are two popular trees when it comes to this.

Although we built our own Binary Search Tree, you'd most likely use something
like an AVL Tree or Red Black Tree in production, since these trees 
automatically balance themselves.

This prevents cases where the tree turns into a linear, unbalanced tree.

AVL and Red Black Trees are very complex - most of the time, you're using 
some kind of library to implement them.


AVL Tree Example

Say we want to insert the number 80 into the following tree:

                            15

                6                   50

        4               7   23              71

            5                                       77

First, it'd insert 80 just as in a normal BST:

                            15

                6                   50

        4               7   23              71

            5                                       77

                                                            80

Then, since the tree is inbalanced, it would back track from 80,
and re-balance the tree:

                            15

                6                   50

        4               7   23              77

            5                        71               77


Red Black Trees Example

Say we add 9:

        9 (Black)

Add 10:

        9 (Black)

            10 (Red)

Add 11:

        9 (Black)

            10 (Red)

                11 (Red)

Since it's not balanced, we'd do a 'single rotate left',
and the result would be:

        10 (Black)

9 (Red)          11 (Red)

The colours are something that's used to keep track of when we need to 
rebalance.


In interviews, you want have to implement these, just talk about them
and why they're usedful.


AVL Trees Resources

Animation: https://www.cs.usfca.edu/~galles/visualization/AVLtree.html

How It Works: https://medium.com/basecs/the-little-avl-tree-that-could-86a3cae410c7


Red Black Trees Resources 

Animation: https://www.cs.usfca.edu/~galles/visualization/RedBlack.html

How It Works: https://medium.com/basecs/painting-nodes-black-with-red-black-trees-60eacb2be9a5


** B- Trees are also self-balancing. Read about them more in the "Extras - B- Trees,
B+ Trees, and Indexing" section!