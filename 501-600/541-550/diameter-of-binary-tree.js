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
var diameterOfBinaryTree = function (root) {
  let max = 0
  maxDepth(root)
  return max
  function maxDepth(n) {
    if (!n) return 0
    let l = maxDepth(n.left), r = maxDepth(n.right)
    max = Math.max(max, l + r)
    return Math.max(l + 1, r + 1)
  }
};

// console.log(diameterOfBinaryTree({
//   val: 1,
//   left: {
//     left: {},
//     right: {},
//   },
//   right: {}
// }))