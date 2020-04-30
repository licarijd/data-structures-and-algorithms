Linked Lists


** Revisiting arrays, one obvious disadvantage to static arrays are that we can't change their 
size after declaration. We can increase size with dynamic arrays. Once all memory has been
used up, double the memory will be allocated (this has a performance implication O(n), as all
elements will be moved to a new location in memory, since everything needs to be stored
sequentially).

** Arrays also have poor performance for operations like insert and delete, since all elements 
to the right need to be shifted left or right (O(n) time for inserting and deleting).

** Hash tables are great for storing things anywhere in memory, but data isn't stored 
sequentially (elements aren't ordered).

This is where Linked Lists shine.


Anatomy of a Linked List

A Linked List is a set of nodes. Each node has 2 things: data, and a pointer to the next
node in line (in the case of singly linked lists).

The first node is called the head, and the last node is called the tail.

Linked lists are null terminated, which signifies the end of the list (the tail element
points to null).


HEAD 5   -->   10   -->   TAIL 1   -->   NULL 
5344           4454       3756      

The numbers in the bottom row are memory locations.

Linked Lists can be sorted or unsorted, and nodes can be pretty much any type.

** JavaScript doesn't come pre-built with Linked Lists, just dynamic arrays!
But, we can build linked lists.


There are two Types of Linked List:

Singly Linked Lists

Doubly Linked Lists


Why Use Linked Lists?

Linked Lists allow for easy insertion and deletion, by simply changing a few pointers.

Unlike arrays, the only elements which update their pointers are the ones with pointers 
to / from the changed element. Arrays need to modify every element, as everything shifts.

The main difference between arrays and linked lists are that in an array, elements are
indexed. So if we want to go to an item at index 5 in an array, we can do that easily.
In a linked list, we have to start at the head and traverse the list (check each node).
We call it traversal (not iteration) since we don't know when the linked list will end
(we keep going until we hit "null").

Another advantage that arrays have is that computers have caching systems that make reading
from sequential memory faster than reaading scattered addresses. Linked list nodes are
scattered throughout memory, like hash tables. So traversing a linked list is usually quite a
bit slower than iterating through an array.

Just like hash tables, when we insert something into a linked list, we just scatter it all 
over memory. We don't have to do any of the shifting we do with arrays. This also makes 
deletions easier as well.

One advantage that linked lists have over hash tables is that there is order to a
linked list. Each node points to the next, so we can have sorted data (unlike 
hash tables).


Linked List Operations 


Prepend - O(1)

- No need to traverse


Append - O(1)

- No need to traverse


Lookup - O(n)

- This is because worst case, we will need to traverse the entire list


Insert - O(n)

- This is because we have to traverse the linked list to fund the spot where 
the insertion occurs


Delete - O(n)

- This is because we have to traverse the linked list to fund the spot where 
the delete occurs


** Insert and delete operations are better in linked lists than arrays, 
but both have a time complexity of O(n). We will see in the examples why this 
is the case.


Pointers 

In computer science, a pointer is a reference to another
place in memory (another object, another node).

In JavaScript, we can create a pointer like this:

const obj1 = { a: true };
const obj2 = obj1;

obj2 is a pointer to obj1 (it's a reference to obj1). We didn't copy obj1 to
obj2, and create another location in memory with obj1's data. We're just pointing to
the memory location with obj1. So we have two pointers, ob1 and obj2, which point to
the same location in memory.

** This is why we say JavaScript objects are pass by reference.

In JavaScript, the 'delete' keyword deletes pointers.

So, 'delete' obj1 will not affect obj2. Memory has not been released, so obj2 
is still pointing to the same data. The pointer obj1 has been deleted. The 
reason that memory hasn't been released is that obj2 is still pointing to it.
In most languages, memory is released when it is unused. So, if we deleted obj2 
as well as 1, and there are no pointers to that memory location, then it will 
be released. This is how garbage collection works in JavaScript. In C++ we have to 
do this ourselves.


When to use Singly and Doubly Linked Lists 


Pros of Singly Linked Lists

- simple implementation

- requires less memory (no "previous" property)

- technically since there's less operation during deletes and inserts, it's a little bit faster 


Downsides of Singly Linked Lists

- can't be traversed in reverse order (so if we ever lose reference to the head node, then 
the list can aactually be lost in memory forever)


So, singly linked lists make sense when memory is limited or expensive. The goal should be 
to just do fast insertion and deletion, without much searching (unless it's appending
or prepending).


Pros of doubly Linked Lists 

- can be traversed from the head or tail

- if we have to delete a previous node, we don't have to traverse from the head and 
find what the previous node is (which is what we'd need to do with a singly linked list)


Downsides of Doubly Linked Lists 

- complex 

- requires more memory, because of the "previous" property 


Doubly linked lists are good for when there aren't too many limitations on memory, and 
when you want good operations on searching for eleemnts (such as searching backwards).

** Usually in interviews, you'll be asked about implementing singly linked list
operations. Doubly linked lists usually only come up as theory questions.