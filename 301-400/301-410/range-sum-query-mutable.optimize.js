/**
 * @param {number[]} nums
 */
var NumArray = function (nums) {
  this.nums = nums
  this.ranges = nums.concat()
  for (let i = 1; i < nums.length; i++) {
    this.ranges[i] = this.ranges[i - 1] + this.nums[i]
  }
};

/** 
 * @param {number} i 
 * @param {number} val
 * @return {void}
 */
NumArray.prototype.update = function (i, val) {
  let diff = val - this.nums[i]
  this.nums[i] = val
  for (let k = i; k < this.ranges.length; k++) {
    this.ranges[k] += diff
  }
};

/** 
 * @param {number} i 
 * @param {number} j
 * @return {number}
 */
NumArray.prototype.sumRange = function (i, j) {
  if (i == 0) return this.ranges[j]
  return this.ranges[j] - this.ranges[i - 1]
};

/**
 * Your NumArray object will be instantiated and called as such:
 * var obj = new NumArray(nums)
 * obj.update(i,val)
 * var param_2 = obj.sumRange(i,j)
 */
// let na = new NumArray([1, 3, 5])
// console.log(na.sumRange(0, 2))
// na.update(1, 2)
// console.log(na.sumRange(0, 2))

