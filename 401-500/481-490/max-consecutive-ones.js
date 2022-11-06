/**
 * @param {number[]} nums
 * @return {number}
 */
var findMaxConsecutiveOnes = function (nums) {
  let count = 0, cur = 0, max = 0
  for (let i = 0; i < nums.length; i++) {
    if (cur === 1) {
      if (nums[i] === 1) {
        count++
      } else {
        max = Math.max(max, count)
        count = 0
      }
    } else if (nums[i] === 1) {
      count = 1
      cur = 1
    }
  }
  max = Math.max(max, count)
  return max
};