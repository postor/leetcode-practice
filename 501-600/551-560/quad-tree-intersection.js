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
 * @param {Node} quadTree1
 * @param {Node} quadTree2
 * @return {Node}
 */
var intersect = function (quadTree1, quadTree2) {
  let rtn = or(quadTree1, quadTree2)
  return rtn

  /**
   * @param {Node} n1
   * @param {Node} q2
   * @return {Node} 
   */
  function or(n1, n2) {
    if (n1.isLeaf) {
      if (n1.val) {
        return n1
      }
      return n2
    }
    if (n2.isLeaf) {
      if (n2.val) {
        return n2
      }
      return n1
    }
    let nodes = [
      or(n1.topLeft, n2.topLeft),
      or(n1.topRight, n2.topRight),
      or(n1.bottomLeft, n2.bottomLeft),
      or(n1.bottomRight, n2.bottomRight)
    ]
    if (nodes.every(n => n.isLeaf && n.val)) {
      return new Node(true, true)
    }
    return new Node(false, false,
      nodes[0],
      nodes[1],
      nodes[2],
      nodes[3])
  }
};


function Node(val, isLeaf, topLeft, topRight, bottomLeft, bottomRight) {
  this.val = val;
  this.isLeaf = isLeaf;
  this.topLeft = topLeft;
  this.topRight = topRight;
  this.bottomLeft = bottomLeft;
  this.bottomRight = bottomRight;
};

console.log(intersect({ "$id": "1", "bottomLeft": { "$id": "4", "bottomLeft": null, "bottomRight": null, "isLeaf": true, "topLeft": null, "topRight": null, "val": true }, "bottomRight": { "$id": "5", "bottomLeft": null, "bottomRight": null, "isLeaf": true, "topLeft": null, "topRight": null, "val": true }, "isLeaf": false, "topLeft": { "$id": "2", "bottomLeft": null, "bottomRight": null, "isLeaf": true, "topLeft": null, "topRight": null, "val": false }, "topRight": { "$id": "3", "bottomLeft": null, "bottomRight": null, "isLeaf": true, "topLeft": null, "topRight": null, "val": false }, "val": false }
  , { "$id": "1", "bottomLeft": { "$id": "4", "bottomLeft": null, "bottomRight": null, "isLeaf": true, "topLeft": null, "topRight": null, "val": false }, "bottomRight": { "$id": "5", "bottomLeft": null, "bottomRight": null, "isLeaf": true, "topLeft": null, "topRight": null, "val": true }, "isLeaf": false, "topLeft": { "$id": "2", "bottomLeft": null, "bottomRight": null, "isLeaf": true, "topLeft": null, "topRight": null, "val": true }, "topRight": { "$id": "3", "bottomLeft": null, "bottomRight": null, "isLeaf": true, "topLeft": null, "topRight": null, "val": true }, "val": false }))