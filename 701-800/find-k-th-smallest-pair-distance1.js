class BSTNode {
  constructor(val, arr, parent = null, left = null, right = null) {
    this.val = val, this.arr = arr, this.parent = parent, this.left = left, this.right = right
  }
}

class BST {
  constructor(vals, nums) {
    if (!vals.length) return
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

  getMax() {
    if (!this.root) return undefined
    let t = this.root
    while (t.left) t = t.left
    return t
  }

  popMin() {
    if (!this.root) return undefined
    let t = this.getMax()
    if (!t.parent) {
      this.root = t.right
      if (this.root) this.root.parent = null
    } else {
      t.parent.left = t.right
      t.right && (t.right.parent = t.parent)
    }
    return t
  }
  getMax() {
    if (!this.root) return undefined
    let t = this.root
    while (t.right) t = t.right
    return t
  }

  popMax() {
    if (!this.root) return undefined
    let t = this.getMax()
    if (!t.parent) {
      this.root = t.left
      if (this.root) this.root.parent = null
    } else {
      t.parent.right = t.left
      t.left && (t.left.parent = t.parent)
    }
    return t
  }
}

/**
 * @param {number} k
 * @param {number[]} nums
 */
var KthSmallest = function (k, nums) {
  this.k = k
  let vals = nums.slice(0, k)
  this.bst = new BST(vals, vals)
  this.size = vals.length
  for (let i = k; i < nums.length; i++) {
    this.add(nums[i])
  }
};

/** 
 * @param {number} val
 * @return {number}
 */
KthSmallest.prototype.add = function (val) {
  if (this.size < this.k) {
    this.size++
    this.bst.addNode(val)
    return this.bst.getMax().val
  }
  let node = this.bst.getMax()
  if (node && (val < node.val)) {
    this.bst.popMax()
    this.bst.addNode(val)
  }
  return this.bst.getMax().val
};


/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var smallestDistancePair = function (nums, k) {
  let kth = new KthSmallest(k, []), zeros = 0
  for (let i = 1; i < nums.length; i++) {
    for (let j = 0; j < i; j++) {
      let distance = Math.abs(nums[i] - nums[j])
      kth.add(distance)
      if (!distance) {
        zeros++
        if (zeros == k) return 0
      }
    }
  }
  return kth.bst.getMax().val
};

// console.log(smallestDistancePair([1, 3, 1], 1))