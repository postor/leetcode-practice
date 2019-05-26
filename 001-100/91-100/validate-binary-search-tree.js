/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {boolean}
 */
var isValidBST = function (root) {
  if (!root) return true
  return !!valid(root)
  function valid(node = root) {
    let rtn = []
    if (node.left) {
      let l = valid(node.left)
      if (!l) return false
      if (l[1] >= node.val) return false
      //记录最小值
      rtn.push(l[0])
    } else {
      rtn.push(node.val)
    }
    if (!node.right) {
      rtn.push(node.val)
      return rtn
    }
    let r = valid(node.right)
    if (!r) return false
    if (r[0] <= node.val) return false
    //记录最大值
    rtn.push(r[1])
    return rtn
  }

};