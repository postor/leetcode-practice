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
      this.root.parent = null
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
 * @param {number[][]} nums
 * @return {number[]}
 */
var smallestRange = function (nums) {
  if(nums.length===1) {
    return [nums[0][0],nums[0][0]]
  }
  let tree = new BST(nums.map(x => x[0]), nums), rtn
  while (true) {
    // printTree(tree)
    let minNode = tree.popMin()
    let maxNode = tree.getMax()
    let tmp = [minNode.val, maxNode.val]
    if (rtn === undefined || (tmp[1] - tmp[0] < rtn[1] - rtn[0])) {
      rtn = tmp
    }
    if (minNode.arr.length === 1) break
    minNode.arr.shift()
    tree.addNode(minNode.arr[0], minNode.arr)
  }
  return rtn
};

// function printTree(tree) {
//   let arr = [...gen(tree.root)]
//   console.log(arr.join(','))
//   function* gen(n) {
//     if (n.left) yield* gen(n.left)
//     yield n.val
//     if (n.right) yield* gen(n.right)
//   }
// }

// console.log(smallestRange([[1]]))
// console.log(smallestRange([[4, 10, 15, 24, 26], [0, 9, 12, 20], [5, 18, 22, 30]]))