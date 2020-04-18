function compressBoxesTwice(boxes, boxes2) {

    boxes.forEach(function(box) {
        console.log(box)
    })

    boxes2.forEach(function(box) {
        console.log(box)
    })
}

// Unlike example 3, here we have 2 different inputs.
// We can't just throw one away; the inputs are different terms.
// So, the runtime is O(n + m).