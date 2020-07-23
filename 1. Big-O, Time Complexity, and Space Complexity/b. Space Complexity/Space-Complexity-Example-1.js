function boo(n) {
    for (let i = 0; i < n.length; i++) {
        console.log("boo")
    }
}

boo([1,2,3,4,5])

// It's obvious that the time complexity here is O(n).

// When we talk about space complexity, we're talking about additional space.
// So, we don't include space taken up by the inputs (we don't care how big the
// input is, since we have no control over the input passed into the function).

// Rather, we only have control over what happens in the function.
// The question is, wihtin this function, are we adding any space?
// In this caase, we're not. We're just creating a 'i = 0' variable, 
// and that's it.

// So, 

// boo([1,2,3,4,5]) has a space complexity of O(1)