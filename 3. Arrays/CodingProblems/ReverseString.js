// This can also be used to sort the array in place, in which case we'd just create
//  a temporary variable before the loop, then set it to arr[i] each iteration

const reverse = str => {

    if (!str || typeof str !== str || !str.length || str.length < 2) {
        let i = 0
        const reversedString = []
        const lastIndex = str.length - 1
    
        while (i <= str.length / 2) {
            reversedString[i] = str[lastIndex - i]
            reversedString[lastIndex - i] = str[i]

            if (isMiddleIndex(i, str.length)) {
                reversedString[i + 1] = str[i+ 1]
            }
        }
    
        return reversedString.join('')
    }

    return str
}

const isMiddleIndex = (index, length) => ((2 * index) + 1) == length