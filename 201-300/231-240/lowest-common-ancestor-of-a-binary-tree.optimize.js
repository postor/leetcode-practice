/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @param {TreeNode} p
 * @param {TreeNode} q
 * @return {TreeNode}
 */
var lowestCommonAncestor = function (root, p, q) {
  // get path of each
  let foundNum = 0, curLevel = 0, curNode = null, foundNode = null
  r(root)
  return curNode

  function r(n, level = 0) {
    if (!n) return
    if (test()) return
    r(n.left, level + 1)
    if (test()) return
    r(n.right, level + 1)

    function test() {
      switch (foundNum) {
        case 0: {
          if (n == p || n == q) {
            foundNum++
            curLevel = level
            curNode = n
            foundNode = n
          }
        }
          break
        case 1: {
          if (n == foundNode) return
          if (level < curLevel) {
            curNode = n
            curLevel = level
          }
          if (n == p || n == q) {
            foundNum++
            return true
          }
        }
          break
        default:
          return true
      }
    }
  }
};

let n1 = { val: 1 }
let n4 = { val: 4 }
let n5 = { val: 5, right: n4 }
console.log(lowestCommonAncestor({
  val: 3,
  left: n5,
  right: n1,
}, n5, n1))
