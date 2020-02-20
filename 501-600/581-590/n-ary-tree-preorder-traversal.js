/**
 * // Definition for a Node.
 * function Node(val, children) {
 *    this.val = val;
 *    this.children = children;
 * };
 */
/**
 * @param {Node} root
 * @return {number[]}
 */
var preorder = function (root) {
  if (!root) return []
  return [...gen(root)]
  function* gen(n) {
    yield n.val
    if (n.children) {
      for (let i = 0; i < n.children.length; i++) {
        yield* gen(n.children[i])
      }
    }
  }
};