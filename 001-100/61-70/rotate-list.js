/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} k
 * @return {ListNode}
 */
var rotateRight = function (head, k) {
  if (!head) return null

  let count = 0, t = head
  //找到尾巴，拼成环，并记录长度
  while (true) {
    count++
    if (!t.next) {
      break
    }
    t = t.next
  }
  t.next = head

  //k%count处打断，返回新的头
  let j = count - k % count
  for (let i = 0; i < j; i++) {
    t = t.next
  }
  let newHead = t.next
  t.next = null
  return newHead
};