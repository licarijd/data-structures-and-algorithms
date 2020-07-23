Quick Sort


Quick Sort, like Merge Sort, is a Divide and Conquer algorithm.
This means we have O(n log n) time complexity.

Quicksort uses a pivoting technique to divide a list into smaller lists.
And the smaller lists use the pivoting technique until they are sorted.


Example - 3   7   8   5   2   1   9   5   4

Step 1 - Choose a pivot, eg. 4

We now want to compare each item to 4, and put all items less than 4 to 
the left of 4, and all items greater than 4 to the right of 4.

Step 2: Check element 1 (3). 3 is already to the left of 4, so don't 
move it. 

Step 3: Check element 2 (7). 7 is greater than 4, so we move it to the position
that 4 is in. We shift 4 right once to make room for 7, and move the item to the left of
4 (which is 5) to where 7 was:

3   5   8   5   2   1   9   4   7

Step 4: Still on the second element (now 5), we compare to 4. It's greater,
so we move it to the position 4 is in. 4 shifts left, and the element to the left 
of 4 (9) moves to the position 5 was in (position 2):

3   9   8   5   2   1   4   5   7

Step 5: Still on the second element (now 9), we compare to 4. It's greater,
so we move it to the position 4 is in. 4 shifts left, and the element to the left 
of 4 (1) moves to the position 9 was in (position 2):

3   1   8   5   2   4   9   5   7

Step 6: Continue with all elements before the pivot (4), which are 8, 5, and 2:

3   1   2   4   5   8   9   5   7

We now know that 4 (our pivot) is in it's correct position in the array, and 
everything to the left of it is less than it, and everything to the right of it 
is greater than it.

But, everything to the left and right of the pivot still needs to 
be sorted.

Step 7: Repeat steps 1 - 6 for the left and right subsections, which are:

3   1   2

and 

5   8   9   5   7

Once we have all the individual lists sorted, we combine them.


Picking a Pivot 

A pivot can be picked at random.


** It is very unlikely to ever need to code Quicksort, it's 
extremely complex.


Quick Sort is very useful; it's one of the most used algorithms for 
sorting, along with Merge Sort.


Space Complexity

Quick Sort's spaace complexity is very good, O(log n),
which is better than Merge Sort but not as good as the elementary 
sorting algorithms.

It's worst case Time Complexity is O(n^2), and can depend on the pivot
(if the pivot is the smallest or largest item in the list, since we 
wouldn't really be splitting the list in half). Because of this, we want 
to make sure that we pick a good pivot. Ideally, we would want to pick
the pivot intelligently based on our data.


There are different implementations of Quick Sort. It's usually the fastest
algorithm, with the caveat of O(n^2) worst case Time Complexity.

** So if you can't garuntee that the pivot is good, then you shouldn't 
be using Quick Sort!!!