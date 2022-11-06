/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} x
 * @return {ListNode}
 */
var partition = function (head, x) {
  let l = { next: null }, r = { next: head }
  let tl = l, tr = r
  while (true) {
    if (!tr.next) {
      break
    }
    if (tr.next.val < x) {
      tl.next = tr.next
      tl = tl.next
      tr.next = tl.next
      //tl.next = null
      continue
    }
    tr = tr.next
  }
  tl.next=r.next
  return l.next
};