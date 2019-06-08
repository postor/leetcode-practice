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
var rightSideView = function (root) {
  let rtn = []
  r(root, 0)
  return rtn
  function r(n, i) {
    if (!n) return
    if (rtn[i] === undefined) rtn[i] = n.val
    r(n.right, i + 1)
    r(n.left, i + 1)
  }
};