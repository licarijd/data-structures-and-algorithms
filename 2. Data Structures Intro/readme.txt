A Data Structure is a collection of values.

The values can have relationships among them, and functions applied to
them.


How Computers Store Data 

For a computer to run code, it needs to keep track of things like variables, numbers,
and strings.

These variables are stored in Random Access Memory (RAM).

We also have storage, where we store things like video files, music files, 
documents etc. This can be a disk drive, flash drive, solid state drive, etc.

Data storage is permanent (persistent). RAM is not persistent.

So, when you turn off your computer, data on drives will still be available when 
it's turned back on. Data stored in RAM will not still be available.

Persistent storage is slow; RAM is faster since the CPU (which performs all 
the 'work' and calculations) can access RAM much faster than it can access 
storage.

RAM is like a massive storage area with addresses. Each address stores
8 bits (byte) of information. A bit can be 1 or 0.

The CPU is connected to a memory controller, which does the actual reading of memory 
(RAM) as well as writing.

This direct connection to the CPU is important because the CPU asks the RAM about
what's in a particular address. And the meory controller has direct connections to 
each address.

That's why it's called Random Access Memory - we can access the bits at any random 
address in memory right away.

Programs usually store data in nearby memory addresses, since retrieving data 
from addresses that are closeby if faster.

The CPU also has a Cache - a tiny memory storage mechanism that stores data which 
was used very recently. A common one is called a LRU Cache.


This is all very important for data structures. For example, if we have
var a = 1,
integers are usually stored as 32 bit numbers. Since one RAM address can store 
8 bits (1 byte) of data, we can store an integer (eg. 1) using 4 RAM addresses.

So, systems that are 8 bit (11111111) can hold 255 bits of information.

Systems that are 16 bit can store 65,536 bits of information.

Systems that are 32 bit can store 2,147,483,647 bits of information.

Systems that are 64-bit can store even more!

Numbers which are too large to store in RAM may simply be stored as Infinity.
This is how JavaScript handles it.


Operations on Data Structures 

- Insertion

- Deletion

- Traversal (access each data item exactly once so that it can be processed)

- Searching (find the location of a data item if it exists in a give collection)

- Sorting

- Access (most important)