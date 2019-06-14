/**
 * @param {number[]} nums
 * @return {number[]}
 */
var productExceptSelf = function (nums) {
  if (!nums.length) return nums
  let left = new Array(nums.length), right = new Array(nums.length)
  left[0] = 1
  right[nums.length - 1] = 1

  for (let i = 0; i < nums.length - 1; i++) {
    left[i + 1] = left[i] * nums[i]
    right[nums.length - i - 2] = right[nums.length - i - 1] * nums[nums.length - i - 1]
  }
  for (let i = 0; i < nums.length; i++) {
    left[i] = left[i] * right[i]
  }
  return left
};

console.log(productExceptSelf([1, 2, 3, 4]))


/**
 * @param {number[]} nums
 * @return {number[]}
 */
var productExceptSelf_division = function (nums) {
  let t = nums.reduce((x, y) => x * y)
  return nums.map(x => t / x)
};