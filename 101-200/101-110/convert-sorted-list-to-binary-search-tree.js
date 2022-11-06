/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {ListNode} head
 * @return {TreeNode}
 */
var sortedListToBST = function (head) {
  return bst(arr(head))
  function arr(l) {
    let r = [], t = l
    while (t) {
      r.push(t.val)
      t = t.next
    }
    return r
  }
  function bst(nums) {
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
  }
};