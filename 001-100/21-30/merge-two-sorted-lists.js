/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var mergeTwoLists = function (l1, l2) {
  let head, cur, c1 = l1, c2 = l2
  while (true) {
    const t = getNext()
    if (!t) {
      return head||t
    }
    if (!head) {
      head = cur = t
    } else {
      cur.next = t
      cur = cur.next
    }
  }

  function getNext() {
    if (c1) {
      if (c2) {
        if (c1.val > c2.val) {
          const t = c2
          c2 = c2.next
          return t
        }
        const t = c1
        c1 = c1.next
        return t
      }
      const t = c1
      c1 = c1.next
      return t
    }
    if (c2) {
      const t = c2
      c2 = c2.next
      return t
    }
    return c1
  }
};