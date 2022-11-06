/**
 * // Definition for a Node.
 * function Node(val,children) {
 *    this.val = val;
 *    this.children = children;
 * };
 */
/**
 * @param {Node} root
 * @return {number[]}
 */
var postorder = function (root) {
  if (!root) return []
  return [...gen(root)]
  function* gen(n) {
    if (n.children) {
      for (let i = 0; i < n.children.length; i++) {
        yield* gen(n.children[i])
      }
    }    
    yield n.val
  }
};