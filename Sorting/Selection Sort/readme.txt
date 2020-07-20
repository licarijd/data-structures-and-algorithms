Selection Sort


Selection Sort is another elementary sorting algorithm.

The algorithm works by scanning a list of items for the smallest 
element, and swapping that element with the first item.

There are 2 markers in the array - one at the current smallest position,
and 1 that is responsible for scanning ahead for the smallest item.


Example:    >8   >5   2   6   9   3   1   4   0   7

- 8 starts as the smallest item since it's at index 0 (marker 1 at 8)

- marker 2 scans ahead to 5

- 5 is the new smallest item (smaller than 8); marker 1 moves to 5 

Step 1:     8   >5   >2   6   9   3   1   4   0   7 

- marker 2 scans ahead to 2

- 2 is the new smallest item (smaller than 5); marker 1 moves to 2

Step 2:     5   8   >2   >6   9   3   1   4   0   7 

- 6 (marker 2) isn't smaller than 2

- 9 (marker 2) isn't smaller than 2

- neither is 9 or 3

- 1 is smaller than 3; marker 1 moves to 1

Step 3:     5   8   2   6   9   3   >1   >4   0   7 

- 4 isn't smaller than 1

- 0 is smaller than 1; marker 1 moves to 0

Step 4:     5   8   2   6   9   3   1   4   >0   >7 

- 7 isn't smaller than 0

- we're now at the end of the list

- marker 1, which signifies the smallest number, is on 0,
so we move 0 to the front of the list


Next, the algorithm starts at index 1, and repeats for every index of the list
( very inefficient O(n^2) algorithm)