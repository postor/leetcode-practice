/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @return {void} Do not return anything, modify head in-place instead.
 */
var reorderList = function (head) {
  if (!head) return head
  let t = head, q = []
  while (t) {
    q.push(t)
    t = t.next
  }
  let last = q.shift()
  while (q.length) {
    let r = q.pop()
    last.next = r
    last = r
    let l = q.shift()
    if (!l) break
    last.next = l
    last = l
  }
  last.next = null
  return head
};