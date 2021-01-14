/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @param {number} val
 * @return {TreeNode}
 */
var insertIntoBST = function (root, val) {
  if (!root) return new TreeNode(val)
  let t = root
  while (true) {
    if (val > t.val) {
      if (t.right) {
        t = t.right
        continue
      }
      t.right = new TreeNode(val)
      return root
    }

    if (t.left) {
      t = t.left
      continue
    }
    t.left = new TreeNode(val)
    return root
  }
};