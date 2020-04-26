// This program returns two merged arrays.
// This can be made more readable with logically distinct functions.

const mergeArrays = (arr1, arr2) => {

    const newArray = []
    let largestArray = []
    let smallestArray = []
    
    if (arr1.length < arr2.length) {
        largestArray = arr1
        smallestArray = arr2
    } else {
        largestArray = arr2
        smallestArray = arr1
    }

    let largestArrayCurrentElement = 0
    let smallestArrayCurrentElement = 0

    while (true) {

        if (largestArray[largestArrayCurrentElement] <= smallestArray[smallestArrayCurrentElement]) {

            newArray.push(largestArray[largestArrayCurrentElement])
            largestArrayCurrentElement++
        } else {

            newArray.push(smallestArray[smallestArrayCurrentElement])
            smallestArrayCurrentElement++
        }
        
        if (smallestArrayCurrentElement >= smallestArray.length) {

            newArray.push(...largestArray.slice(largestArrayCurrentElement, largestArray.length - 1))
            break

        } else if (largestArrayCurrentElement >= largestArray.length) {

            newArray.push(...smallestArray.slice(smallestArrayCurrentElement, smallestArray.length))
            break

        }
    }

    return newArray
}

mergeArrays(
    [4,5,6],
    [1,2,3]
)