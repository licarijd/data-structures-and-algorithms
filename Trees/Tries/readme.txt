Tries

A Trie is a specialized tree used in searching (most often text search).

In most cases, it can outperform binary search trees, hashtables,
and most other data structures depending on the kind of search 
we're doing.

Tries let you know if a word, or part of a word, exists in a body of 
text.

A Trie usually has an empty root node, which is the start. From there, 
letters are added.

It's not a Binary Tree - it can have multiple children.


Trie Example 


                                    Start 
                        /          /      \        \
                    A           D          N         Z
                  /    \       /          /  \         \
                R       S      O         E    O         E 
               /               |        /      \          \
              E               T         W       T          N 
                                        |
                                        S


In the example, it's likely 26 children since there are 26b letters in the 
alphabet.

When we search for 'N', for example, we know right away that there are 
2 words associated with 'N' ("News" and "NOT"), by following N's 
subtrees.

Another name for a Trie is "Prefix Tree". It's a tree-like structure which is
very useful to solving these sorts of problems involving strings.

You can think about it like autocompletion; if you search something on Google,
it knows what you might be searching for. This is what Tries are used 
for - searching words in a dictionary; providing autocomplete suggestions;
IP routing.

If we typed in 'A', we know that all the children are related to 
'A', and we can print out "ARE', and 'AS'.

The benefit of this data structure is speed and space.


Word lookups are done efficiently; we don't need to search every node. 
Instead, we just need to find the length of the word. So, the Big-O 
of a Trie is:

O(length of the word)

So, if we look for the word 'ARE', we just:

1) Look for the letter 'A'

2) Look for the letter 'R' on the next level

3) Look for the letter 'E' on the next level

When it comes to space complexity, tries also have a major advantage,
since the same prefix (like 'N') is used in multiple words. That way, 
the prefixes only get stored once!