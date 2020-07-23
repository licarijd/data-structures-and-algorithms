class HashTable {

    // we give a hash table a memory space size
    constructor(size) {

        // The actual table is implemented using a 2D array.
        // Each element is a bucket, which will be represented with a 2-element array
        // of the format [key, value].
        this.data = new Array(size)
    }

    // Basic hash function.
    // ** it's a standard in the JavaScript community to use an underscore for private 
    // members, even though they can still be accessed. They just let other developers
    // know that the member is not intended to be used.
    _hash(key) {
        let hash = 0;
        for (let i = 0; i < key.length; i++) {
            // key.charCodeAt(i) will get the numeric character code for the character
            // at position i.
            // The mod operator is used to make sure the result is in the range of 
            // this.data.length (which is the memory size).
            hash = (hash + key.charCodeAt(i) * i) %
            this.data.length
        }
        return hash
    }

    // O(1)
    set(key, value) {

        const memAddress = this._hash(key)
        const bucket = [key, value]

        if (!this.data[memAddress]) {
            this.data[memAddress] = []
        }
        this.data[memAddress].push(bucket)
    }

    // O(1), or O(n) with a collision
    get(key) {

        const memAddress = this._hash(key)
        const currentBucket = this.data[memAddress]

        let value = undefined

        if (currentBucket) {
            currentBucket.forEach(bucket => {
                if (bucket[0] === key) {
                    value = bucket[1]
                }
            })
        }
        return value
    }

    // As we can see, getting keys is ineffiecient since we need to loop over
    // every space in memory. It doesn't matter how many items are actually in
    // the hash table, we need to every memory block. Since things were inserted
    // randomly, with no particular order. This is much more inefficient than
    // arrays, where we'd only need to loop over the elements.
    keys() {
        const keysArray = []
        for (let i = 0; i < this.data.length; i++) {

            // Unless there's a collision, this will only run once
            this.data[i].forEach(subBucket => {
                keysArray.push(subBucket[0])
            })
        }
        
        return keysArray
    }
}

const myHashTable = new HashTable(5)

myHashTable.set('grapes', 10000)
myHashTable.set('apples', 20000)
myHashTable.set('zuchine', 340000)
myHashTable.set('plum', 80000)

console.log(myHashTable.get('grapes'))
console.log(myHashTable.keys())