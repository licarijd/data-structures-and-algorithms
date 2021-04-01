Arrays

- sometimes called lists

- organizes items sequentially (one after another) in memory

- simplest and most used data structures

- since data in arrays are stored in order, they have the smallest footprint
of any data structure

- so if all you need to do is store some data and iterate over it, then arrays
are the best choice (especially if you know the indices of items you're storing,
since arrays have lookup time of O(1))


Operations and time Complexity

Lookup - O(1)

Push - O(1)

Insert - O(n)

Delete - O(n)


** Operations on strings are the same! Strings are simply arrays of characters.

** Arrays are awesome for having sorted data. When it comes to sorting, arrays are
great because elements are stored sequentially in memory, according to thier index.


Arrays are great:

- for fast lookups
- because of fast push/pop() (adding elements to the end, taking things out of the end of the array)
- because elements are ordered and stored sequentially in memory


Arrays aren't great for:

- inserts and deletes (all array elements after the insert/delete need to be shifted)
- flexibility, due to their fixed size (if using static arrays)
