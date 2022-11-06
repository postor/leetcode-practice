/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {number} n
 * @return {TreeNode[]}
 */
var generateTrees = function (n) {
  if(n==0) return []
  return recursive(1, n)

  function recursive(from, to) {
    if (from > to) {
      return [null]
    }
    let rtn = []
    for (let i = from; i <= to; i++) {
      let lefts = recursive(from, i - 1)
      let rights = recursive(i + 1, to)
      lefts.forEach(left=>rights.forEach(right=>{
        let n = new TreeNode(i) // eslint-disable-line
        n.left = left
        n.right = right
        rtn.push(n)
      }))
    }
    return rtn
  }
};