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
var rob = function (root) {
  let cacheNode = new Map()
  let cacheChildren = new Map()

  let rtn = Math.max(robChildren(root), robNode(root))
  return rtn

  function robChildren(n) {
    if (!n) return 0
    let cached = cacheChildren.get(n)
    if (cached !== undefined) return cached
    let rtn = Math.max(robChildren(n.left), robNode(n.left))
      + Math.max(robChildren(n.right), robNode(n.right))
      cacheChildren.set(n, rtn)
    return rtn
  }

  function robNode(n) {
    if (!n) return 0
    let cached = cacheNode.get(n)
    if (cached !== undefined) return cached
    let rtn = n.val + robChildren(n.left) + robChildren(n.right)
    cacheNode.set(n, rtn)
    return rtn
  }
};

console.log(rob({
  val: 3,
  left: {
    val: 2,
    right: { val: 3 }
  },
  right: {
    val: 3,
    right: { val: 1 }
  }
}))