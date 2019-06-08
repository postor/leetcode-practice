/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @param {number} sum
 * @return {number[][]}
 */
var pathSum = function (root, sum) {
  return depth(root)
  function depth(n, d = 0, arr = []) {

    if (!n) return []
    if (!n.left && !n.right) return (d + n.val) == sum ? [arr.concat(n.val)] : []
    return depth(n.left, d + n.val, arr.concat(n.val))
      .concat(depth(n.right, d + n.val, arr.concat(n.val)))
  }
};