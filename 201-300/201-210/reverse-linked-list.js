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
var reverseList = function (head) {
  if (!head) return head
  let cur = head, next = cur.next
  cur.next = null
  while (next) {
    let t = next.next
    next.next = cur
    cur = next
    next = t
  }
  return cur
};


// console.log(JSON.stringify(reverseList({
//   val: 1,
//   next: {
//     val: 2,
//     next: {
//       val: 3,
//       next: {
//         val: 4,
//         next: null
//       }
//     }
//   }
// })))
