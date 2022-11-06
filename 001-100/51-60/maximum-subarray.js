/**
 * @param {number[]} nums
 * @return {number}
 */
var maxSubArray = function (nums) {
  let max = nums[0], cur = 0
  for (let i = 1; i < nums.length; i++) {
    if (nums[i] > max) {
      max = nums[i]
    }
  }
  if (max < 0) {
    return [max]
  }

  for (let i = 0; i < nums.length; i++) {
    cur = cur + nums[i]
    if (cur < 0) {
      cur = 0
    }
    if (cur > max) {
      max = cur
    }
  }
  return max
};

