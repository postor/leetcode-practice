/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} t1
 * @param {TreeNode} t2
 * @return {TreeNode}
 */
var mergeTrees = function (t1, t2) {
  if (!t1) return t2
  if (!t2) return t1
  let n = new TreeNode(t1.val + t2.val)
  n.left = mergeTrees(t1.left, t2.left)
  n.right = mergeTrees(t1.right, t2.right)
  return n
};