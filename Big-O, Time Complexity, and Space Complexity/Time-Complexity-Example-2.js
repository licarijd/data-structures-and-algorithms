function random(items) {
    console.log(items[0])

    var middleIndex = Math.floor(items.length / 2)
    var index = 0

    while (index < middleIndex) {
        console.log(items[index])
        index++
    }

    for (var i = 0; i < 100; i++) {
        console.log("hi")
    }
}

// In this case, the runtime is O(1 + n/2 + 100)
// However, as n grows, the constant 100 becomes less relevent.
// So does the 1/2 in front of n. 
// The runtime is therefore expressed as O(n), since we always express the worst case.