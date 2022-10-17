/**
 * Problem 8.1: Maximum Depth of Binary Tree
 *
 * Example 1:
 * Input: root = [3,9,20,null,null,15,7]
 * Output: 3
 *
 * Example 2:
 * Input: root = [1,null,2]
 * Output: 2
 */

const createTree = require("./Tree");

const maxDepth = function (root) {
  console.log({ root });
  if (root === null) return 0;
  return Math.max(maxDepth(root.left) + 1, maxDepth(root.right) + 1);
};

let arr = [1, null, 3];
let arr2 = [3, 9, 20, null, null, 15, 7];
root = createTree(arr);

console.log(maxDepth(root));
