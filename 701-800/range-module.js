class RangeItem {
  constructor(left, right) {
    this.left = left
    this.right = right
  }
}

var RangeModule = function () {
  /**
   * @member {RangeItem[]}
   */
  this.ranges = []
};

/** 
 * @param {number} left 
 * @param {number} right
 * @return {void}
 */
RangeModule.prototype.addRange = function (left, right) {
  if (!this.ranges.length || right < this.ranges[0].left)
    return this.ranges.unshift(new RangeItem(left, right))

  let startI = -1
  for (let i = 0; i < this.ranges.length; i++) {
    let range = this.ranges[i]
    if (left <= range.right && startI == -1) {
      startI = i
    }
    if (right < range.left) {
      return this.ranges.splice(startI, i - startI, new RangeItem(
        Math.min(this.ranges[startI].left, left), right))
    }
    if (right <= range.right) {
      return this.ranges.splice(startI, i - startI + 1, new RangeItem(
        Math.min(this.ranges[startI].left, left), this.ranges[i].right))
    }
  }
  if (startI != -1) return this.ranges.splice(startI, this.ranges.length - startI
    , new RangeItem(Math.min(this.ranges[startI].left, left), right))
  this.ranges.push(new RangeItem(left, right))
};

/** 
 * @param {number} left 
 * @param {number} right
 * @return {boolean}
 */
RangeModule.prototype.queryRange = function (left, right) {
  for (let range of this.ranges) {
    if (right <= range.left) return false
    if (left >= range.left) {
      if (right <= range.right) return true
    }
    if (range.left > right) return false
  }
  return false
};

/** 
 * @param {number} left 
 * @param {number} right
 * @return {void}
 */
RangeModule.prototype.removeRange = function (left, right) {
  if (!this.ranges.length || right < this.ranges[0].left)
    return

  let startI = -1, toReplace = []
  for (let i = 0; i < this.ranges.length; i++) {
    let range = this.ranges[i]
    if (left < range.right && startI == -1) {
      startI = i
      if (left > range.left) toReplace.push(new RangeItem(range.left, left))
    }
    if (right <= range.left) {
      return this.ranges.splice(startI, i - startI, ...toReplace)
    }
    if (right <= this.ranges[i].right) {
      if (right != this.ranges[i].right) toReplace.push(new RangeItem(right, this.ranges[i].right))
      return this.ranges.splice(startI, i - startI + 1, ...toReplace)
    }
  }
  if (startI > -1) return this.ranges.splice(startI, this.ranges.length - startI + 1, ...toReplace)
};

/**
 * Your RangeModule object will be instantiated and called as such:
 * var obj = new RangeModule()
 * obj.addRange(left,right)
 * var param_2 = obj.queryRange(left,right)
 * obj.removeRange(left,right)
 */
let opts = ["RangeModule", "addRange", "addRange", "addRange", "removeRange", "addRange", "queryRange", "addRange", "addRange", "queryRange", "removeRange", "queryRange", "queryRange", "queryRange", "removeRange", "queryRange", "addRange", "queryRange", "queryRange", "queryRange", "queryRange", "queryRange", "removeRange", "removeRange", "addRange", "queryRange", "queryRange", "removeRange", "removeRange", "removeRange", "addRange", "removeRange", "removeRange", "removeRange", "removeRange", "queryRange", "queryRange", "queryRange", "removeRange", "addRange", "addRange", "removeRange", "removeRange", "queryRange", "removeRange", "addRange", "addRange", "removeRange", "removeRange", "removeRange", "removeRange", "queryRange", "removeRange", "addRange", "removeRange", "addRange", "addRange", "removeRange", "queryRange", "removeRange", "queryRange", "queryRange", "addRange", "removeRange", "addRange", "removeRange", "removeRange", "addRange", "queryRange", "removeRange", "addRange", "addRange", "addRange", "queryRange", "removeRange", "addRange", "queryRange", "queryRange", "addRange", "addRange", "addRange", "queryRange", "queryRange", "removeRange", "addRange", "queryRange", "addRange", "queryRange", "addRange", "addRange", "queryRange"]
  , params = [[], [1, 76], [8, 55], [29, 84], [5, 95], [71, 76], [1, 23], [15, 18], [36, 39], [10, 56], [55, 97], [12, 34], [2, 98], [5, 7], [34, 73], [80, 83], [29, 63], [11, 19], [18, 90], [46, 52], [39, 50], [55, 73], [9, 60], [38, 63], [36, 45], [15, 18], [53, 62], [89, 93], [36, 95], [46, 95], [8, 29], [14, 78], [8, 25], [15, 82], [10, 42], [38, 62], [37, 42], [29, 92], [42, 50], [41, 95], [43, 70], [15, 20], [42, 81], [100, 101], [21, 28], [22, 26], [18, 89], [28, 95], [28, 70], [26, 84], [35, 77], [78, 95], [39, 55], [7, 53], [12, 71], [37, 70], [62, 65], [37, 44], [81, 95], [52, 100], [10, 22], [13, 75], [61, 77], [41, 67], [37, 46], [22, 56], [43, 80], [67, 76], [34, 44], [56, 82], [95, 99], [21, 98], [29, 75], [35, 97], [10, 73], [68, 88], [26, 69], [56, 60], [18, 41], [11, 30], [50, 72], [26, 63], [50, 91], [48, 58], [42, 94], [52, 85], [66, 100], [72, 91], [20, 51], [52, 87], [60, 78]]
  , expected = [null, null, null, null, null, null, false, null, null, false, null, false, false, false, null, false, null, false, false, true, true, false, null, null, null, false, false, null, null, null, null, null, null, null, null, false, false, false, null, null, null, null, null, false, null, null, null, null, null, null, null, false, null, null, null, null, null, null, false, null, false, false, null, null, null, null, null, null, false, null, null, null, null, true, null, null, false, false, null, null, null, false, true, null, null, true, null, true, null, null, true]

var obj = new RangeModule()
for (let i = 1; i < opts.length; i++) {
  // if (params[i][0] == 75 || params[i][1] == 90) debugger
  let rtn = obj[opts[i]](...params[i])
  if (expected[i] !== null) {
    if (expected[i] != rtn) debugger
  }
  console.log(rtn, opts[i], params[i], obj.ranges.map(x => x.left + ',' + x.right).join('|'))
}

// var obj = new RangeModule()
// obj.addRange(6, 8)
// obj.removeRange(7, 8)
// obj.removeRange(8, 9)
// obj.addRange(8, 9)
// obj.removeRange(1, 3)
// obj.addRange(1, 8)
// console.log(obj.queryRange(2, 4), true)
// console.log(obj.queryRange(2, 9), true)
// console.log(obj.queryRange(4, 6), true) 