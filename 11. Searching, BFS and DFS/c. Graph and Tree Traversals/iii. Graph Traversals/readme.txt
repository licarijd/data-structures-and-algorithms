Graph Traversals


What we've just learned about BFS and DFS for Tree traversal also 
applies to Graphs.

This is because Trees are simply a type of Graph.

So, apart from using 'left' and 'right' properties (perhaps there's 
10 children), we can do the same thing using BFS and DFS.

This is very useful since Graphs are used to model real life things, like 
a recommendations engine at Amazon.

We can see what types of items 
are related (or which items are most related to the last book we 
purchased); in this case, we'd use BFS.

Or, for friend recommendation networks on Facebook or LinkedIn.
DFS might be used to figure out what degree of connection you have 
with someone.

Shortest path is used for recommendations engines, and is the basis
of how Peer-to-Peer networks work; and how things like Google Maps works.


Graph Traversal With BFS Example (Undirected, Acyclic Graph)


4       3          2
  \   /            |
    0   --------   1  ----  8 ---- 9 ---- 10
  /   \            |
5       6          7


Step 1:

Starting from 0 (the root), check all of the closest nodes first 
(1, 3, 4, 5, 6)

Step 2:

Check 1 first, and check if it has any children. It does 
have children - 2, 7, and 8.

Step 3:

Check 3, 4, 5, and 6 and see if they have any children
(they don't).

Step 4:

From 1 (the only direct child of the root which has children),
we check 2, 7, and 8. 2 and 7 don't have children. 8 does, 
visit 8.

Step 5:

Visit 9

Step 6: 

Visit 10


With BFS, we traversed the Graph by starting with the root's closest 
neighbours, before moving further and further out. 

With BFS in Graphs, we are able to essentially convert the Graph into 
a Tree, because we know who the parent of the children are, the grand 
parents + grand children, etc.

BFS uses more memory to keep track of the parent and children nodes of 
a level. But it's great for determining the shortest path between nodes.
It's also better if we know the node we're looking for is close to us,
since it looks at the closest nodes first.


Graph Traversal With DFS Example (Undirected, Acyclic Graph)


4       3          2
  \   /            |
    0   --------   1  ----  8 ---- 9 ---- 10
  /   \            |
5       6          7


Step 1:

Starting with 0, visit child node 1.

Step 2:

From 1, visit 1's children - 2, 7, and 8. 8 has children,
so we keep going deeper.

Step 3:

From 8, visit 9 and 10

Step 4:

There are no more nodes in this branch, so we go bakc to the last 
parent with unexplored children (the root, in this case).

Step 5:

Visit 3, 4, 5, and 6


As we can see, BFS is best for finding the shortest path between 2 nodes
(eg. who are our closest friends on Facebook? What is our top recommendation 
at Amazon?)

DFS is good for checking to see if something exists. We can go very deep 
into a graph faster than BFS.

DFS is like doing a maze; you try to find a path that gets you all the way through,
and backtrack to the last unexplored branch if you can't find what you're 
looking for! That's why we use recursion for DFS.

DFS is great for answering the question "Does the Path Exist?". It uses less 
memory than BFS since we don't track parent and child nodes at each level.
But, it can get slow, especially for very deep Trees. The deeper the Tree 
or Graph, the more recursive function calls (and therefore space complexity)
we need to keep track of on the call stack.


** Tool to visualize graphs: https://visualgo.net/en