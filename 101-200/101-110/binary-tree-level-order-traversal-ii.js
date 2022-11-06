/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[][]}
 */
var levelOrderBottom = function (root) {
  let q = [[0, root]], rtn = [], level = 0, tmp = []
  while (q.length) {
    let [i, n] = q.shift()
    if (i > level) {
      rtn.unshift(tmp)
      tmp = []
      level = i
    }
    if (!n) continue
    tmp.push(n.val)
    q.push([i + 1, n.left])
    q.push([i + 1, n.right])
  }

  tmp.length && rtn.unshift(tmp)
  return rtn
};