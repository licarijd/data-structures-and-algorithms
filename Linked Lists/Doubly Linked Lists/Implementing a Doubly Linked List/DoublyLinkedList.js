// A Linked List Implementation

// Each node needs two properties: a value (can be anything) and a pointer to the next node.
// So, we can modify values without changing 'next' pointers.

class LinkedList {

    // The initial value (head) of the list
    constructor(node) {
        // The last item is also the first item if there is only one item
        this.head = node
        this.tail = this.head
        this.length = 1
    }

    append(node) {

        // This line needs to run before the existing tail can update it's 
        // 'next' pointer.
        node.previous = this.tail

        // This line needs to run before the existing tail can be modified.
        this.tail.next = node

        // Then, we make the node the new tail.
        this.tail = node
        this.length++

        return this
    }

    prepend(node) {

        // The prepended node's next pointer points to the old head.
        // We want to make sure we point node.next to the head, before
        // we modify the head in the next line.
        node.next = this.head

        // The head's pointer is null, but now it should point to the prepended node
        this.head.previous = node

        // Then, we make the node the new head
        this.head = node
        this.length++

        return this
    }

    printList() {
        const arr = []
        let currentNode = this.head 
        while(currentNode != null) {
            arr.push(currentNode.value)
            currentNode = currentNode.next
        }
        return arr
    }

    insert(index, node) {

        if (index >= this.length) {
            return this.append(node)
        }

        if (index === 0) {
            return this.prepend(node)
        }

        // First, we have to traverse to the index where we want to insert (this is 
        // why insert is an O(n) operation)
        const currentNode = this.traverseTo(index - 1)

        // We'll be overwriting the current node with the node we want to insert.
        // So, we need to save a reference to the current node's next node.
        const nextNode = currentNode.next

        currentNode.next = node
        node.previous = currentNode

        node.next = nextNode
        nextNode.previous = node
        this.length++

        return this
    }

    remove(index) {

        if (index >= this.length) {
            return this
        }

        // First, we have to traverse to the index where we want to delete (this is 
        // why delete is an O(n) operation)
        const currentNode = this.traverseTo(index - 1)

        // We point the current node's next reference to the node 2 spots ahead
        const nodeToRemove = currentNode.next
        const nextNode = nodeToRemove.next

        currentNode.next = nextNode
        nextNode.previous = currentNode

        this.length--

        return this
    }

    traverseTo(index) {
        let currentNode = this.head
        let currentIndex = 0

        while (currentIndex < index) {

            currentNode = currentNode.next
            currentIndex++
        }

        return currentNode
    }
}

class Node {
    constructor(value) {
        this.value = value
        this.next = null
        this.previous = null
    }
}

const node1 = new Node(3)
const node2 = new Node(8)
const node3 = new Node(2)
const node4 = new Node(0)

const myLinkedList = new LinkedList(node1)

myLinkedList.prepend(node3)
myLinkedList.append(node2)
myLinkedList.insert(1, node4)
console.log(myLinkedList.printList())
myLinkedList.remove(2)
console.log(myLinkedList.printList())