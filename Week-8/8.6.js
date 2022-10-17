/**
 * Problem 8.6: All Path from source to target
 *
 * LeetCode link:https://leetcode.com/problems/all-paths-from-source-to-target/
 * Example1:
 * Input: graph = [[1,2],[3],[3],[]]
 * Output: [[0,1,3],[0,2,3]]
 */

const allPathsSourceTarget = (graph) => {
  let seed = [[0]]; // starting point
  let N = graph.length - 1; // idx of last node
  let R = []; // result
  const last = (a) => a[a.length - 1];

  while (seed.length > 0) {
    let S = [];
    for (const s of seed) {
      for (const g of graph[last(s)]) {
        // if end reached add path to result array
        // otherwise add visiting node to path
        (g == N ? R : S).push([...s, g]);
      }
    }
    seed = S;
  }
  return R;
};

console.log(allPathsSourceTarget([[1, 2], [3], [3], []]));
