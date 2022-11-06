/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {string[]}
 */
var binaryTreePaths = function (root) {
  if (!root) return []
  let rtn = []
  r(root, '' + root.val)
  return rtn
  function r(n, cur) {
    if (!n.left && !n.right) {
      rtn.push(cur)
      return
    }
    if (n.left) {
      r(n.left, `${cur}->${n.left.val}`)
    }
    if (n.right) {
      r(n.right, `${cur}->${n.right.val}`)
    }
  }
};