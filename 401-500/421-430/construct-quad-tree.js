/**
 * // Definition for a QuadTree node.
 * function Node(val,isLeaf,topLeft,topRight,bottomLeft,bottomRight) {
 *    this.val = val;
 *    this.isLeaf = isLeaf;
 *    this.topLeft = topLeft;
 *    this.topRight = topRight;
 *    this.bottomLeft = bottomLeft;
 *    this.bottomRight = bottomRight;
 * };
 */
/**
 * @param {number[][]} grid
 * @return {Node}
 */
var construct = function (grid) {
  return createNode(0, 0, grid.length)
  function createNode(top, left, len) {
    if (len == 1) {
      return new Node(grid[top][left], true, null, null, null, null)
    }
    let lenNext = len / 2
    let topLeft = createNode(top, left, lenNext)
      , topRight = createNode(top, left + lenNext, lenNext)
      , bottomLeft = createNode(top + lenNext, left, lenNext)
      , bottomRight = createNode(top + lenNext, left + lenNext, lenNext)
    let arr = [topLeft, topRight, bottomLeft, bottomRight]
    if (arr.every(x => (x.isLeaf && x.val == topLeft.val))) {
      return new Node(topLeft.val, true, null, null, null, null)
    }
    return new Node(true, false, topLeft, topRight, bottomLeft, bottomRight)
  }
};