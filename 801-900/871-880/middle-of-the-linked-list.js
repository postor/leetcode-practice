/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var middleNode = function (head) {
  let slow = head, fast = head
  while (fast.next) {
    slow = slow.next
    fast = fast.next
    if (!fast.next) break
    fast = fast.next
  }
  return slow
};