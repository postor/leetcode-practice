/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number}
 */
var minDepth = function (root) {
  if (!root) return 0
  return depth(root)
  function depth(n, d = 1) {
    if (!n) return Number.MAX_SAFE_INTEGER
    if (!n.left && !n.right) return d
    return Math.min(depth(n.left, d + 1), depth(n.right, d + 1))
  }
};