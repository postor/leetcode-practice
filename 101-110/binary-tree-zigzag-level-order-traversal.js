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
var zigzagLevelOrder = function (root) {
  let qs = [[[0, root]], []], rtn = [], qi = 0, tmprtn = []
  while (true) {
    if (qs[qi].length) {
      let [i, n] = qs[qi].shift()
      if (!n) continue
      (i + 1) % 2 ? tmprtn.push(n.val) : tmprtn.unshift(n.val)
      qs[(i + 1) % 2].push([i + 1, n.left])
      qs[(i + 1) % 2].push([i + 1, n.right])
      continue
    }
    // 空了换队列
    qi = qi ? 0 : 1
    tmprtn.length && rtn.push(tmprtn)
    tmprtn = []
    if (!qs[qi].length) break
  }
  return rtn

};



console.log(zigzagLevelOrder({
  val: 1,
  left: {
    val: 2,
    left: { val: 4 }
  },
  right: {
    val: 3,
    right: { val: 5 }
  }
}).join('\n'))