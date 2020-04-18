function arrayOfHiNTimes(n) {
    let hiArray = [];
    for (let i = 0; i < n; i++) {
        hiArray[i] = 'hi';
    }
    return hiArray 
}

arrayOfHiNTimes(6)

// In this case, the space complexity is O(n), since new memory is being allocated 
// for every iteration of the loop. Since the loop iterates n times, the space complexity 
// is O(n).