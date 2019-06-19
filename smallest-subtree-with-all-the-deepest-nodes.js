/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {TreeNode}
 */
var subtreeWithAllDeepest = function (root) {
  // find depth and total
  let depthCounts = []
  r1(root)
  let depth = depthCounts.length - 1
  let total = depthCounts[depth]

  // find common ansistor of first and last deepest
  let foundNum = 0, curLevel = 0, curNode = null, foundNode = null
  r(root)
  return curNode

  
  function r(n, level = 0) {
    if (!n) return
    if (test()) return
    r(n.left, level + 1)
    if (test()) return
    r(n.right, level + 1)

    function test() {
      if (!foundNum) {
        if (level == depth) {
          foundNum++
          curLevel = level
          curNode = n
          foundNode = n
        }
        return
      }
      if (foundNum < total) {
        if (n == foundNode) return
        foundNode = n
        if (level < curLevel) {
          curNode = n
          curLevel = level
        }
        if (level == depth) {
          foundNum++
          if (foundNum == total) return true
        }
      }
    }
  }
  // depth and count
  function r1(n, depth = 0) {
    if (!n) return
    depthCounts[depth] = (depthCounts[depth] || 0) + 1
    r1(n.left, depth + 1)
    r1(n.right, depth + 1)
  }
};