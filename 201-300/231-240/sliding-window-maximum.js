/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
var maxSlidingWindow = function (nums, k) {
  if (nums.length < k || k < 1) return []
  if (k == 1) return nums
  const END = 1
  class W {
    constructor() {
      this.left = this.right = 0
      this.maxs = [nums[0]]
      this.result = new Array(nums.length - k)
    }

    step() {
      if (this.right == nums.length - 1) return END
      // 只需要右侧移动      
      this.tryRight()

      // 左侧需要同时移动
      if (this.right - this.left == k) {
        this.tryLeft()
      }

      // 存入结果
      if (this.right >= k - 1) {
        this.result[this.left] = this.maxs[0]
      }
    }
    tryRight() {
      this.right++
      if (nums[this.right] >= this.maxs[0]) {
        this.maxs = [nums[this.right]]
        return
      }
      this.maxs.push(nums[this.right])
    }

    tryLeft() {
      this.left++
      if (this.maxs.length == k + 1) {
        this.maxs.shift()
        while (!isLeftMax(this.maxs)) this.maxs.shift()
      }

      function isLeftMax(arr = 0) {
        for (let i = 1; i < arr.length; i++) {
          if (arr[0] <= arr[i]) return false
        }
        return true
      }
    }
  }
  let w = new W()
  while (w.step() != END);
  return w.result
};

// console.log(maxSlidingWindow([1, 3, -1, -3, 5, 3, 6, 7], 3))
// console.log(maxSlidingWindow([7, 2, 4], 2))