// The idea is correct, but we should make unit tests eventually to verify

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

        if (!this.root) {

            return "Tree empty"
        }

        let currentNode = this.root;

        while (currentNode) {

            if (value < currentNode.value) { // go left

                currentNode = currentNode.left;

            } else if (value > currentNode.value) { // go left

                currentNode = currentNode.right;

            } else if (currentNode.value === value) {

                return currentNode
            }
        }

        return false
    }

    // Very advanced, probably won't encounter it in an interview
    remove(value) {

        if (!this.root) {

            return "Tree empty"
        }

        let nodeToRemove = null
        let currentNode = this.root
        let parentNode = this.root

        // Find the node to remove
        while (currentNode && !nodeToRemove) {

            if (value < currentNode.value) { // go left

                parentNode = currentNode
                currentNode = currentNode.left;

            } else if (value > currentNode.value) { // go left

                parentNode = currentNode
                currentNode = currentNode.right;

            } else if (currentNode.value === value) {

                nodeToRemove = currentNode
            }
        }

        if (!nodeToRemove) {

            return "Node doesn't exist in the tree"
        }

        const inRightSubtree = value > parentNode.value
        const leftSubtree = currentNode.left
        const rightSubtree = currentNode.right

        // If it's a leaf node, just delete the reference
        if (!leftSubtree && !rightSubtree) {

          if (nodeToRemove.value > parentNode.value) {

            parentNode.right = null

          } else {

            parentNode.left = null
          }

          return this
        }

        if (inRightSubtree) {

            if (currentNode.right) {

                // If there's a right node, and a left node of that right node,
                // find the leftmost node
                if (currentNode.right.left) {

                    const leftMostNode = currentNode.right.left
                    const leftMostNodeParent = currentNode.right

                    while(leftMostNode.left) {

                      leftMostNodeParent = leftMostNode
                      leftMostNode = leftMostNode.left
                    }

                    // The left most node replaces the deleted node.
                    // The right subtree of the left most node is the new
                    // left subtree of the parent of the once-leftmost node.
                    // The right subtree of the replacement node is the parent of the 
                    // once-leftmost node.
                    // The left subtree of the deleted subtree gets moved to the left.
                    // This is much easier to visualize with https://repl.it/repls/ApprehensiveUnwelcomeDesigners
                    // and Chrome dev console.
                    parentNode.right = leftMostNode
                    leftMostNodeParent.left = leftMostNode.right
                    parentNode.right.right = leftMostNodeParent
                    parentNode.right.left = currentNode.left

                    return this

                // If there's a right node, but that right node doesn't have a left 
                // subtree, just delete the node, and move the left subtree
                // one level up.
                } else {

                  parentNode.right = currentNode.right
                  parentNode.right.left = currentNode.left
                  return this
                }
            } else {

              // If there's a no right subtree, just delete the node
              parentNode.right = currentNode.left
              return this
            }

        } else {
          
            if (currentNode.right) {

                if (currentNode.right.left) {

                    const leftMostNode = currentNode.right.left
                    const leftMostNodeParent = currentNode.right

                    while(leftMostNode.left) {

                      leftMostNodeParent = leftMostNode
                      leftMostNode = leftMostNode.left
                    }

                    parentNode.left = leftMostNode
                    leftMostNodeParent.left = leftMostNode.right
                    parentNode.left.right = leftMostNodeParent
                    parentNode.left.left = currentNode.left

                    return this
                } else {

                  parentNode.left = currentNode.right
                  parentNode.left.left = currentNode.left
                  return this
                }
            } else {

              parentNode.left = currentNode.left
              return this
            }
        }
    }
}


// For testing
const traverse = node => {

    if (node) {

    const tree = { value: node.value };

    tree.left = node.left === null ? null : traverse(node.left)
    traverse(node.left);
    tree.right = node.right === null ? null : traverse(node.right);

    return tree;
    }
}


const tree = new BinarySearchTree();

tree.insert(60);
tree.insert(30);
tree.insert(14);
tree.insert(51);
tree.insert(55);
tree.insert(54);
tree.insert(38);
tree.insert(37);

console.log('TREE: ')
console.log(JSON.stringify(traverse(tree.root)))

console.log('--------------')
console.log('LOOKUP: ')
console.log(tree.lookup(14))

console.log('--------------')
console.log('REMOVING 51: ')

tree.remove(51)

console.log(JSON.stringify(traverse(tree.root)))
console.log('REMOVING 54: ')

tree.remove(54)

console.log(JSON.stringify(traverse(tree.root)))

console.log('REMOVING 37: ')

tree.remove(37)

console.log(JSON.stringify(traverse(tree.root)))

console.log('ADD 90, 100, 96, 110, 108, 111, 109, REMOVE 100: ')

tree.insert(90)
tree.insert(100)
tree.insert(96)
tree.insert(110)
tree.insert(108)
tree.insert(111)
tree.insert(109)
tree.remove(100)

console.log(JSON.stringify(traverse(tree.root)))