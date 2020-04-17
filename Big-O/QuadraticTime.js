// O(n^2) - Quadratic Time

// - the number of operations is the number of operations of the outer loop,
// multiplied by the number of operations of the inner loop.

function logAllPairsOfBoxes(boxes) {
    boxes.forEach(function(firstBox) {
        boxes.forEach(function(secondBox) {
            console.log(firstBox, secondBox)
        })
    })
}

// In this case, both loops are based on the same input.
// If these loops were based on 2 different inputs, eg. boxes1 and boxes2, 
// then it would be O(n * m), not O(n * n) = O(n^2)