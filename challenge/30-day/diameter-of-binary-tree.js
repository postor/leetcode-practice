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
 * @return {number}
 */
var diameterOfBinaryTree = function (root) {
  let max = 0
  maxLen(root)
  return max
  function maxLen(node) {
    if (!node) return 0
    let l = maxLen(node.left) + (node.left ? 1 : 0), r = maxLen(node.right) + (node.right ? 1 : 0)
    max = Math.max(max, l + r)
    return Math.max(l, r)
  }
};

console.log(diameterOfBinaryTree({
  val: 1,
  left: {
    val: 2,
    left: {
      val: 4
    },
    right: {
      val: 5
    }
  },
  right: {
    val: 3
  }
}))