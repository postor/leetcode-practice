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
var countNodes = function (root) {
  if (!root) return 0
  let depth = travel(root), sum = 0
  for (let i = 0; i < depth; i++) sum += Math.pow(2, i)

  return sum + half(root, depth)

  function half(r, d) {
    if (!d) return r ? 1 : 0
    if (travel(r.left, 'right') == d - 1) {
      return Math.pow(2, d - 1) + half(r.right, d - 1)
    }
    return half(r.left, d - 1)
  }

  function travel(n, path = 'left') {
    if (!n) return -1
    let depth = 0
    let t = n
    while (t[path]) {
      depth++
      t = t[path]
    }
    return depth
  }

};

console.log(countNodes({
  val: 1,
  left: {
    val: 2,
    left: {
      val: 4
    },
    right: {
      val: 5
    }
  },
  right: {
    val: 3
  },
}))