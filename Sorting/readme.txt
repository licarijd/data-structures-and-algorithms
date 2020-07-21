Sorting


Sorting (like time complexity) is trivial with small inputs. In these
cases, we can just do something like arr.sort() in Javacript.

The problem is when inputs get very large.

When large companies need to sort abstract data like webpages, shows, episodes etc,
they may need custom sort methods based on the data. Sorting/pre-processing data makes it meaningful.


The Issue with sort()

In Javascript, if we sort [3, 4, 21, 113], the result is [113, 21, 3, 4] because
JavaScript only effectivelysorts based on the first digit.
This is because numbers are converted to strings first, and then the char code of
each character is calculated and used for comparison. This also causes issues with 
characters with accents - they have a different character code than the same letter without
an accent, for example.
This may not be expected; it's important to understand how sorting algorithms work under the hood.

The time and space complexity of the sort function in JavaScript cannot be garunteed
as it is implementation dependent (it depends on the browser). 


When to Use Different Sort Algorithms 


Insertion Sort 

- fast when there are a small number of items, or the data is already mostly sorted

- it uses very little space

- easy to implement


Merge Sort 

- uses divide and conquer

- fast O(n log n) time complexity in the worst case, so it should be used
if you're worried about worst case scenarios

- a downside is that it has O(n) space complexity (it is expensive memory-wise),
so it's not ideal for in-memory sorting 

- it is ideal for sorting outside of memory (eg. a process outside about memory)


Quicksort

- Best and average complexity of O(n log n) which is the same as merge sort 

- it has a better space complexity than merge sort as well, of O(n log n)

- very popular

- the one downside is that the owrst case is O(n^2), so if a pivot is chosen poorly, 
the result could be a very slow time complexity


Heapsort 

- O(n log n) best, average, and worst case time complexity 

- sorts in place with O(1) space complexity 

- not as fast as quicksort


Most of the time, we use Quicksort or Mergesort; Mergesort when we're worried 
about worst case time complexity, and not worried about memory (space complexity).

Use Quicksort when average case performance matters more than worst case performance.

Insertion sort is good for small or nearly sorted input.


Details on the sorting algorithms and their time/space complexities can be found
here: https://www.bigocheatsheet.com/


Can we beat Quick Sort and Merge Sort's O(n log n) Time Complexity?

Mathematically, it is impossible to beat a Time Complexity of 
O(n log n) for sorting (Quick Sort and Merge Sort achieve this time).

This is because all of the sorting algorithms we discussed are 
Comparison Sorts - they need to compare numbers to each other.

But there is one exception to this rule - we can improve this, if we 
don't make comparisons. There is a small number of inputs where we can 
beat O(n log n). These are called Non-Comparison Sorts.


Non-Comparison Sorts

1) Counting Sort 

2) Radix Sort

These are entirely different ways of sorting, which don't compare 
numbers. Instead, these sorts take advantage of the fact that numbers 
are stored in memory in the form of zeros and ones.

This can get very complex. These kinds of sorting algorithms only work 
with integer numbers in a restricted range, eg. 0 to 100. It 
wouldn't work on other types of data.

Merge Sort and Quick Sort are universal.

Refer to: https://www.bigocheatsheet.com/

We can see that the average case of Bucket Sort (O(n+k)), Radix Sort (O(nk)), and 
Counting Sort (O(n+k)) are all better than O(n log n).

'k' is beyond the scope of the study of basic algorithms; some would argue 
that 'nk' and 'n+k' is still pretty slow.

Radix Sort: https://brilliant.org/wiki/radix-sort/

Radix Sort Animation: https://www.cs.usfca.edu/~galles/visualization/RadixSort.html

Counting Sort: https://brilliant.org/wiki/counting-sort/

Counting Sort Animation: https://www.cs.usfca.edu/~galles/visualization/CountingSort.html


** The built in sort() method in most languages is a combination of Quick Sort,
Merge Sort, and Insertion Sort combined.

** In JavaScript, EcmaScript doesn't specify which sorting algorithm should 
be used; so different browsers could use different sort algorithms for 
sort()! In Mozilla, Merge Sort is used. In Chrome, both Quick Sort and 
Insertion Sort (for smaller arrays) are used!