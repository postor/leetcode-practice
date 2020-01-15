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
  let map = new Map(), finished = false
    , commonAncestor = null, commonAncestorLevel = 0, recordHigher = false

  r(root, 1)
  return commonAncestor

  function r(n, depth) {
    if (!n) return
    check(n, depth)
    r(n.left, depth + 1)
    if (!finished && recordHigher) {
      if (commonAncestorLevel > depth) {
        commonAncestor = n
        commonAncestorLevel = depth
      }
    }
    r(n.right, depth + 1)
    check(n, depth)
  }

  function check(n, depth) {
    if (finished) return

    // p and q on different branchs
    if (recordHigher) {
      if (commonAncestorLevel > depth) {
        commonAncestor = n
        commonAncestorLevel = depth
      }
      if (n == p || n == q) {
        if (!map.has(n)) finished = true
      }
      return
    }
    if (n == p || n == q) {
      //none yet
      if (map.size == 0) {
        map.set(n, depth)
      }
      //has one
      else if (map.size == 1) {
        // twice this node
        if (map.has(n)) {
          recordHigher = true
          commonAncestorLevel = depth
        }
        // one node is under the other
        else {
          commonAncestor = n == p ? q : p
          finished = true
        }
      }
    }
  }
};

// let o={
//   val: 4,
//   left: { val: 3 },
//   right: { val: 5 }
// },p = {
//   val: 2,
//   left: { val: 0 },
//   right: o
// }, q = {
//   val: 8,
//   left: { val: 7 },
//   right: { val: 9 }
// }
// console.log(lowestCommonAncestor({
//   val: 6,
//   left: p,
//   right: q,
// }, p, o))


// let p = {
//   val: 1
// }, q = {
//   val: 4
// }
// console.log(lowestCommonAncestor({
//   val: 5,
//   left: {
//     val: 3,
//     left: {
//       val: 2,
//       left: p
//     },
//     right: q
//   },
//   right: {
//     val: 6
//   },
// }, p, q))