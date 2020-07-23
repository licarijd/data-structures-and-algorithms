// BFS Implementation in JavaScript

// Sample tree:


//                9

//        6               12

//    1       4         34   45

// The reason BFS uses a lof of memory is because when it visits 6
// and then 12, from there, it's going to go to 6's children, then 
// 12's children. So as it goes through a level, we need to keep a 
// reference to all the children nodes.

// We're going to be using a queue to keep a reference to the nodes 
// we want to come back to (eg. at 12, we want a reference to 6 so we can revisit
// it).

// We start with the BST from the earlier section about Trees.

class Node {
    constructor(value){
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
      const newNode = new Node(value);
      if (this.root === null) {
        this.root = newNode;
      } else {
        let currentNode = this.root;
        while(true){
          if(value < currentNode.value){
            //Left
            if(!currentNode.left){
              currentNode.left = newNode;
              return this;
            }
            currentNode = currentNode.left;
          } else {
            //Right
            if(!currentNode.right){
              currentNode.right = newNode;
              return this;
            } 
            currentNode = currentNode.right;
          }
        }
      }
    }
    lookup(value) {
      if (!this.root) {
        return false;
      }
      let currentNode = this.root;
      while(currentNode){
        if(value < currentNode.value){
          currentNode = currentNode.left;
        } else if(value > currentNode.value){
          currentNode = currentNode.right;
        } else if (currentNode.value === value) {
          return currentNode;
        }
      }
      return null
    }

    remove(value) {
      if (!this.root) {
        return false;
      }
      let currentNode = this.root;
      let parentNode = null;
      while(currentNode){
        if(value < currentNode.value){
          parentNode = currentNode;
          currentNode = currentNode.left;
        } else if(value > currentNode.value){
          parentNode = currentNode;
          currentNode = currentNode.right;
        } else if (currentNode.value === value) {
          //We have a match, get to work!
          
          //Option 1: No right child: 
          if (currentNode.right === null) {
            if (parentNode === null) {
              this.root = currentNode.left;
            } else {
              
              //if parent > current value, make current left child a child of parent
              if(currentNode.value < parentNode.value) {
                parentNode.left = currentNode.left;
              
              //if parent < current value, make left child a right child of parent
              } else if(currentNode.value > parentNode.value) {
                parentNode.right = currentNode.left;
              }
            }
          
          //Option 2: Right child which doesnt have a left child
          } else if (currentNode.right.left === null) {
            currentNode.right.left = currentNode.left;
            if(parentNode === null) {
              this.root = currentNode.right;
            } else {
              
              //if parent > current, make right child of the left the parent
              if(currentNode.value < parentNode.value) {
                parentNode.left = currentNode.right;
              
              //if parent < current, make right child a right child of the parent
              } else if (currentNode.value > parentNode.value) {
                parentNode.right = currentNode.right;
              }
            }
          
          //Option 3: Right child that has a left child
          } else {
  
            //find the Right child's left most child
            let leftmost = currentNode.right.left;
            let leftmostParent = currentNode.right;
            while(leftmost.left !== null) {
              leftmostParent = leftmost;
              leftmost = leftmost.left;
            }
            
            //Parent's left subtree is now leftmost's right subtree
            leftmostParent.left = leftmost.right;
            leftmost.left = currentNode.left;
            leftmost.right = currentNode.right;
  
            if(parentNode === null) {
              this.root = leftmost;
            } else {
              if(currentNode.value < parentNode.value) {
                parentNode.left = leftmost;
              } else if(currentNode.value > parentNode.value) {
                parentNode.right = leftmost;
              }
            }
          }
        return true;
        }
      }
    }

