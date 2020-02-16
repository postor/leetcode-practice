/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {TreeNode}
 */
var convertBST = function (root) {
  let sum = 0
  r(root)
  return root

  function r(n) {
    if (!n) return
    r(n.right)
    let t = n.val
    n.val += sum
    sum += t
    r(n.left)
  }

};