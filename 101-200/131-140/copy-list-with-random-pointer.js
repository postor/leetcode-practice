/**
 * // Definition for a Node.
 * function Node(val,next,random) {
 *    this.val = val;
 *    this.next = next;
 *    this.random = random;
 * };
 */
/**
 * @param {Node} head
 * @return {Node}
 */
var copyRandomList = function (head) {
  let cache = {}
  return r(head)

  function r(n) {
    if (!n) return n
    if (cache[n.val]) {
      return cache[n.val]
    }
    let n1 = new Node(n.val, null, null)
    cache[n.val] = n1
    n1.next = r(n.next)
    n1.random = r(n.random)
    return n1
  }
};

let n2 = { val: 2, next: null }
n2.random = n2

let result = copyRandomList({ val: 1, next: n2, random: n2 })
console.log(result)


// Definition for a Node.
function Node(val, next, random) {
  this.val = val;
  this.next = next;
  this.random = random;
}