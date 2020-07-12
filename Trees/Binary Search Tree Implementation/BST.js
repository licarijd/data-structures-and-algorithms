class Node {

    constructor(value) {

        this.left = null;
        this.right = null;
        this.value = value;
    }
}

class BinarySearchTree {

    constructor() {

        this.root = null;
    }

    insert(value) {

        const newNode = new Node(value)

        if (!this.root) {

            this.root = newNode
            return this;
        }

        let currentNode = this.root;

        while (true) {

            if (value > currentNode.value) { // go right

                if (!currentNode.right) { // if there's no right node, make this the new right
                    
                    currentNode.right = newNode
                    return this
                }
    
                currentNode = currentNode.right

            } else if (value < currentNode.value) { // go left

                if (!currentNode.left) {

                    currentNode.left = newNode
                    return this
                }
    
                currentNode = currentNode.left
            }
        }
    }

    lookup(value) {

    }

    remove(value) {

    }
}


// For testing
const traverse = node => {

    const tree = { value: node.value };

    tree.left = node.left === null ? null : traverse(node.left)
    traverse(node.left);
    tree.right = node.right === null ? null : traverse(node.right);

    return tree;
}


const tree = new BinarySearchTree();

tree.insert(9);
tree.insert(4);
tree.insert(6);
tree.insert(20);
tree.insert(170);
tree.insert(15);
console.log(tree.root)

JSON.stringify(traverse(tree.root))