/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {number[]} inorder
 * @param {number[]} postorder
 * @return {TreeNode}
 */
var buildTree = function (inorder, postorder, ) {
  return r()

  function r(post = postorder, ino = inorder) {
    if (!post.length) return null
    let v = post.pop()
    let i = ino.indexOf(v)
    let left = ino.slice(0, i)
    let right = ino.slice(i + 1)
    let n = { val: v, left: null, right: null }
    if (right.length) {
      n.right = r(post, right)
    }
    if (left.length) {
      n.left = r(post, left)
    }
    return n
  }
};