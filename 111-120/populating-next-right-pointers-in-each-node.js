/**
 * // Definition for a Node.
 * function Node(val,left,right,next) {
 *    this.val = val;
 *    this.left = left;
 *    this.right = right;
 *    this.next = next;
 * };
 */
/**
 * @param {Node} root
 * @return {Node}
 */
var connect = function (root) {
  con1(root)
  return root
};

// 第一层递归
function con1(n) {
  if (!n) return
  connect(n.left)
  connect(n.right)
  con2(n.left, n.right)
}

// 双重递归
function con2(l, r) {
  if (!l) return
  l.next = r
  con2(l.right, r.left)
}


const { print } = require('../common/tree')
let input = { "$id": "1", "left": { "$id": "2", "left": { "$id": "3", "left": null, "next": null, "right": null, "val": 4 }, "next": null, "right": { "$id": "4", "left": null, "next": null, "right": null, "val": 5 }, "val": 2 }, "next": null, "right": { "$id": "5", "left": { "$id": "6", "left": null, "next": null, "right": null, "val": 6 }, "next": null, "right": { "$id": "7", "left": null, "next": null, "right": null, "val": 7 }, "val": 3 }, "val": 1 }
print(input)
connect(input)
print(input, n => `${n.val}->${n.next && n.next.val}`)