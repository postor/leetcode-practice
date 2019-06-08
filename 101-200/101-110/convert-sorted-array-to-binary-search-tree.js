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
var sortedArrayToBST = function (nums) {
  return r(0, nums.length - 1)
  function r(from, to) {
    if (from > to) return null
    let i = Math.floor((to + from) / 2)

    return {
      val: nums[i],
      left: r(from, i - 1),
      right: r(i + 1, to)
    }
  }
};