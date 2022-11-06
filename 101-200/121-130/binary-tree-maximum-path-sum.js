/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number}
 */
var maxPathSum = function (root) {
  let max = Number.MIN_SAFE_INTEGER
  let max2 = maxSum(root)
  return Math.max(max, max2)
  function maxSum(n) {
    if (!n) return Number.MIN_SAFE_INTEGER
    let v = n.val
    let l = maxSum(n.left), r = maxSum(n.right)
    let max1 = Math.max(v, l + v, r + v)
    max = Math.max(max, v, l + v, r + v, l + v + r)
    return max1
  }
};