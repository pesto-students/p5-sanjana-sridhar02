/**
 * Problem 8.3: Binary Tree Level Order Traversal
 *
 * Example1:
 * Input: root = [3,9,20,null,null,15,7]
 * Output: [[3],[9,20],[15,7]]
 */

const createTree = require("./Tree");

const levelOrderTraversal = (root) => {
  if (!root) return [];
  let queue = [root];
  let traversal = [];
  while (queue.length) {
    let level = [];
    let size = queue.length;
    for (let i = 0; i < size; i++) {
      let node = queue.shift();
      if (node.left) queue.push(node.left);
      if (node.right) queue.push(node.right);
      level.push(node.value);
    }
    traversal.push(level);
  }
  return traversal;
};

let arr = [3, 9, 20, null, null, 15, 7];
root = createTree(arr);

console.log(levelOrderTraversal(root));
