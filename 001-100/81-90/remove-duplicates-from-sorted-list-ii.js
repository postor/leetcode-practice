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
var deleteDuplicates = function (head) {
  if (!head) return head
  let l = new ListNode(0)
  l.next = head
  let r = l
  while (r && r.next) {
    const { count, next } = countSame(r.next)
    if (count > 1) {
      r.next = next ? next.next : null
      continue
    }
    r = r.next
  }
  return l.next

  /**
   * 
   * @param {ListNode} h 
   */
  function countSame(h) {
    if (!h) return {}
    let count = 1, val = h.val, cur = h
    while (cur && cur.next && cur.next.val === val) {
      cur = cur.next
      count++
    }
    return {
      count,
      next: cur,
    }
  }
};

let result = deleteDuplicates({
  val: 1,
  next: {
    val: 2,
    next: {
      val: 3,
      next: {
        val: 3,
        next: {
          val: 4,
          next: {
            val: 4,
            next: {
              val: 5,
            }
          }
        }
      }
    }
  }
})

console.log(toArray(result))

function toArray(h) {
  let cur = h
  let rtn = []
  while (cur) {
    rtn.push(cur.val)
    cur = cur.next
  }
  return rtn
}

function ListNode(val) {
  this.val = val;
  this.next = null;
}