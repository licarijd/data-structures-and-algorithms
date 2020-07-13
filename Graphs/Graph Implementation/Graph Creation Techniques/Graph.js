// A Graph Implementation

// One way we can build a graph is with an Edge List.

// We're going to build the following graph (undirected, unweighted, acyclic):

/*          2 --------- 0

        /       \

    1 ----------- 3                */

// Edge List
const graph0 = [
    [0, 2], // vertice 0 is connected to vertice 2
    [2, 3], // vertice 2 is connected to vertice 3
    [2, 1],
    [1, 3]
]

// The Edge List simply defines connections.
// We can have a list of objects instead of list of lists
// to make things more explicit. For example, at index 0 we could 
// have { 0, 2, 50 } to indicate a connection from vertice 0
// to vertice 2, with weight 50.


// Another way we can define a graph is with an Adjacency List,
// where the index is the node, and the value is the node's
// neighbours. Each array index represents a vertice.

// Adjacency List
const graph1 = [
    [2], // vertice 0 is connected to vertice 2
    [2, 3], // 1 is connected to vertices 2 and 3
    [0, 1, 3],
    [1, 2]
]

// We can use an array of objects instead to be clearer,
// and give a key and a value. For example, with a weighted graph,
// the value at index 0 could be new [{ 2, 50 }], indicating a single
// connection from vertice 0 to 2 with weight 50.


// Another way we can define a graph is with an Adjacency Matrix,
// which is a matrix which is full of 0s and 1s to indicate whether 
// node x has a connection to node y. 0 = no, 1 = yes.
// If we have a weighted graph, we can use weights instead of
// 1s and 0s.
const graph = [
    [0, 0, 1, 0], // Vertice 0 has only 1 connection, to vertice 2
    [0, 0, 1, 1], // vertice 1 has connections to vertices 2 and 3
    [1, 1, 0, 1],
    [0, 1, 1, 0]
]

// Once again, we can use an array of key-value pairs, 
// rather than an array of arrays, to make things more 
// explicit.

