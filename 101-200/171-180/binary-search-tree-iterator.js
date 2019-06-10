/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 */
var BSTIterator = function (root) {
  this.n = root
  this.cur = 0 // 0=left, 1=this.n, 2=right, 3=没有
  if (!root) {
    this.cur = 3
    return
  }
  this.left = new BSTIterator(this.n.left)
  this.right = new BSTIterator(this.n.right)
};

/**
 * @return the next smallest number
 * @return {number}
 */
BSTIterator.prototype.next = function () {
  switch (this.cur) {
    case 0:
      // 尝试left
      if (this.left.hasNext())
        return this.left.next()
    case 1:
      this.cur = 2
      return this.n.val
    case 2:
      if (this.right.hasNext())
        return this.right.next()
    case 3:
      throw '!'
  }
};

/**
 * @return whether we have a next smallest number
 * @return {boolean}
 */
BSTIterator.prototype.hasNext = function () {
  /*eslint no-fallthrough: 0*/
  switch (this.cur) {
    case 0:
      // 尝试left
      if (this.left.hasNext()) return true
    case 1:
      this.cur = 1
      return true
    case 2:
      if (this.right.hasNext()) {
        this.cur = 2
        return true
      }
    case 3:
      this.cur = 3
      return false
  }
};

/**
 * Your BSTIterator object will be instantiated and called as such:
 * var obj = new BSTIterator(root)
 * var param_1 = obj.next()
 * var param_2 = obj.hasNext()
 */

//["BSTIterator","next","next","hasNext","next","hasNext","next","hasNext","next","hasNext"]
//[[[7,3,15,null,null,9,20]],[null],[null],[null],[null],[null],[null],[null],[null],[null]]

let tree = {
  val: 7,
  left: { val: 3, },
  right: {
    val: 15,
    left: { val: 9 },
    right: { val: 20 }
  },
}

let it = new BSTIterator(tree)
console.log(it.next())
console.log(it.next())
console.log(it.hasNext())
console.log(it.next())
console.log(it.hasNext())
console.log(it.next())
console.log(it.hasNext())
console.log(it.next())
console.log(it.hasNext())