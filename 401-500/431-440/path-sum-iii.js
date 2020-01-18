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
 * @return {number}
 */
var pathSum = function (root, sum) {
  return r(root)
  function r(n, vals = []) {
    if (!n) return 0
    let vals1 = vals.map(x => x + n.val)
    vals1.push(n.val)
    let count = 0
    for (let val of vals1) {
      if (val == sum) count++
    }
    count += r(n.left, vals1)
    count += r(n.right, vals1)
    return count
  }
};