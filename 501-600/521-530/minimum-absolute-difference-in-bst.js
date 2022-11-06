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
var getMinimumDifference = function (root) {
  if (!root) throw 'empty tree'
  let last = undefined, min = Number.MAX_SAFE_INTEGER
  for (let val of travel(root)) {
    if (last === undefined) {
      last = val
      continue
    }
    min = Math.min(val - last, min)
    last = val
  }
  return min
  function* travel(n) {
    if (n.left) yield* travel(n.left)
    yield n.val
    if (n.right) yield* travel(n.right)
  }
};

console.log(getMinimumDifference({
  val: 1,
  right: {
    val: 3,
    left: {
      val: 2
    }
  }
}))