Graphs


Graphs are one of the most popular data structures in Computer Science when it comes to modelling.

A Graph is a set of values that are related in a pairwise fashion.

Each item is a Node (vertex), and they are connected by edges. So graphs are great for modelling real life relationships.

Facebook uses Graphs for social networks, and Amazon uses them for recommendations.

Google Maps uses graphs for determining the shortest path.

Graphs encompass things like trees and linked lists. So even though the following model of edges and vertices is linear,
it's still a graph.


V ----- V ----- V


Linked Lists are a type of tree, and trees are a type of graph.


There are certain characteristics which allow us to describe graphs.


Directed and Undirected Graphs 


Directed Graphs

- these graphs are good for describing traffic flow, for example. Or, some kind of a system where movement is not bi-directional
(Bi-directional movement can still be allowed; a directed graph just means we can direct traffic flow. So if we want to allow/disallow
certain directions, we can)


Undirected Graphs 

- traffic flow can follow either (any) direction


Facebook connections, for example, would be a good example of an undirected (bi-directional) graph. If you are friends with someone,
they are also friends with you.

Twitter followers, for example, would be a good example of a directed graph. If someone is following you, you are not necessarily 
following them.


Weighted vs. Unweighted Graphs 


Values can be applied to various aspects of a graph (see https://www.udemy.com/course/master-the-coding-interview-data-structures-algorithms/learn/lecture/12370680#overview
at 1:40). Edges can have a corresponding value associated with them (travelling in a certain path has a cost associated
with it). 

Google Maps, for example, could use a weighted graph to try and figure out the shortest path (path with the least cost).

Weighted Graphs are often used to calculate optimal paths.


Cyclic vs Acyclic

When you have vertices that are connected in a circular fashion, it's called a cycle (you can travel from a node, and eventually come back 
to the same node).

Cyclic Graphs are expecially common in Weighted Graphs, such as Google Maps, because most of the time, their is a way to 
get back.


Graphs are combinations of these:

- undirected, unweighted, cyclic graphs

- undirected, weighted, cyclic graphs 

- directed, weighted, acyclic graphs

etc...


Directed Acyclic Graphs (DAGs) are quite common; a popular 
blockchain project called iota uses it. 
DAG exmaple: https://www.udemy.com/course/master-the-coding-interview-data-structures-algorithms/learn/lecture/12371108#content


Graphs are built on top of other data structures. For example,
Trees and Linked Lists can be used to build the DAG in the 
example in the link above.

See the Graph Implementation Example


** Graphs are typically not discussed during interviews,
since questions can take a long time to do.


When it comes to performance and Big-O, things get complicated, 
since there are so many different kinds of Graph.

Graphs are very useful when it comes to relationships. Some data just 
needs to be in Graph form. There are algorithms for Graphs which allow us 
to perform operations, like finding the shortest path, or traversal.

But since Graphs can become complicated, scaling is pretty hard. You need a 
lot of resources and engineering poiwer to make sure that Graphs scale well.

Most developers will never have to implement their own Graph in production.

There are tools like Neo4j, which is a popular database that allows you to 
build really fast Graph databases. Most of the time, tools like Neo4j will be 
used to build complex structures for our data.
