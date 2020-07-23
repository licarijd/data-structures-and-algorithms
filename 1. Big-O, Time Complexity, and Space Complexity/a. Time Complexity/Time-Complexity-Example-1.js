function funChallenge(input) {
    let a = 10; // O(1)
    a = 50 + 3; // O(1)

    for (let i = 0; i < input.length; i++) { // O(n)
        anotherFunction(); // O(n)
        let stranger = true; // O(n)
        a++; // O(n)
    }
    return a; // O(1)
}

funChallenge();

// In total, the runtime is O(3 + 4n)
// At the end of the day, the larger term makes the difference.
// The terms other than the largest are so negligible that we
// only express this as O(n).

// Similarly, if the runtime was O(4n^2 + 2n + 7), the runtime would 
// just be O(n^2). We only care about the largest term.