class TreeNode {
  constructor(val) {
    this.val = val
    this.left = null
    this.right = null
    this.count = 1
  }
}

class BST {
  constructor() {
    this.root = null
    this.size = 0
    this.cacheMax = undefined
    this.cacheMin = undefined
  }
  add(val) {
    this.size++
    this.addUpdateCache(val)
    if (!this.root) {
      this.root = new TreeNode(val)
      return
    }
    appendToTree(val, this.root)

    function appendToTree(val, node) {
      if (node.val == val) {
        node.count++
        return
      }
      if (node.val > val) {
        if (!node.left) {
          node.left = new TreeNode(val)
          return
        }
        return appendToTree(val, node.left)
      }
      if (!node.right) {
        node.right = new TreeNode(val)
        return
      }
      appendToTree(val, node.right)
    }
  }

  addUpdateCache(val) {
    if (this.cacheMax === undefined) {
      this.cacheMax = val
    } else {
      this.cacheMax = Math.max(val, this.cacheMax)
    }
    if (this.cacheMin === undefined) {
      this.cacheMin = val
    } else {
      this.cacheMin = Math.min(val, this.cacheMin)
    }
  }

  findEndNode(direction = 'left', root = null) {
    let troot = root || this.root
    if (!troot) return [null, null]
    let t = troot, parent = null
    while (true) {
      if (!t[direction]) return [t, parent]
      parent = t
      t = t[direction]
    }
  }

  getMax() {
    if (this.cacheMax !== undefined) return this.cacheMax
    const [n] = this.findEndNode('right')
    this.cacheMax = n.val
    return n.val
  }

  getMin() {
    if (this.cacheMin !== undefined) return this.cacheMin
    const [n] = this.findEndNode('left')
    this.cacheMin = n.val
    return n.val
  }

  popEnd(direction = 'left') {
    this.size--
    const otherDirectionDic = {
      left: 'right',
      right: 'left'
    }
    const [node, parent] = this.findEndNode(direction)
    let rtn = node.val
    let secondVal = rtn
    node.count--
    if (node.count == 0) {
      if (parent) {
        parent[direction] = node[otherDirectionDic[direction]]
        const [node1] = this.findEndNode(direction, parent)
        secondVal = node1.val
      } else {
        this.root = this.root[otherDirectionDic[direction]]
        const [node1] = this.findEndNode(direction)
        secondVal = node1.val
      }
    }
    return [rtn, secondVal]
  }

  popMax() {
    const [val, second] = this.popEnd('right')
    this.cacheMax = second
    return val
  }

  popMin() {
    const [val, second] = this.popEnd('left')
    this.cacheMin = second
    return val
  }
}

/**
 * initialize your data structure here.
 */
var MedianFinder = function () {
  this.smaller = new BST()
  this.bigger = new BST()
  this.median = undefined
  this.inital = true
};

/** 
 * @param {number} num
 * @return {void}
 */
MedianFinder.prototype.addNum = function (num) {
  const { smaller, bigger } = this
  if (this.inital) {
    this.median = num
    this.inital = false
    return
  }

  if (this.median !== undefined) {
    if (this.median > num) {
      smaller.add(num)
      console.log(`smaller add ${num}`)
      bigger.add(this.median)
      console.log(`bigger add ${this.median}`)
    } else {
      smaller.add(this.median)
      console.log(`smaller add ${this.median}`)
      bigger.add(num)
      console.log(`bigger add ${num}`)
    }
    this.median = undefined
  } else {
    if (num < smaller.getMax()) {
      smaller.add(num)
      console.log(`smaller add ${num}`)
      this.median = smaller.popMax()
      console.log(`smaller popMax ${this.median}`)
    } else if (num > bigger.getMin()) {
      bigger.add(num)
      console.log(`bigger add ${num}`)
      this.median = bigger.popMin()
      console.log(`bigger popMin ${this.median}`)
    } else {
      this.median = num
    }
  }

};

/**
 * @return {number}
 */
MedianFinder.prototype.findMedian = function () {
  if (this.median === undefined) {
    const { smaller, bigger } = this
    return (smaller.getMax() + bigger.getMin()) / 2
  }
  return this.median
};

/**
 * Your MedianFinder object will be instantiated and called as such:
 * var obj = new MedianFinder()
 * obj.addNum(num)
 * var param_2 = obj.findMedian()
 */

// var obj = new MedianFinder()

// for (let i = 1; i < 10; i++) {
//   console.log(`add ${i}`, obj.addNum(i))
//   console.log(`median:`, obj.findMedian())
// }

// var obj = new MedianFinder()
// const methods = ["MedianFinder", "addNum", "findMedian", "addNum", "findMedian", "addNum", "findMedian", "addNum", "findMedian", "addNum", "findMedian", "addNum", "findMedian", "addNum", "findMedian", "addNum", "findMedian", "addNum", "findMedian", "addNum", "findMedian", "addNum", "findMedian", "addNum", "findMedian", "addNum", "findMedian", "addNum", "findMedian", "addNum", "findMedian", "addNum", "findMedian", "addNum", "findMedian", "addNum", "findMedian", "addNum", "findMedian", "addNum", "findMedian", "addNum", "findMedian"]
// const params = [[], [12], [], [10], [], [13], [], [11], [], [5], [], [15], [], [1], [], [11], [], [6], [], [17], [], [14], [], [8], [], [17], [], [6], [], [4], [], [16], [], [8], [], [10], [], [2], [], [12], [], [0], []]
// const expects = [null, null, 12.0, null, 11.0, null, 12.0, null, 11.5, null, 11.0, null, 11.5, null, 11.0, null, 11.0, null, 11.0, null, 11.0, null, 11.0, null, 11.0, null, 11.0, null, 11.0, null, 11.0, null, 11.0, null, 11.0, null, 10.5, null, 10.0, null, 10.5, null, 10.0]
// for (let i = 1; i < methods.length; i++) {
//   let method = methods[i]
//   let rtn = obj[method](...params[i])
//   console.log(`${method}(${params[i].join(',')}) results:${rtn}, expects:${expects[i]}`)
//   if(rtn!=expects[i]){
//     console.log(1)
//   }
// }