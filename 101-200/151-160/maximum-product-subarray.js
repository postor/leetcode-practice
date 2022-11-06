/**
 * @param {number[]} nums
 * @return {number}
 */
var maxProduct = function (nums) {
  let max = Number.MIN_SAFE_INTEGER
  for (let i = 0; i < nums.length; i++) {
    let x = nums[i]
    max = Math.max(x, max)
    for (let j = i + 1; j < nums.length; j++) {
      x *= nums[j]
      max = Math.max(x, max)
    }
  }
  return max
};