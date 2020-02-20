/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} t
 * @return {string}
 */
var tree2str = function (t) {
  let rtn = r(t)
  return rtn.substr(1, rtn.length - 2)

  function r(n) {
    if (!n) return '()'
    if (n.right) {
      return `(${n.val}${r(n.left)}${r(n.right)})`
    }
    if (n.left) {
      return `(${n.val}${r(n.left)})`
    }
    return `(${n.val})`
  }
};

console.log(tree2str({
  val: 1,
  left: {
    val: 2,
    left: { val: 4 }
  },
  right: { val: 3 }
}))

console.log(tree2str({
  val: 1,
  left: {
    val: 2,
    right: { val: 4 }
  },
  right: { val: 3 }
}))