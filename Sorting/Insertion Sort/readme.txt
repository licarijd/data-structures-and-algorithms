Insertion Sort


Bubble Sort and Selection Sort aren't very efficient, and aren't
used very much in practice.

Insertion Sort isn't the most efficient algorithm either. But, there
are cases where it's extremely fast.

Insertion Sort is really for times when you're sure that the list 
is almost sorted (or already sorted).

In a best case scenario, you could get O(n) time complexity.


Example

6   5   3   1   8   7   2   4

Step 1: Look at the first item (6), and leave it where it is

Step 2: Look at the next item (5); it's less than 6, so switch them

5   6   3   1   8   7   2   4

Step 3: Look at the next item (3); it's less than both 5 and 6,
so move it to the left of 5 and 6

3   5   6   1   8   7   2   4

Step 4: Do the same for 1

1   3   5   6   8   7   2   4

Step 5: Check 8, move on to the next

Step 6: Check the next item (7). It goes between 6 and 8:

1   3   5   6   7   8   2   4

Step 7: Check the next item (2), and move it to it's correct place:

1   2   3   5   6   7   8   4

Step 8: Check the next item (4), and move it to it's correct place:

1   2   3   4   5   6   7   8   


This kind of sorting performs very well with small data sets.
With small data sets, or data sets that are nearly sorted, use 
Insertion Sort!