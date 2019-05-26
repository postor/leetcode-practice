/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} n
 * @return {ListNode}
 */
var removeNthFromEnd = function (head, n) {
  let tmpn = head, i = 0, t = head
  while (true) {
    if (i > n) {
      tmpn = tmpn.next
    }
    if (!t.next) {
      break
    }
    t = t.next
    i++
  }
  if (i < n) {
    return tmpn.next
  }
  tmpn.next = tmpn.next.next
  return head
};

print(removeNthFromEnd({
  val: 1,
  next: {
    val: 2,
    next: {
      val: 3,
      next: {
        val: 4,
        next: {
          val: 5
        }
      }
    }
  }
}, 2))

function print(head) {
  let t = head, str = ''
  while (t) {
    str += '|' + t.val
    t = t.next
  }
  console.log(str)
}