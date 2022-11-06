/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @param {number} key
 * @return {TreeNode}
 */
var deleteNode = function (root, key) {
  return r(root, key)
  function r(n = root, k = key) {
    if (!n) return n
    if (k == n.val) {
      if (!n.left) return n.right
      if (!n.right) return n.left
      let t = n.right
      while (t.left) {
        t = t.left
      }
      t.left = n.left
      return n.right
    }
    if (k < n.val) {
      n.left = r(n.left, k)
      return n
    }
    n.right = r(n.right, k)
    return n
  }
};