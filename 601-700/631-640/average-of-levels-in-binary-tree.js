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
var averageOfLevels = function (root) {
  let sum = [], count = []
  r(root, 0)
  return sum.map((x, i) => x / count[i])
  function r(n, i) {
    if (!n) return
    count[i] = (count[i] || 0) + 1
    sum[i] = (sum[i] || 0) + n.val
    r(n.left, i + 1)
    r(n.right, i + 1)
  }
};