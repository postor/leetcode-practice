/**
 * @param {number} s
 * @param {number[]} nums
 * @return {number}
 */
var minSubArrayLen = function (s, nums) {
  if(!nums.length) return 0
  let min = 0
  class Slid {
    constructor() {
      this.start = 0
      this.end = 0
      this.sum = nums[0]
    }
    add() {
      if (this.start == nums.length - 1) return false
      this.start++
      this.sum += nums[this.start]
      return true
    }
    kick() {
      if (this.end == this.start) return false
      this.sum -= nums[this.end]
      this.end++
      return true
    }
    ok() {
      let rtn = this.sum >= s
      if (rtn) {
        if (min == 0) min = this.start - this.end + 1
        else min = Math.min(min, this.start - this.end + 1)
      }
      return rtn
    }
  }

  let slid = new Slid()
  while (true) {
    // 满足
    if (slid.ok()) {
      // 尝试踢掉
      if (slid.kick()) continue
    }
    // 尝试增加
    if (slid.add()) continue
    // 什么都不能做了，到头了
    break
  }
  return min
};

// console.log(minSubArrayLen(7, [2, 3, 1, 2, 4, 3]))