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
  }
  
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
  
  //     9
  //  4     20
  //1  6  15  170
  
  function traverse(node) {
    const tree = { value: node.value };
    tree.left = node.left === null ? null : traverse(node.left);
    tree.right = node.right === null ? null : traverse(node.right);
    return tree;
  }
  
  
  