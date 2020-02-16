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
var findTilt = function (root) {
  let tilt = 0
  sum(root)
  return tilt

  function sum(n) {
    if (!n) return 0
    let l = sum(n.left), r = sum(n.right)
    tilt += Math.abs(l - r)
    return l + r + n.val
  }
};