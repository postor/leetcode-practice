/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @param {number} k
 * @return {boolean}
 */
var findTarget = function (root, k) {
  let set = new Set
  return r(root)

  function r(n) {
    if (!n) return false
    if (r(n.left)) return true
    if (set.has(k - n.val)) return true
    set.add(n.val)
    return r(n.right)
  }
};

console.log(findTarget({
  val: 1,
  left: {
    val: 0,
    left: { val: -2 }
  },
  right: {
    val: 4,
    left: { val: 3 }
  }
}, 7))