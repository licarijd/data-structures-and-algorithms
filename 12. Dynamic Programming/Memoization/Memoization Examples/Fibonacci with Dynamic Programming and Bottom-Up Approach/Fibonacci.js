// With the bottom-up approach, we start from the first numbers
// in the sequence (in the sense of the bottom-up approach, these
// are the simplest subproblems) instead of the last, and work our
// way up (to the more complex subproblems).
// It's easily implemented using arrays.

const fibonacciMaster2 = n => {

    let answer = [0, 1]

    for (let i = 2; i <= n; i++) {

        answer.push(answer[i - 2] + answer[i - 1])
    }

    return answer.pop() // Gives us the last item in the list
}


console.log(fibonacciMaster2(10))

