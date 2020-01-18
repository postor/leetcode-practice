/**
 * // Definition for a Node.
 * function Node(val,children) {
 *    this.val = val;
 *    this.children = children;
 * };
 */
/**
 * @param {Node} root
 * @return {number[][]}
 */
var levelOrder = function (root) {
  if (!root) return []
  let rtn = [], q = [[root, 0]]
  while (q.length) {
    let [node, i] = q.shift()
    if (rtn[i] === undefined) rtn[i] = []
    rtn[i].push(node.val)
    node.children && (q = q.concat(node.children.map(x => [x, i + 1])))
  }
  return rtn
};