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
var swapPairs = function (head) {
  if (!head || !head.next) {
    return head
  }
  let rtn = cur2 = head.next, cur1 = head,tail=null
  while (true) {
    if(tail){
      tail.next = cur2
    }
    let t1 = cur2.next
    cur2.next = cur1
    cur1.next = t1
    tail = cur1
    if (!t1) {
      break
    }
    cur1 = t1
    if (!t1.next) {
      break
    }
    cur2 = t1.next
  }
  return rtn
};

console.log(swapPairs({
  val: 1,
  next: {
    val: 2,
    next: {
      val: 3,
      next: {
        val: 4
      }
    }
  }
}))