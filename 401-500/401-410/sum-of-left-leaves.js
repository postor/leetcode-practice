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
var sumOfLeftLeaves = function (root) {
  if (!root) return 0
  return r(root)

  function r(n, isLeft = false) {
    if (!n.left && !n.right) {
      return isLeft ? n.val : 0
    }
    let t = 0
    if (n.left) {
      t += r(n.left, true)
    }
    if (n.right) {
      t += r(n.right, false)
    }
    return t
  }

};