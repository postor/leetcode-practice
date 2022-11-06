/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} headA
 * @param {ListNode} headB
 * @return {ListNode}
 */
var getIntersectionNode = function (headA, headB) {
  let arra = [], arrb = [], curA = headA, curB = headB
  while (curA) {
    arra.push(curA)
    curA = curA.next
  }
  while (curB) {
    arrb.push(curB)
    curB = curB.next
  }

  if (arra[arra.length - 1] !== arrb[arrb.length - 1]) {
    //不相交叉
    return null
  }
  let i
  for (i = 2; i <= arra.length && i <= arrb.length; i++) {
    if (arra[arra.length - i] !== arrb[arrb.length - i]) {
      return arra[arra.length - i + 1]
    }
  }
  return arra[arra.length - i + 1]
};

let a = { val: 1, next: { val: 2 } }
console.log(getIntersectionNode(a, a))