/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @param {TreeNode} p
 * @param {TreeNode} q
 * @return {TreeNode}
 */
var lowestCommonAncestor = function (root, p, q) {
  // get path of each
  let pathes = []
  r(root)
  // if(pathes.length<2) {console.log(pathes);return}

  // find the last same node in pathes
  let [parr, qarr] = pathes
  for (let i = 0; i < Math.min(parr.length, qarr.length); i++) {
    if (parr[i] != qarr[i]) return parr[i - 1]
  }

  function r(n, arr = []) {

    if (pathes.length >= 2) return
    if (!n) return
    // console.log('n.val:'+n.val)
    let newArr = arr.concat([n])
    if (n == p) {
      pathes.push(newArr)
    } else if (n == q) {
      pathes.push(newArr)
    }
    r(n.left, newArr)
    r(n.right, newArr)
  }
};
