Djikstra and Bellman-Ford Algorithms


** In an interview, you're most likely going to have to implement 
Djikstra or Bellman-Ford algorithms. They're extremely complex, and 
take a very long time. However, you might need to know that they're 
used for a Shortest Path problem.

There's another thing to consider with Graph and Tree traversal,
other than just BFS and DFS. Djikstra and Bellman-Ford algorithms
are used for finding the shortest path in Graphs and Trees, in a 
special case.

BFS is great for the shortest path problem, but there's one thing it 
can't do. It assumes that each jump to another node in a graph (each
path) has the same weight.

With DFS and BFS, we don't really care what kind of weight edges have.

In real life (eg. Google Maps), some paths have higher cost than others.
In Google Maps for example, some roads may have a lot of traffic, or some 
roads may be longer. 

So for weighted graphs, we can't use BFS, since the weight associated with 
edges isn't taken into account! Use Djikstra or Bellman-Ford algorithms instead,
to find the shortest path between to nodes.

Bellman's algorithm is very efficient at finding the shortest path over 
Djikstra's algorithm, because it can accomidate negative weights. If a 
Graph has negative weights, Bellman's algorithm can solve it, but Djikstra's 
can't!

But, Bellman's algorithm can take a long time to run in terms of complexity.
It's not the most efficient algorithm. The worst case is usually O(n^2), so 
it's not very efficient.

On the other hand, Djikstra's algorithm is a little faster and more efficient,
with the downside that it can't accomidate negative weights.