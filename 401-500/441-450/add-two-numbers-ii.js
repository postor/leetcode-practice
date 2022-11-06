/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var addTwoNumbers = function (l1, l2) {
  let stacks = [[], []];
  [l1, l2].forEach((h, i) => {
    let t = h
    while (t) {
      stacks[i].push(t)
      t = t.next
    }
  })

  let step = 0, curNode = null
  while (true) {
    if (!stacks[0].length && !stacks[1].length && !step) break
    let n1 = stacks[0].length ? stacks[0].pop().val : 0
    let n2 = stacks[1].length ? stacks[1].pop().val : 0
    let val = n1 + n2 + step
    if (val >= 10) {
      step = 1
      val = val % 10
    } else {
      step = 0
    }
    if (!curNode) {
      curNode = new ListNode(val)
    } else {
      let node = new ListNode(val)
      node.next = curNode
      curNode = node
    }
  }
  return curNode
};

function ListNode(val) {
  this.val = val;
  this.next = null;
}
