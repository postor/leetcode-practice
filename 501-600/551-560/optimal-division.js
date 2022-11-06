/**
 * @param {number[]} nums
 * @return {string}
 */
var optimalDivision = function (nums) {
  if (nums.length > 2) {
    nums[1] = '(' + nums[1]
    nums[nums.length - 1] = nums[nums.length - 1] + ')'
  }
  return nums.join('/')
};