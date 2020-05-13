Stacks and Queues


Stacks and Queues are linear data structures (we can traverse elements sequentially,
one by one).

Stacks and queues can be implemented in similar ways, and the only difference is in how items
get removed.

Unlike arrays, there's no random access. We have operations like 'push', 'peak', and 'pop',
all of which deal exclusively with the first or last elements of the data structure.

Stacks and Queues are higher-level data structures built on top of lower-level data structures 
like arrays and linked lists. They limit certain functions, and ensure data is being accessed
in the correct way.


Stacks


Stacks are literally "stacks" of data - elements are conceptually "stacked" on top of one
another - the item on top of the stack needs to be removed in access the one underneath it,
and so on. They are LIFO (last in, first out).

Stacks are great for seeing the last item that was added. Stacks are also very important
for language specific engines. 

** See the "How JavaScript Works" section for how stacks and queues are used for
JavaScript engines!

Most programming languages are modelled with the stack architecture in mind.
When functions get called, they generally follow the rule of LIFO with the call 
stack. For exmaple, if there's a function within a function within another function,
we start popping the functions off the call stack.

Another way to use stacks is in browser history - if we're navigating forward or
backwards, we're using stacks. As you visit websites, URLs are added to a stack.
Hitting back will pop an item off the stack (the site you're going back to).

Stacks are also used in applications with undo/redo functions. The previous state of the 
application is stored, so that the last one appears first.

Both arrays and linked lists work well for implementing stacks. The benefits of each
just pertain to the data structure. For example, arrays use cache locality 
(items are stored next to each other), which makes lookup fast. Linked lists take
up more memory because of the pointers of each node, but they have more dynamic 
memory. We also never have to copy elements to a new memory location, like in arrays;
memory is truly dynamic.


Stacks Operations:

- lookup O(n)

- pop O(1)

- push O(1)

- peek O(1)


Queues

Queues are FIFO.

Queues are commonly used in applications that need to utilize FIFO, such as waitlist
applications like Uber or Lyft. Printers use queues since they use FIFO.


Queue Operations

- lookup O(n)

- enqueue O(1)

- dequeue O(1)

- peek O(1)

** It's very inefficient to use arrays to implement queues - if we dequeue an item,
all other array elements will need to be unshifted.