    breadthFirstSearch() {

        let currentNode = this.root
        let list = [] // The resulting order of our BFS
        let queue = [] // Keep track of the nodes in the current level
    
        queue.push(currentNode)

        // While we still have nodes to visit
        while(queue.length > 0) {

            currentNode = queue.shift() // Dequeue the first item
            
            console.log(currentNode.value)

            list.push(currentNode.value)

            // Check if the node has a left child
            if (currentNode.left) {

                // if it does, add it to the queue
                queue.push(currentNode.left)
            }

            if (currentNode.right) {

                queue.push(currentNode.right)
            }
        }

        return list

        // Since a queue is FIFO, the left and right children of the root
        // get added to the queue and shifted first, followed by their 
        // left and right children, and so on. A parent gets shifted, and
        // immediately it's children get added to the end of the queue.

        // The only problem we have is that the 'queue' variable can get very large,
        // since we have to keep references to child nodes.
    }

    breadthFirstSearchRecursive(queue, list) {

      // If there are no more elements to visit, end the recursion
      if (!queue.length) {

        return list
      }

      let currentNode = queue.shift() // dequeue the first item

      console.log(currentNode.value)

      list.push(currentNode.value)

      // Check if the node has a left child
      if (currentNode.left) {

        // if it does, add it to the queue
        queue.push(currentNode.left)
      }

      if (currentNode.right) {

        queue.push(currentNode.right)
      }

      return this.breadthFirstSearchRecursive(queue, list)
    }

    // Most of the time, DFS is implemented with recursion
    DFSInOrder() {

      return traverseInOrder(this.root, [])
    }

    DFSPostOrder() {

      return traversePostOrder(this.root, [])
    }

    DFSPreOrder() {

      return traversePreOrder(this.root, [])
    }
  }

  const traverseInOrder = (node, list) => {

    console.log(node.value)

    // To get all elements in order, we need to traverse all the 
    // way down to the leftmost node of the tree (this set of 
    // calls get added to the call stack)
    if (node.left) {

      traverseInOrder(node.left, list)
    }

    // If there are no more left nodes, push the current node
    list.push(node.value)

    // After each left node's recursive function call, it's right 
    // child's recursive call will be added to the call stack
    if (node.right) {

      traverseInOrder(node.right, list)
    }

    return list
  }
  
  // Now that we've implemented traverseInOrder, these next two become 
  // very straightforward.
  const traversePreOrder = (node, list) => {

    console.log(node.value)

    // We want to push at the beginning, before we get to the leftmost 
    // node (starting with the root). The push happens before we move on to
    // the next node. Now, we can see how this would be very useful to 
    // recreate a tree!!

    // ***And, notice that in pre-order, we pre-push the node!!!
    list.push(node.value)

    if (node.left) {

      traversePreOrder(node.left, list)
    }
    
    if (node.right) {

      traversePreOrder(node.right, list)
    }

    return list
  }

  const traversePostOrder = (node, list) => {

    if (node.left) {

      traversePostOrder(node.left, list)
    }
    
    if (node.right) {

      traversePostOrder(node.right, list)
    }

    // In post-order, we post-push the node!!! Since we want to visit 
    // both children first, before the parent.
    console.log(node.value)

    list.push(node.value)

    return list
  }


  // ** Notice that with DFS, we know the amount of space we need in memory 
  // from the height of the tree; since the height of the tree will match
  // the deepest recursive function, which will be added to the call stack.

  // So, our memory consumption is O(height of the tree), which will give us the 
  // worst case scenario when using DFS.
  
  const tree = new BinarySearchTree();
  tree.insert(9)
  tree.insert(4)
  tree.insert(6)
  tree.insert(20)
  tree.insert(170)
  tree.insert(15)
  tree.insert(1)

  console.log(tree.breadthFirstSearch())
  console.log(tree.breadthFirstSearchRecursive([ tree.root ], []))

  console.log(tree.DFSInOrder())
  console.log(tree.DFSPreOrder())
  console.log(tree.DFSPostOrder())
  
  //     9
  //  4     20
  //1  6  15  170
  
  function traverse(node) {
    const tree = { value: node.value };
    tree.left = node.left === null ? null : traverse(node.left);
    tree.right = node.right === null ? null : traverse(node.right);
    return tree;
  }
  
  
  