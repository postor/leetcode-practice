/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} root
 * @param {number} k
 * @return {ListNode[]}
 */
var splitListToParts = function (root, k) {
  let total = 0, t = root
  while (t) {
    total += 1
    t = t.next
  }
  let avg = Math.floor(total / k), left = total - avg * k, rtn = new Array(k).fill(null)
  t = root
  // console.log({ avg, left })
  for (let i = 0; i < k; i++) {
    if (!t) return rtn
    let len = left > 0 ? avg + 1 : avg, head = t
    left--
    for (let j = 0; j < len - 1; j++) {
      t = t.next
    }
    let tmp = t
    t = t.next
    tmp.next = null
    rtn[i] = head
  }
  return rtn
};

console.log(splitListToParts({ val: 1, next: { val: 2, next: { val: 3, next: { val: 4 } } } }, 5))