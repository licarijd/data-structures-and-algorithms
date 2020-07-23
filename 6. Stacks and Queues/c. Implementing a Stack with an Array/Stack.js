class Stack {

    // The initial value (head) of the list
    constructor() {
        this.stack = []
    }

    push(node) {

        this.stack.push(node)
        return this
    }

    pop() {

        this.stack.pop()
        return this
    }

    peek() {
        return this.stack[this.stack.length - 1]
    }
}

class Node {
    constructor(value) {
        this.value = value
    }
}

const myStack = new Stack()
const node1 = new Node(1)
const node2 = new Node(2)
const node3 = new Node(3)
const node4 = new Node(4)
myStack.push(node1)
myStack.push(node2)
myStack.push(node3)
myStack.push(node4)
myStack.pop()