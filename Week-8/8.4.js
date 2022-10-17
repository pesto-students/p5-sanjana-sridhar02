/**
 * Find if Path Exists in Graph
 *
 *
 * Input: n = 3, edges = [[0,1],[1,2],[2,0]], source = 0, destination = 2
 *
 * Output: true
 */

const checkPath = (n, edges, source, destination) => {
  if (source === destination) return true;
  const graph = [];
  for (let i = 0; i < n; i++) {
    graph[i] = [];
  }

  const seen = new Set();
  const stack = [];
  for (let i = 0; i < edges.length; i++) {
    graph[edges[i][0]].push(edges[i][1]);
    graph[edges[i][1]].push(edges[i][0]);
  }

  stack.push(source);
  while (stack.length > 0) {
    const vertex = stack.pop();
    if (vertex === destination) return true;
    if (seen.has(vertex)) continue;
    seen.add(vertex);
    const neighbs = graph[vertex];
    for (let i = 0; i < neighbs.length; i++) {
      stack.push(neighbs[i]);
    }
  }

  // we haven't found it
  return false;
};

let n = 3,
  edges = [
    [0, 1],
    [1, 2],
    [2, 0],
  ],
  source = 0,
  destination = 2;
console.log(checkPath(n, edges, source, destination));
