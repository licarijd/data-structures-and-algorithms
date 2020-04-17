// O(1) - Constant Time

// - the number of operations is always the same, regardless of the number of elements

// Example 1 - O(1)

function compressFirstBox(boxes) {
    console.log(boxes[0])
}

// Example 2 - O(2)

function logFirstTwoBoxes(boxes) {
    console.log(boxes[0])
    console.log(boxes[1])
}

// ** Note, it doesn't matter if it's O(1), O(2), or O(100), we always
// round down and say that constant time is O(1).