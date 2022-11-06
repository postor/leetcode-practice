/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} m
 * @param {number} n
 * @return {ListNode}
 */
var reverseBetween = function (head, m, n) {
  // 跳过开始
  let h = { next: head }, cur = h
  for (let i = 0; i < m - 1; i++) {
    cur = cur.next
  }

  // 要翻转的入栈
  let t = cur, stack = []
  for (let i = 0; i < n - m + 1; i++) {
    stack.push(t.next)
    t = t.next
  }
  let after = t.next

  // 从栈取出填入
  while (stack.length) {
    let poped = stack.pop()
    cur.next = poped
    cur = cur.next
  }
  cur.next = after
  return h.next
};

let rtn = reverseBetween({
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
}, 2, 4)
print(rtn)
function print(h) {
  let r = [], t = h
  while (t) {
    r.push(t.val)
    t = t.next
  }
  console.log(r)
}