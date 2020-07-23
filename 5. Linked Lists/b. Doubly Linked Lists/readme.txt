Doubly Linked Lists


Doubly Linked Lists are similar to singly linked lists, except that they also point to the 
previous nodes.

So, each node has 3 properties:

- Value

- Next

- Previous 

Thus, doubly linked lists allow us to traverse backwards. In a singly linked list, there's 
no way to tell which node comes before another node.

Searching through a doubly linked list can be more efficient. Lookup can technically be
O(n/2), since we can start at both ends; and if we know which half of the list the 
item is in, we can pick the optimum place to start. The lookup is still O(n) since we
remove constants. But, it's still technically faster.

The downside of doubly-linked lists is that they need an additional block of memory for 
each "previous" pointer.