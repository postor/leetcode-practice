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
  if (!root) return []
  let q = [[0, root]], rtn = [[root.val]],tmprtn=[]
  while (q.length) {
    let [i, n] = q.shift()    
    if (n.left) {
      q.push([i + 1, n.left])
      tmprtn.push(n.left.val)
    }
    if (n.right) {
      q.push([i + 1, n.right])
        ;
      tmprtn.push(n.right.val)
    }
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