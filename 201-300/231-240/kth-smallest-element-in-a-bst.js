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
 * @return {number}
 */
var kthSmallest = function (root, k) {
  let it = gen(root)
  for (let i = 0; i < k - 1; i++)it.next()
  let { value } = it.next()
  return value

  function* gen(n) {
    if (n.left) yield* gen(n.left)
    yield n.val
    if (n.right) yield* gen(n.right)
  }
};