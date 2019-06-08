/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} head
 * @return {boolean}
 */
var detectCycle = function (head) {
  let slow = head, fast = head
  while (true) {
    if (!(slow && fast && fast.next)) return null
    slow = slow.next
    fast = fast.next.next
    if (slow == fast) break
  }
  let t = head
  while (t && slow) {
    if (t == slow) {
      return t
    }
    t = t.next
    slow = slow.next
  }

};

let n1 = { val: 1 }
n1.next = { val: 2, next: n1 }

console.log(detectCycle({val:1}))