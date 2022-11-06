/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {boolean}
 */
var isBalanced = function (root) {
  return !r(root)

  function r(n) {
    if (!n) return
    let dif = Math.abs(depth(n.left) - depth(n.right))
    if(dif>1) return true
    return r(n.left) || r(n.right)
  }


  function depth(n, d = 0) {
    if (!n) return d
    return Math.max(depth(n.left, d + 1), depth(n.right, d + 1))
  }
};