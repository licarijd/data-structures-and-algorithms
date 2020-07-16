// We're going to create an indirected, unweighted graph.
// For the Adjacency List, we're going to use a Hash Table.


class Graph {

    constructor() {

        this.numberOfNodes = 0
        this.adjacencyList = {}
    }

    addVertex(node) {

        if (this.adjacencyList[node]) {

            console.log("Node has already been added!")

            return this
        } else {

            this.adjacencyList[node] = []
            this.numberOfNodes++

            return this
        }
    }

    addEdge(node1, node2) {

        if (this.adjacencyList[node1] && this.adjacencyList[node2]) {

            this.adjacencyList[node1].push(node2)
            this.adjacencyList[node2].push(node1)

            return this
        } else {

            console.log("nodes don't exist in the graph, please add them!")

            return this
        }
    }

    showConnections() {

        const allNodes = Object.keys(this.adjacencyList)

        for (let node of allNodes) {

            let nodeConnections = this.adjacencyList[node]
            let connections = ""
            let vertex 

            for (vertex of nodeConnections) {

                connections += vertex + " "
            }

            console.log(node + " --> " + connections)
        }
    }
}

const myGraph = new Graph()

myGraph.addVertex('0')
myGraph.addVertex('1')
myGraph.addVertex('2')
myGraph.addVertex('3')
myGraph.addVertex('4')
myGraph.addVertex('5')
myGraph.addVertex('6')

myGraph.addEdge('3', '1')
myGraph.addEdge('3', '4')

myGraph.addEdge('4', '2')
myGraph.addEdge('4', '5')

myGraph.addEdge('1', '2')
myGraph.addEdge('1', '0')

myGraph.addEdge('0', '2')

myGraph.addEdge('6', '5')

// Answer:
// 0 --> 1 2
// 1 --> 3 2 0
// 2 --> 4 1 0
// 3 --> 1 4
// 4 --> 3 2 5
// 5 --> 4 6
// 6 --> 5