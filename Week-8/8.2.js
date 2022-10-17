/**
 * Validate a Binary Tree
 *
 * Given the root of a binary tree, determine if it is a valid binary search tree (BST).
 *
 * A valid BST is defined as follows:
 * The left subtree of a node contains only nodes with keys less than the node's key. The right subtree of a node contains only nodes with keys greater than the node's key. Both the left and right subtrees must also be binary search trees.
 *
 * ExaMPLE:1
 * Input: root = [2,1,3]Output: true
 */

const createTree = require("./Tree");

function isValidBST(node, min, max) {
  if (node === null) {
    return true;
  }
  //comparing left & right node value with parent
  if (
    (max !== null && node.value > max) ||
    (min !== null && node.value < min)
  ) {
    return false;
  }
  //if b
  if (
    !isValidBST(node.left, min, node.value) ||
    !isValidBST(node.right, node.value, max)
  ) {
    return false;
  }
  return true;
}

let arr = [5, 1, 4, null, null, 3, 6];
root = createTree(arr);

console.log("BST", isValidBST(root, null, null));
