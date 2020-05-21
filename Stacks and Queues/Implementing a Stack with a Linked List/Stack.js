class Stack {

    // The initial value (head) of the list
    constructor() {
        this.top = null
        this.bottom = null
        this.length = 0
    }

    push(node) {

        if(this.length) {

            this.top.next = node
    
            // Then, we make the node the new tail.
            this.top = node
            this.length++

        } else {
            this.top = node
            this.bottom = node
            this.length = 1
        }

        return this
    }

    pop() {

        if (!this.length) {
            return this
        }

        if (this.top === this.bottom) {
            this.bottom = null
        }
        
        this.top = this.top.next
        this.length--
        return this
    }

    peek() {
        return this.top
    }
}

class Node {
    constructor(value) {
        this.value = value
        this.next = null
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