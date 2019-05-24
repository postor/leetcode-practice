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
var sumNumbers = function (root) {
  if (!root) return 0
  return r(root, 0)
  function r(n, v) {
    let t1 = v * 10 + n.val
    if (!n.left && !n.right) {
      return t1
    }
    let t2 = 0
    if (n.left) {
      t2 += r(n.left, t1)
    }
    if (n.right) {
      t2 += r(n.right, t1)
    }
    return t2
  }
};

console.log(sumNumbers({ val: 1, left: { val: 2 }, right: { val: 3 } }))