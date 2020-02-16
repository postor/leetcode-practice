/**
 * // Definition for a Node.
 * function Node(val,children) {
 *    this.val = val;
 *    this.children = children;
 * };
 */
/**
 * @param {Node} root
 * @return {number}
 */
var maxDepth = function (root) {
  if (!root) return 0
  let max = 0
  r(root, 1)
  return max
  function r(n, depth) {
    if (!n.children || !n.children.length) {
      max = Math.max(max, depth)
      return
    }
    n.children.forEach(x => r(x, depth + 1))
  }
};

//[1,null,3,2,4,null,5,6]
console.log(maxDepth({
  val: 1,
  children: [{
    val: 3,
    children: [{ val: 5 }, { val: 6 }]
  }, {
    val: 2
  }, {
    val: 4
  }]
}))