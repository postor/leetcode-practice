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
var oddEvenList = function (head) {
  if (!head) return head
  let odds = head, evens = head.next
  if (!evens) return head
  let to = odds, te = evens
  while (true) {
    if (!te.next) break
    if (te.next) {
      to.next = te.next
      to = te.next
      if (!to.next) break
      te.next = to.next
      te = to.next
    }
  }
  te.next = null
  to.next = evens
  return odds
};