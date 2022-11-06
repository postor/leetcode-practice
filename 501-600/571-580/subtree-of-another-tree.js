/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} s
 * @param {TreeNode} t
 * @return {boolean}
 */
var isSubtree = function (s, t) {
  let lrnT = [...lrn(t)], lrnS = [...lrn(s)]
  outer:
  for (let i = 0; i <= lrnS.length - lrnT.length; i++) {
    for (let j = 0; j < lrnT.length; j++) {
      if (lrnS[i + j] !== lrnT[j]) continue outer
    }
    return true
  }
  return false

  function* lrn(n) {
    if (n.left) yield* lrn(n.left)
    if (n.right) yield* lrn(n.right)
    if (!n.left && !n.right) yield true
    yield n.val
  }
};

let t = {
  val: 4,
  left: { val: 1 },
  right: { val: 2 }
}, s = {
  val: 3,
  left: {
    val: 4,
    left: {
      val: 1,
      left: { val: 0 }
    },
    right: { val: 2 }
  },
  right: { val: 5 }
}

console.log(isSubtree(s, t))