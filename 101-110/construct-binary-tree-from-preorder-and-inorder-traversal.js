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

  function r(pre = preorder, ino = inorder, asigned = false) {
    if (asigned === false && !pre.length) return null
    let v = asigned === false ? pre.shift() : asigned
    let i = ino.indexOf(v)
    let left = ino.slice(0, i)
    let right = ino.slice(i + 1)
    let n = { val: v, left: null, right: null }
    if (left.length) {
      if (right.length) {
        let a = pre.shift()
        let b = pre.shift()
        n.left = r(preorder, left, a)
        n.right = r(preorder, right, b)
        return n
      }
      n.left = r(preorder, left)
      return n
    }
    if (right.length) {
      n.right = r(preorder, right)
    }
    return n
  }
};

print(buildTree([3, 9, 20, 15, 7], [9, 3, 15, 20, 7]))
function print(h) {
  let rtn = []
  
  console.log(rtn)
  function r(h){
    if(!h) return
    r(h.left)
    r(h.right)
  }
}