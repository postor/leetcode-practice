/**
 * @param {number[]} nums
 * @return {number}
 */
var maximumProduct = function (nums) {
  nums.sort((a, b) => b - a)
  // if all postive or all negative    
  let [a, b, c] = nums, biggest = a * b * c
  if (a <= 0 || nums[nums.length - 1] >= 0) {
    return biggest
  }
  // if has both
  return Math.max(biggest, nums[nums.length - 1] * nums[nums.length - 2] * a)
};