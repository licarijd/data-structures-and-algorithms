Elementary Sorts


Bubble Sort, like Insertion Sort and Selection Sort, are Elementary Sorts.
They're very simple sorting algorithms that are easy to think of. Their purpose
is to educate developers, and won't usually be used.


Bubble Sort 

- "bubbles up" larger values

- compare adjacent numbers in a list, starting from the left

- if the left is greater than the right, switch the two items

- if not, continue on


Example:

6   5   3   1   8   7   2   4

Step 1 - Compare and swap 5 and 6:

5   6   3   1   8   7   2   4

Step 2 - compare and swap 6 and 3:

5   3   6   1   8   7   2   4

...


Bubble Sort's average and worst case is O(n^2), so it shouldn't be used 
in production.