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
var preorderTraversal = function (root) {
  let rtn = []
  r(root)
  return rtn
  function r(n) {
    if(!n) return
    rtn.push(n.val)
    r(n.left)
    r(n.right)
  }
};