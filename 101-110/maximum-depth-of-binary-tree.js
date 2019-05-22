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
var maxDepth = function (root) {
  let max = 0
  r()
  return max

  function r(n = root, cur = 0) {
    if (!n) return
    let l = cur + 1
    max = Math.max(max, l)
    r(n.left, l)
    r(n.right, l)
  }

};