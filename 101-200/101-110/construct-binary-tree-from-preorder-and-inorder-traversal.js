/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {number[]} preorder
 * @param {number[]} inorder
 * @return {TreeNode}
 */
var buildTree = function (preorder, inorder) {
  return r()

  function r(pre = preorder, ino = inorder) {
    if (!pre.length) return null
    let v = pre.shift()
    let i = ino.indexOf(v)
    let left = ino.slice(0, i)
    let right = ino.slice(i + 1)
    let n = { val: v, left: null, right: null }
    if (left.length) {
      n.left = r(preorder, left)
    }
    if (right.length) {
      n.right = r(preorder, right)
    }
    return n
  }
};