/**
 * // Definition for a Node.
 * function Node(val,neighbors) {
 *    this.val = val;
 *    this.neighbors = neighbors;
 * };
 */
/**
 * @param {Node} node
 * @return {Node}
 */
var cloneGraph = function (node) {
  let visited = {}
  return r(node)

  function r(n) {
    if (visited[n.val]) return visited[n.val]
    let n1 = new Node(n.val, [])
    visited[n.val] = n1
    n1.neighbors = n.neighbors.map(x => r(x))
    return n1
  }

};