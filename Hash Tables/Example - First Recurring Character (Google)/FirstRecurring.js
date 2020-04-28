// Given an array, return the first recurring character.
// [1, 2, 5, 7, 2] -> 2
// [1, 2, 3, 4, 3, 1] -> 3

const findFirstRecurring = (arr) => {

    const occurred = {}
    let firstRecurringCharacter = null

    // As we can see, using a hash table instead of an array helped us
    // solve this without nested loops, thus improving Time Complexity to O(n).
    // To do this, we had to increase the space complexity to O(n) (since our
    // hash map "occurred" will hold n elements, worst case). So, there's
    // a tradeoff to using hash tables.
    for (let i = 0; i < arr.length; i++) {

        const elem = arr[i]

        if (occurred[elem] == elem) {
            firstRecurringCharacter = elem
            break
        } else {
            occurred[elem] = elem
        }
    }

    return firstRecurringCharacter
}

console.log(findFirstRecurring([2, 5, 5, 2, 7, 6, 4]))