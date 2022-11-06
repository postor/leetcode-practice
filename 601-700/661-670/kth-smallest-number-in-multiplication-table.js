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
}


/**
 * @param {number} m
 * @param {number} n
 * @param {number} k
 * @return {number}
 */
var findKthNumber = function (m, n, k) {
  let arr = new Array(m).fill(0).map((x, i) => [i + 1, 1])
  let tree = new BST(arr.map(([x]) => x), arr)
  for (let i = 1; i < k; i++) {
    let { arr } = tree.popMin()
    arr[1]++
    if (arr[1] > n) continue
    tree.addNode(arr[0] * arr[1], arr)
  }
  let { val } = tree.popMin()
  return val
};

// console.log(findKthNumber(3, 3, 5))
// console.log(findKthNumber(2, 3, 6))