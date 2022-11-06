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
var sortList = function (head) {
  return slice(head)

  function slice(h) {
    if (!h || !h.next) return h
    let slow = h, fast = h.next
    while (fast && fast.next) {
      slow = slow.next
      fast = fast.next.next
    }
    let r = slow.next
    slow.next = null
    let l = h
    return merge(slice(l), slice(r))
  }

  function merge(l, r) {
    let h = { next: null }
    let t = h
    while (true) {
      if (!l && !r) return h.next
      if (!l) {
        t.next = r
        r = r.next
        t = t.next
        continue
      }
      if (!r) {
        t.next = l
        l = l.next
        t = t.next
        continue
      }
      if (l.val < r.val) {
        t.next = l
        l = l.next
        t = t.next
        continue
      }
      t.next = r
      r = r.next
      t = t.next
      continue
    }
  }
};

let rtn = sortList({ val: 4, next: { val: 2, next: { val: 1, next: { val: 3 } } } })
console.log(rtn)