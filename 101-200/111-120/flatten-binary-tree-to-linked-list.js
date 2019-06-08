/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {void} Do not return anything, modify root in-place instead.
 */
var flatten = function (root) {
  if (!root) return root
  let last = root
  r(root)

  function r(n) {
    if (!n) return
    let { left, right } = n
    if (last != n) {
      last.right = n
      last = n
    }
    n.left = null
    r(left)
    r(right)
  }

};