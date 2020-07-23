// A recursive and iterative implementation
// of factorial.

const findFactorialRecursive = number => {

    // Start at 2 to avoid a needless iteration (2! is 2)
    if (number <= 2) {

        return number
    }

    return number * findFactorialRecursive(number - 1)
}

const findFactorialIterative = number => {

    let sum = number

    // Start at 2 to avoid a needless iteration (2! is 2)
    if (number <= 2) {

      return number
    }

    while(number > 2) {

        number--
        sum = sum * number
    }

    return sum
}

console.log(findFactorialRecursive(6))

console.log(findFactorialIterative(6))