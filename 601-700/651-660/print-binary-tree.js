/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {string[][]}
 */
var printTree = function (root) {
  if (!root) return []
  let maxDepth = getMaxDepth(root)
  let widths = new Array(maxDepth + 1).fill(0)
  for (let i = maxDepth - 1; i >= 0; i--) {
    widths[i] = 2 * widths[i + 1] + 1
  }
  let rtn = new Array(maxDepth).fill(0)
    .map(x => new Array(widths[0]).fill(''))
  assign(root)
  return rtn

  function assign(n, depth = 0, start = 0) {
    if (!n) return
    let pos = start + widths[depth + 1]
    rtn[depth][pos] = '' + n.val
    assign(n.left, depth + 1, start)
    assign(n.right, depth + 1, pos + 1)
  }

  function getMaxDepth(n, cur = 0) {
    if (!n) return cur
    return Math.max(getMaxDepth(n.left, cur + 1), getMaxDepth(n.right, cur + 1))
  }
};

// console.log(printTree({
//   val: 1,
//   left: { val: 2 }
// }).map(x => x.join('\t')).join('\n'))