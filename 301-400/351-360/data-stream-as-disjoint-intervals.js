/**
 * Initialize your data structure here.
 */
var SummaryRanges = function () {
  this.arr = []
};

/** 
 * @param {number} val
 * @return {void}
 */
SummaryRanges.prototype.addNum = function (val) {
  this.arr[val] = true
};

/**
 * @return {number[][]}
 */
SummaryRanges.prototype.getIntervals = function () {
  let rtn = [], start = -1
  for (let i = 0; i < this.arr.length; i++) {
    if (start == -1) {
      if (this.arr[i]) {
        start = i
        continue
      }
    } else {
      if (!this.arr[i]) {
        rtn.push([start, i - 1])
        start = -1
        continue
      }
    }
  }
  if (start != -1) {
    rtn.push([start, this.arr.length - 1])
  }
  return rtn
};

/**
 * Your SummaryRanges object will be instantiated and called as such:
 * var obj = new SummaryRanges()
 * obj.addNum(val)
 * var param_2 = obj.getIntervals()
 */

// var obj = new SummaryRanges()
// obj.addNum(1)
// obj.addNum(3)
// obj.addNum(7)
// obj.addNum(2)
// obj.addNum(6)
// console.log(obj.getIntervals().join('|'))