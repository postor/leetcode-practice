/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} p
 * @param {TreeNode} q
 * @return {boolean}
 */
var isSameTree = function (p, q) {
  let a = ge(p), b = ge(q)
  while (true) {
    let v1 = a.next(), v2 = b.next()
    if (v1.done != v2.done) return false
    if (v1.done) return true
    if (v1.value !== v2.value) return false
  }

  function* ge(n) {
    if (n) {
      yield n.val
      yield* ge(n.left)
      yield* ge(n.right)
    }else{
      yield null
    }
    
  }
};