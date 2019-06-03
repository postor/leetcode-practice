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
var postorderTraversal = function (root) {
  let rtn = []
  r(root)
  return rtn
  function r(n) {
    if (!n) return
    r(n.left)
    r(n.right)
    rtn.push(n.val)
  }
};