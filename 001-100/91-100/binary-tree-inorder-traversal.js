/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[]}
 */
var inorderTraversal = function (root) {
  let dq = [{ node: root, expanded: false }], rtn = []
  while (dq.length) {
    let { node, expanded } = dq.pop()
    if (!node) continue
    if (expanded) {
      rtn.push(node.val)
      continue
    }
    if (node.right) {
      dq.push({ node: node.right, expanded: false })
    }
    dq.push({ node, expanded: true })
    if (node.left) {
      dq.push({ node: node.left, expanded: false })
    }
  }
  return rtn
};