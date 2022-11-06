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
var levelOrder = function (root) {
  let q = [[0, root]], rtn = []
  while (q.length) {
    let [i, n] = q.shift()
    if (!n) continue
    if (!rtn[i]) rtn[i] = [n.val]
    else rtn[i].push(n.val)
    q.push([i + 1, n.left])
    q.push([i + 1, n.right])
  }
  return rtn
};