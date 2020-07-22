Graph and Tree Traversals


There are times when we may want to traverse a tree (say, 
to add properties to every node). Or we have an unsorted tree 
(which isn't a binary search tree). Or a graph with no order to it,
so we have to visit every node. Or, we may to evaluate the correctness
of an existing binary search tree.

For us to do this, we'll have to visit every node (traverse the 
tree). Since we need to visit every node, it's an O(n) operation.

There are 2 ways of traversing a graph or tree:

1) Breadth First Search 

2) Depth First Search 

It's the same case for both graphs and trees.


** The main reason we don't just put data into linear data structures 
like arrays, which are sorted, is because we get O(log n) search.
Hashtables aren't ordered, so they aren't ideal for every use case either.
We also get performance benefits with inserting and deleting items in trees
and graphs over arrays. So, they are used very often in the real world!
