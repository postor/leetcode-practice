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
var longestUnivaluePath = function (root) {
  let max = 1
  r(root)
  return max - 1

  function r(n) {
    if (!n) return
    let count = 1, singleChild = 0
    let leftCount = r(n.left), rightCount = r(n.right)
    if (n.left && n.left.val === n.val) {
      count += leftCount
      singleChild = Math.max(leftCount, singleChild)
    }
    if (n.right && n.right.val === n.val) {
      count += rightCount
      singleChild = Math.max(rightCount, singleChild)
    }
    max = Math.max(max, count)
    return Math.max(singleChild + 1)
  }
};