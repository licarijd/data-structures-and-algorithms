B- Trees 

In computer science, a B-tree is a self-balancing tree data structure that maintains sorted data
and allows searches, sequential access, insertions, and deletions in logarithmic time.
The B-tree generalizes the binary search tree, allowing for nodes with more than two children.
Unlike other self-balancing binary search trees, the B-tree is well suited for storage systems
that read and write relatively large blocks of data, such as discs. It is commonly used in
databases and file systems.

B+ Trees and Indexing 

A B+ tree is an m-ary tree with a variable but often large number of children per node.
A B+ tree consists of a root, internal nodes and leaves. The root may be either a leaf or a node with two or
more children.

A B+ tree can be viewed as a B-tree in which each node contains only keys (not key–value pairs),
and to which an additional level is added at the bottom with linked leaves.

The primary value of a B+ tree is in storing data for efficient retrieval in a block-oriented
storage context — in particular, filesystems. This is primarily because unlike binary search trees,
B+ trees have very high fanout (number of pointers to child nodes in a node,
typically on the order of 100 or more), which reduces the number of I/O operations required to find
an element in the tree.

Thus, B+ Tree Indexes are the most common index type.

The ReiserFS, NSS, XFS, JFS, ReFS, and BFS filesystems all use this type of tree for metadata indexing;
BFS also uses B+ trees for storing directories. NTFS uses B+ trees for directory and security-related
metadata indexing. EXT4 uses extent trees (a modified B+ tree data structure) for file extent indexing.

