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
var findSecondMinimumValue = function (root) {
  if (!root) return -1
  let min = root.val
  return r(root)
  function r(n) {
    if (!n) return -1
    if (n.val !== min) return n.val
    let l1 = r(n.left), r1 = r(n.right)
    if (l1 === -1) return r1
    if (r1 === -1) return l1
    return Math.min(l1, r1)
  }
};

//[1,1,3,1,1,3,4,3,1,1,1,3,8,4,8,3,3,1,6,2,1]
console.log(findSecondMinimumValue(require('../../tmp/arr-to-tree')([1, 1, 3, 1, 1, 3, 4, 3, 1, 1, 1, 3, 8, 4, 8, 3, 3, 1, 6, 2, 1])))