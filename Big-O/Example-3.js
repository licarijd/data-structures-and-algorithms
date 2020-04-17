function compressBoxesTwice(boxes) {

    boxes.forEach(function(boxes) {
        console.log(boxes)
    })

    boxes.forEach(function(boxes) {
        console.log(boxes)
    })
}

// Even though this loops twice, O(2n) times, the 2 becomes less significant
// as n grows. Since we express the worst case, we simply express this as
// O(n).