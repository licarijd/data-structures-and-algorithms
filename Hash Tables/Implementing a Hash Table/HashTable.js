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
        console.log("SET")
        console.log(this.data)
    }

    // O(1), or O(n) with a collision
    get(key) {

        const memAddress = this._hash(key)
        const currentBucket = this.data[memAddress]

        let value = undefined

        if (currentBucket) {
            currentBucket.forEach(bucket => {
              console.log(bucket[0])
              console.log(key)
                if (bucket[0] === key) {
                    value = bucket[1]
                }
            })
        }
        return value
    }
}

const myHashTable = new HashTable(5)
myHashTable.set('grapes', 10000)
myHashTable.set('apples', 20000)
myHashTable.set('zuchine', 340000)
myHashTable.set('plum', 80000)
console.log(myHashTable.get('grapes'))