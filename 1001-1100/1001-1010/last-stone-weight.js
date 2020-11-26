class BSTNode {
  constructor(val, arr, parent = null, left = null, right = null) {
    this.val = val, this.arr = arr, this.parent = parent, this.left = left, this.right = right
  }
}

class BST {
  constructor(vals, nums) {
    this.root = new BSTNode(vals[0], nums[0])
    for (let i = 1; i < vals.length; i++) {
      this.addNode(vals[i], nums[i])
    }
  }

  addNode(val, arr) {
    if (!this.root) {
      this.root = new BSTNode(val, arr)
      return
    }
    let t = this.root
    while (true) {
      if (val < t.val) {
        if (!t.left) {
          t.left = new BSTNode(val, arr, t)
          return
        }
        t = t.left
        continue
      }
      if (!t.right) {
        t.right = new BSTNode(val, arr, t)
        return
      }
      t = t.right
      continue
    }
  }

  getMin() {
    let t = this.root
    while (t.left) t = t.left
    return t
  }

  popMin() {
    let t = this.getMin()
    if (!t.parent) {
      this.root = t.right
      this.root && (this.root.parent = null)
    } else {
      t.parent.left = t.right
      t.right && (t.right.parent = t.parent)
    }
    return t
  }
  getMax() {
    let t = this.root
    while (t.right) t = t.right
    return t
  }

  popMax() {
    let t = this.getMax()
    if (!t.parent) {
      this.root = t.left
      this.root && (this.root.parent = null)
    } else {
      t.parent.right = t.left
      t.left && (t.left.parent = t.parent)
    }
    return t
  }
}

/**
 * @param {number[]} stones
 * @return {number}
 */
var lastStoneWeight = function (stones) {
  let bst = new BST(stones, stones)
  while (true) {

    if (!bst.root) return 0
    let first = bst.popMax()
    if (!bst.root) return first.val
    let second = bst.popMax()
    let diff = Math.abs(first.val - second.val)
    if (diff) bst.addNode(diff, diff)
  }
};

// console.log(lastStoneWeight([2, 7, 4, 1, 8, 1]))

// console.log(lastStoneWeight([1, 3]))