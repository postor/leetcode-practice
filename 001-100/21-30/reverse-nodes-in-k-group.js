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
var reverseKGroup = function (head, k) {
  if(!head) return head
  let arr = [], tail, newHead, cur = head
  while (true) {
    let end = false
    //添加k个到数组
    for (let i = 0; i < k; i++) {
      if (cur) {
        arr.push(cur)
        cur = cur.next
      } else {
        end = true
        break
      }
    }
    //拼接
    if (arr.length === k) {
      let tHead = tcur = arr.pop()
      while(true) {
        const n = arr.pop()
        if(!n){
          break
        }
        tcur.next = n
        tcur = n
      }
      tcur.next = null

      if (tail) {
        tail.next = tHead
      } else {
        newHead = tHead
      }
      tail = tcur
    }else if(arr.length ){
      if(!tail){
        return arr[0]
      }
      tail.next = arr[0]
    }

    if (end) {
      break
    }
  }
  return newHead
};

console.log(reverseKGroup({
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
},2))