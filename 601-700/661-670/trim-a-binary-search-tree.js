/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @param {number} L
 * @param {number} R
 * @return {TreeNode}
 */
var trimBST = function (root, L, R) {
  const otherChild = { right: 'left', left: 'right' }
  const limits = { right: x => x <= R, left: x => x >= L }

  return trimSide(trimSide(root, 'right'), 'left')

  function trimSide(node, side = 'left') {
    if (!node) return null
    if (limits[side](node.val)) {
      node[side] = trimSide(node[side], side)
      return node
    }
    return trimSide(node[otherChild[side]], side)
  }
};