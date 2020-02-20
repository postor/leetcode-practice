/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @param {number} v
 * @param {number} d
 * @return {TreeNode}
 */
var addOneRow = function (root, v, d) {
  if (d === 1) {
    let n = new TreeNode(v)
    n.left = root
    return n
  }
  r(root, 1)
  return root

  function r(n, depth) {
    if (!n) return
    if (depth === d - 1) {
      {
        let t = new TreeNode(v)
        t.left = n.left
        n.left = t
      }
      {
        let t = new TreeNode(v)
        t.right = n.right
        n.right = t
      }
      return
    }
    r(n.left, depth + 1)
    r(n.right, depth + 1)
  }
};