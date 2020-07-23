Merge Sort and O(n log n)


Bubble Sort, Selection Sort, and Insertion Sort are all 
elementary sorts. They have O(n^2) worst case, most of the time.

Unlike the other sort algorithms discussed up until this point, 
Merge Sort and Quick Sort use Divide and Conquer, and recursion.

They combine the problem into subsets, and combine the solutions.

** Any time we see Divide and Conquer, it usually gives us a log n 
advantage. 


Merge Sort Example - 6   5   3   1   8   7   2   4

Step 1 - Divide the list in half

6   5   3   1        8   7   2   4

Step 2 - Divide each subset in half

6   5       3   1        8   7      2   4

Step 3 - Divide those subsets in half (keep dividing subsets in half until we
have just one item per subset)

6       5       3       1        8      7      2       4

Step 4 - Once we have everything divided up into subsets of length 1, 
we take the first and second subset (6 and 5), and compare them.
We then create a new subset, where 5 and 6 is in order:

5    6

Step 5 - Compare 3 and one, and create a new subset where they're 
in order:

1   3

Step 6 - Do the same for 8 and 7:

7   8

Step 7 - Do the same for 2 and 4:

2   4

** Now, we have 4 subsets (branches), and 8 leaf nodes. We're building 
a reverse tree, in a sense!

Step 8 - Check the first element of branch(5, 6), and branch(1, 3).
1 comes first.

1   

Step 8 - Compare the second element of branch(6, 3), which is 3,
with 5. 3 is less, so place it before 5:

1   3

Step 9 - 5 and 6 are already sorted, so their order doesn't change:

1   3   5   6

Step 10 - Repeat the process for branch(7, 8) and branch(2, 4). Compare 
2 and 7. 2 is less:

2

Step 11 - Compare 7 and 4; 4 is less:

2   4

Step 12 - 7 and 8 are already sorted, so we can just move them in:

2   4   7   8

Step 13 - We now have:

1   3   5   6   

and 

2   4   7   8

We compare the first element of each subset (1 and 2). One 
is less:

1

Step 14 - Compare the second element the first subset (3)
with 2. 2 is less:

1   2

Step 15 - Compare the second element of the first subset (3)
with the second element of the second subset (4). 3 is less:

1   2   3

Step 16 - Same for 4 and 5:

1   2   3   4

And repeat until all elements have been compared.


Merge Sort is one of the most efficient ways you can sort a list.
It usually outperforms most other sorting algorithms.


O(n log n)

We have O(n) since we still have to compare everything in the list.

Once we divide the list in half (O(1) operation), and then we 
check each item, with is O(n).

But after that, we don't compare everything to everything; all we have to 
do is compare each local list to each other.


Stability

Merge Sort is also helpful because it's stable. It means that if you have 
equivalent elements, it will keep the original order in the array.
You can read more about stable sorting algorithms and why they're 
important, here: https://stackoverflow.com/questions/1517793/what-is-stability-in-sorting-algorithms-and-why-is-it-important


Space Complexity Tradeoff

Due to having to hold onto extra sub-lists, Merge Sort has space complexity 
of O(n), which is worse than Bubble Sort, Selection Sort, and Insertion Sort.


** In an interview, you likely won't be asked to implement Merge Sort, as it's 
complex. Just how it's implemented.

