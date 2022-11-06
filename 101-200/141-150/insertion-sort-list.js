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
var insertionSortList = function (head) {
  if (!head || !head.next) return head
  let l = head, r = head.next
  l.next = null
  while (r) {
    let t = r
    r = r.next
    l = insert(l, t)
  }
  return l
  function insert(l, n) {
    if (n.val < l.val) {
      n.next = l
      return n
    }

    let t = l
    while (t.next) {
      if (n.val < t.next.val) {
        n.next = t.next
        t.next = n
        return l
      }
      t = t.next
    }
    t.next = n
    n.next = null
    return l
  }
};