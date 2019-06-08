/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} val
 * @return {ListNode}
 */
var removeElements = function (head, val) {
  let cur = head, rtn = rtnCur = null
  while (cur) {
    if (cur.val != val) {
      if (!rtnCur) {
        rtn = rtnCur = cur
      } else {
        rtnCur.next = cur
        rtnCur = cur
      }
    }
    cur = cur.next
  }
  rtnCur && (rtnCur.next = null)
  return rtn
};

removeElements({
  val:1,
  next:{
    val:2,
    next: {
      val:3
    }
  }
},2)