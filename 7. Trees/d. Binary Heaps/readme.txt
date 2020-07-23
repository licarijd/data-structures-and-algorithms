Binary Heaps


In a Binary Heap, every child belongs to a parent node, 
which has a greater priority (value).


                      101

            72                 33

    2               30  5               1


In the example above, we see that every child (eg. 72 and 33)
is less than it's parent (eg. 101). 

Unlike a BST, there is no order from left to right; we can swap the 
72 and 33, and it would still be a Binary Heap.

The above is an example of a Max Heap.

There are also Min Heaps, which are the exact opposite (every child)
is greater than it's parent, with the root node being the smallest.

A Heap can be used in any algorithm where ordering is important.
They are commonly used with priority queues.


Binary Heap Operations


lookup - O(n)

insert - O(log n)

delete - O(log n)


Notice the slower lookup time of O(n) compared to Binary Search 
Trees, which do lookup in O(log n).

This is because it's less ordered than in BSTs. We can't just divide and 
conquer the left and right subtrees of a node, since both sides are either 
greater than or less than the node. Thus, we have to search the left and
right subtrees.

Binary Heaps are great for comparative operations. Say we wanted all values
greater than 33 in the above example, we could just take all nodes 
above it (101), and nodes at the same level to the left.

That would be very difficult to do with a BST, we'd have to visit all the
nodes (O(n) operation).

Heaps are used a lot in data storage, priority queues, and sorting 
algorithms.


Binary Heap Example 

Say we wanted to add the number 100 to the following Binary Heap:


                                91

                70                              62

        55              57                 50         51

    38       27     20      30          32          40    


First, 100 would be added left-to-right (at the end of the heap 
in O(1)time), without having to traverse (insertion can be very 
fast):


                                91

                70                              62

        55              57                 50         51

    38       27     20      30          32          40     100


Then, since 100 is not in the priority order, it would bubble up 
until it is in priority order.

Step 1:


                                91

                70                              62

        55              57                 50         100

    38       27     20      30          32          40     51


Step 2:


                                91

                70                              100

        55              57                 50         62

    38       27     20      30          32          40     51
    

Step 3:


                                100

                70                              91

        55              57                 50         62

    38       27     20      30          32          40     51


So although inserts may look fast, they can still take O(log n) 
worst case. Best case they're O(1).

This is the same case with deletes.


** Important Note on Heaps - when you hear "Memory Heap", it is 
not actually a Heap data structure!! 

The Heap in this case refers to a region in memory where we can 
store data. The stack is for functions.

The name is just coincidental - the memory heap has nothing to do with 
the heap data structure. It's just a heap of memory.


The beauty of Binary Heaps is that they take up the least amount of space
possible, because it's always left-to-right insertion. So there's no 
concept of an unbalanced Binary Heap - we don't have to rebalance it,
like a BST. 

Because they do left to right insertion, they preserve the order of
insertion. Thus, you can even implement Binary Heaps with arrays, as 
opposed to using Nodes like in BSTs.


The only garuntee binary heaps give us is that the parent is always 
greater than it's children.

Besides always being memory-efficient and compact because it's always 
a complete Binary Tree (no memory wasted on 'null' subtrees), 
Binary Heaps are really useful for things like priority queues.


Priority Queues 

Priority Queues are different than queues; queues assume first in first out,
all the time.

In a Priority Queue, this isn't the case; each element has a priority.
And, elements with a higher priority are served before elements with a 
lower priority.

So if there are items that arrive late, but have higher priority than
the items that were first-in, the high priority items get served first.
Thus, FIFO does not hold.


Priority Queue Example using Binary Heaps 


Say we're lining up for an airplane.

Step 1: add passenger (low priority)


            Passenger (Priority: 1)


Step 2: add captain (high priority)


            Captain (Priority: 10)

        /

Passenger (Priority: 1)


Step 3: add passenger (low priority)

We're using left-to-right insertion, so the passenger just gets added 
on the right in level 2:


            Captain (Priority: 10)

        /                           \

Passenger (Priority: 1)         Passenger (Priority: 1)


Step 4: add stewardess (higher priority than passengers, less priority than 
captains)

                        Captain (Priority: 10)

                    /                           \

            Stewardess (Priority: 5)         Passenger (Priority: 1)

            /                           

    Passenger (Priority: 1) 


And as we add passengers, they get added left-to-right, etc...

It's really eaasy to let people into the airplane, since we just 
start at the top, and then go left-to-right, drop a level, go 
left-to-right, etc.


In summary, sometimes Binary Heaps and Priority Queues can be better 
than BSTs.

Although searching through a Binary Heap is much slower than a BST,
we have an idea of priority, since insertion is done in order.

And although we may have to bubble up inserts every once in a while,
most of the time we get really fast inserts with Binary Heaps.

Lookups are slow with Binary Heaps. Use Binary Heaps when you want to 
just find the maximum or minumim value.

A lot of times with Binary Heaps and Priority Queues, you'll have a 
method called "findMax()" or "findMin()" that is O(1), since it will 
just return the root.



