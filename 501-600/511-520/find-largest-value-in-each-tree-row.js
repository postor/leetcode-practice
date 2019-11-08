/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[]}
 */
var largestValues = function (root) {
  let rtn = []
  r(root)
  return rtn

  function r(n, depth = 0) {
    if (!n) return
    rtn[depth] = rtn[depth] === undefined
      ? n.val
      : Math.max(rtn[depth], n.val)
    r(n.left, depth + 1)
    r(n.right, depth + 1)
  }
};