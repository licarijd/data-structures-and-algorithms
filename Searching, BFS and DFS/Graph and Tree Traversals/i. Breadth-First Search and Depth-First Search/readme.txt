BFS and DFS


Breadth-First Search 

In BFS, we move left to right across each level, starting from the 
root.

In the following tree:


                9

        6               12

    1       4         34   45


The order of traversal would be:

9
6
12
1
4
34
45


We keep searching until we find the node we're looking for, or the tree ends.


** BFS uses additional memory (it's necessary to track the child nodes
of each node on a given level, while traversing that level). We need to 
track every node and it's children in order, so that once we get to the 
end of the level, we go baack to the beginning and visit the children nodes 
of the first node, second node, third node etc.


Depth-First Search 


DFS follows one branch of the tree down as many levels as possible,
until the target node is found, or the end is reached.

When the search can't continue any further, it continues at the nearest 
ancestor with an unexplored child.


In the following tree:


                9

        6               12

    1       4         34   45


The order of traversal would be:

9
6
1

We're now at the bottom of the tree, so we go back up to 6
since it's the nearest ancestor with an unexplored child.
4 is the next unexplored child

4

4 doesn't have any unexplored children, so we look for an ancestor.

The next ancestor with an unexplored child is 9, so we go back 
up to it. The unexplored child is 12.

12
34

34 doesn't have any unexplored children, so we look for an ancestor.

The next ancestor with an unexplored child is 12, so we go back 
up to it. The unexplored child is 45.

45


DFS has a lower memory requirement than BFS, because it's not necessary to 
store all the child pointers at each level.

The idea is to go as deep as possible into a graph, usually from the left 
side, and then start going to the right until the traversal is done.


DFS vs BFS


The Time Complexity for DFS and BFS are the same - we visit every node,
so the Big O is O(n).

BFS is very good for finding the shortest path between a starting point 
and any ohter reachable node. This is because we always start with the root 
node, and then search the closest nodes first, before moving further and 
further.

The downside of BFS is that it requires more memory than DFS. This is 
because once we get to the end of a level, we need to go back to the 
beginning of the level, and visit each node's children. So, a record 
of each node's children needs to be kept.

As a general rule of thumb - if you have additional information on the 
location of the target node, and you know that the node is likely in an 
upper level in the tree, then use BFS since it will check all of the 
upper level first, one by one.

On the other hand, if you know the node is likely at the bottom of the 
tree, then it may be better to use DFS since it will check some of the lower 
levels before the upper levels.

DFS is very good for answering the question "does the path exist" to 
node B from node A, since we traverse each branch/path.

The big advantage of DFS is that it uses less meory than BFS.

The downside of DFS is that it can get slow, especially if the tree 
or graph is very deep. And it's not necessarily good at finding the 
shortest path BFS.


** More on the time and space complexity of BFS and DFS:
https://stackoverflow.com/questions/9844193/what-is-the-time-and-space-complexity-of-a-breadth-first-and-depth-first-tree-tr


1) If you know a solution isn't far from the root, use BFS.

2) If the tree is very deep and solutions are rare, use BFS
(we might take a long time finding the bottom of the tree).

3) If solutions are frequent, but located deep in the tree, use DFS.

4) If you want to determine the path between 2 nodes, use DFS 
(DFS follows branches, not levels).

5) To find the shortest path, use BFS, since it visits the nearest 
nodes first.

6) If the tree is very wide, use DFS, since spanning the breadth 
of each level means tracking each node in the current level
(they are tracked in a queue). If a tree is extremely wide,
it will take up a lot of memory to track each node in a level.