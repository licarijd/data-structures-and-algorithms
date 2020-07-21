Binary Search


Searching can be improved if the array is sorted.

We can check the middle item, and check if it's less than 
or greater than the target value. 

If it's greater, we only consider the items to the right, and 
divide the right sub-array in half, and repeat.


Example - Find 34 in    1   4   6   9   12  34  45

Step 1: Check the middle element (9). 34 > 9, so now consider:

12  34  45

And repeat the process of checking the middle element.


If the array is sorted, we can search faster than O(n). This is similar to 
how we can find things faster in a Binary Search Tree, where the left items 
are less than the parent, and the right items are greater. With Binary Search, 
we are essentially searching a BST.


Example - searching for 12 in 1, 4, 6, 9, 12, 34, 45

                9 (check 1)

        4               34 (check 2)

    1       6       12 (check 3)   45
    

Unlike Linear Search, we can discard half the items, instead of one at a time.

** Storing data in a tree is also more efficient than in an array.
As we insert items, if we sort them, it actually gives us better performance than 
adding it to an unsorted list that we have to search through. And because in 
a tree, we make a decision about going left or right, and discard half the items 
every step, we have a Divide and Conquer approach, which gives us O(log n) time.


