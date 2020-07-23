class Queue {

    constructor() {
        this.first = null
        this.last = null
        this.length = 0
    }

    enqueue(node) {

        if (!this.length) {
            this.first = node
            this.last = node
        } else {
            this.last.next = node
            this.last = node
        }
        this.length ++

        return this
    }

    dequeue() {

        if (!this.length) {
            return this
        }

        if (this.first === this.last) {
            this.last = null
        }

        this.first = this.first.next
        this.length --
        
        return this
    }

    peek() {
        return this.first
    }
}

class Node {
    constructor(value) {
        this.value = value
        this.next = null
    }
}

const myQueue = new Queue()
const node1 = new Node(1)
const node2 = new Node(2)
const node3 = new Node(3)
const node4 = new Node(4)
myQueue.enqueue(node1)
myQueue.enqueue(node2)
myQueue.enqueue(node3)
myQueue.enqueue(node4)
myQueue.dequeue()
myQueue.peek()