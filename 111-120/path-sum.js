/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @param {number} sum
 * @return {boolean}
 */
var hasPathSum = function (root, sum) {
  if (!root) return false
  return depth(root)
  function depth(n, d = 0) {
    if (!n) return false
    if (!n.left && !n.right) return (d + n.val) == sum
    return depth(n.left, d + n.val) || depth(n.right, d + n.val)
  }
};