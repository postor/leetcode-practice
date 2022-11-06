/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var findMaxAverage = function (nums, k) {
  if (!k) return 0
  let sum = nums.slice(0, k).reduce((a, b) => a + b), max = sum
  for (let i = 0; i < nums.length - k; i++) {
    sum += nums[i + k]
    sum -= nums[i]
    max = Math.max(sum, max)
  }
  return max / k
};