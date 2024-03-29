Hash Tables


Hash Tables are also known as:

- Hash Maps

- Dictionaries

- Maps

- Unordered Maps

- Objects


Different languages have different names and slight variations.

For example, objects in JavaScript are a kind of hash table. 

In Python, hash tables are called Dictionaries. 

Java has Maps.

Ruby has Hashes.

Pretty much every language has a built in hash table.

Hash tables are used everywhere; in databases, caches, and more.


Hash Table Components

A hash table is a collection of keys and values.

The key is the used as the index of where to find the value in memory.
The key, eg "Name", is sent to a hash function, where it is converted to 
a numerical index, eg. '711'. This generated index is used to reference the value.

Sample hash table: { { "Name": 1000 } }

Sample memory, where 501 - 503 are memory blocks occupied by an array, and 711 has
the value from the hash table.

501     1
502     3
503     4
...
711     1000

Technically, both the key and the value are stored in the right column. The right 
column represents a "bucket", which holds key and value data.

See "Hash Functions.txt"


Hash Table Operations


Insert - O(1)

- hash the key

- places the key and value data in the memory address space which the function comes up with


Lookup - O(1)

- works the same as insert

- hash the key

- looks at the memory address space which the function comes up with

- in the cases of a collision, it could take O(n) (see "collisions")


Delete - O(1)

- works the same as well

- hash the key

- looks at the memory address space which the function comes up with, and delete 
what's there

- since it's not ordered (like arrays), we don't have to do things like shift indexes


Search - O(1)

- works the same as well

- hash the key

- looks at the memory address space which the function comes up with


In Javascript, this means that we do things like:

obj.name

obj.id = 345

obj.sort()

In O(1) time!


Downsides of Hash Tables - Collisions

A collision occurs when a hash function produces the same hash (which leads to the same 
memory address) as an existing item.

When we get a collision, we need a way to store both pieces of data at the same address space.
One way of resolving a collision is that the element which got stored first stays in place,
and the second colliding item gets linked to it, via a linked list:

Address     Bucket

152         John 234 (hashed first)    ->    Sandra 434 (hashed next)  

With hash tables, we can't avoid these collisions. With enough data and limited memory, 
we're always going to have these collisions. So, there is a possibility that we keep
adding to the same memory area (in worse case).

Address     Bucket

151         -- empty --

152         John 234 (hashed first)    ->    Sandra 434 (hashed next)  -> Brad 898 (hashed next)

153         -- empty --

154         -- empty --

This slows down our ability to insert and
access information, because now if we want to check what's in the address space 
with all the elements, we have to iterate through all the elements. 

So theoretically, when we have a collision, it slows down reading a
a hash table to O(n/k), where k is the size of the hash table.

Since we discard constants, it becomes an O(n) operation. 

Collisions will likely happen in any hashtable implementation. There are 2 common 
ways to deal with collisions (collision resolution).

1 way is the linked list method, which is called seperate chaining. There are more,
which can be found on the Wikipedia page: https://en.wikipedia.org/wiki/Hash_table#Collision_resolution


See "Hash tables in different languages"


In summary, hash tables are great when you want quick access to certain values. 
Hash tables search in O(1) time, where arrays need to loop through every item in 
order to search (for example, you want to see if the string "Hello" exists in 
an array). This is why hash tables are so popular in databases.

Inserts are also very fast, in O(n) time. This is much more efficient than arrays 
since arrays will need to shift the other elements after inserting something new.

However, since there is no concept of order in hash tables, items are not places sequentially
next to each other in memory (like arrays). This is one downside of hash tables. There's 
also the innefficiency of key iteration (keys()) (See HashTable.js - we need to 
iterate through the entire memory space).

Arrays and hash tables both have fast lookups (for a hash table to have fast lookups, it needs
good collision resolution). 

Hash tables also have more flexibility with keys than arrays (keys can be various types).

Hash tables are often used to improve time complexity (eg. remove nested loops), 
but the O(1) access time benefit comes at the cost of more memory (space complexity).
This is a very common pattern for using hash tables. Hash tables are usually the answer 
to improving Time Complexity.

** Note about Dictionaries in Python 

Python has recently made dictionaries ordered by default. So there is less of a difference between
Arrays and Hash Tables (Dictionaries).
You can read more about it here: https://softwaremaniacs.org/blog/2020/02/05/dicts-ordered/en/