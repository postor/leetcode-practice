/**
 * // Definition for a Node.
 * function Node(val,prev,next,child) {
 *    this.val = val;
 *    this.prev = prev;
 *    this.next = next;
 *    this.child = child;
 * };
 */
/**
 * @param {Node} head
 * @return {Node}
 */
var flatten = function (head) {
  if(!head) return head
  return r(head)[0]

  function r(h) {
    let t = h, end = h
    while (t) {
      end = t
      let next = t.next
      if (t.child) {
        let [s, e] = r(t.child)
        t.child = null
        t.next = s
        s.prev = t
        e.next = next
        if (next) {
          next.prev = e
        }
      }
      t = t.next
    }
    return [h, end]
  }
};