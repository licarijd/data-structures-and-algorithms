const strings = ['a', 'b', 'c', 'd']

// To store these 4 items on a 32 bit system (4 addresses to store the letter
// 'a', for example), then we need 4*4 bytes of storage. All elements will be stored
// sequentially in Random Access Memory.

// So when we call strings[2], we ask the array to return the third item from 
// where the array is stored in memory (the computer obviously knows where this
// is, since it stored it for us).

// O(1) operation, since it just pushes to the end of the array
strings.push('e')

// O(1) operation, since it just removes whatever the last item is
strings.pop()

// Pushes an item to the front of the list.
// O(n) since all elements will need to be re-assigned to the next index
// (an iteration is required).
strings.unshift('x')

// Inserts an item into a specific position within the list.
// The first parameter is the start index, the next parameter is the 
// delete count (how many things we want to delete), and the third parameter is
// the string.

strings.splice(2, 0, 'alien')

// This will add 'alien' to position 2.
// The runtime of this is O(n) since worst case (first element is spliced),
// it will need to reassign every index.

// The same goes for deleting - every element may need to be re-stored if the 
// splice occurs at the first element.
