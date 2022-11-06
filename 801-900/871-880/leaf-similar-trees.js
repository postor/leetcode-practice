/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root1
 * @param {TreeNode} root2
 * @return {boolean}
 */
var leafSimilar = function (root1, root2) {
  if (!root1 && !root2) return true
  if (!root1 || !root2) return false

  let it1 = genLeaf(root1), it2 = genLeaf(root2)
  for (let x of it1) {
    let { done, value } = it2.next()
    if (value != x) return false
    if (done) return false
  }
  return it2.next().done

  function* genLeaf(n) {
    if (n.left) yield* genLeaf(n.left)
    if (n.right) yield* genLeaf(n.right)
    if (!n.left && !n.right) {
      yield n.val
    }
  }
};



