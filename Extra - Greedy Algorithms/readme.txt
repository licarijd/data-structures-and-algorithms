Greedy Algorithms


We consider problems in which a result comprises a sequence of steps or choices that have
to be made to achieve the optimal solution. Greedy programming is a method by which
a solution is determined based on making the locally optimal choice at any given moment.
In other words, we choose the best decision from the viewpoint of the current stage of the
solution.


The Coin Changing Problem 

For a given set of denominations, you are asked to find the minimum number of coins with
which a given amount of money can be paid. That problem can be approached by a greedy
algorithm that always selects the largest denomination not exceeding the remaining amount
of money to be paid. As long as the remaining amount is greater than zero, the process is
repeated.

A correct algorithm should always return the minimum number of coins. It turns out
that the greedy algorithm is correct for only some denomination selections, but not for all.
For example, for coins of values 1, 2 and 5 the algorithm returns the optimal number of
coins for each amount of money, but for coins of values 1, 3 and 4 the algorithm may return
a suboptimal result. An amount of 6 will be paid with three coins: 4, 1 and 1 by using the
greedy algorithm. The optimal number of coins is actually only two: 3 and 3.

Consider n denominations 0 < m0 <= m1 <= . . . <= mn−1 and the amount k to be paid.

def greedyCoinChanging(M, k):
    n = len(M)
    result = []
    for i in xrange(n - 1, -1, -1):
        result += [(M[i], k // M[i])]
        k %= M[i]
    return result

The function returns the list of pairs: denomination, number of coins. The time complexity
of the above algorithm is O(n) as the number of coins is added once for every denomination


Proving Correctness

If we construct an optimal solution by making consecutive choices, then such a property can
be proved by induction: if there exists an optimal solution consistent with the choices that
have been made so far, then there also has to exist an optimal solution consistent with the
next choice (including the situation when the first choice is made).

For more examples, see /14-GreedyAlgorithms.pdf