/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {number[]} nums
 * @return {TreeNode}
 */
var constructMaximumBinaryTree = function (nums) {
  let stack = []
  for (let num of nums) {
    let node = new TreeNode(num)
    node.left = collect(num)
    stack.push(node)
  }
  return collect(Number.MAX_SAFE_INTEGER)

  function collect(max) {
    let t = null
    while (stack.length) {
      let t1 = stack.pop()
      if (t1.val < max) {
        t1.right = t
        t = t1
        continue
      }
      stack.push(t1)
      break
    }
    return t
  }
};