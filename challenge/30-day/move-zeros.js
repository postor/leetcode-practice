/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var moveZeroes = function (nums) {
  let i = 0, j = 1
  outer:
  while (true) {
    while (nums[i] != 0) {
      i++
      if (j == i) j++
      if (j >= nums.length) break outer
      continue
    }
    while (nums[j] == 0) {
      j++
      if (j >= nums.length) break outer
      continue
    }
    if (j >= nums.length) break
    nums[i] = nums[j]
    nums[j] = 0
    i++
    j++
  }
};

let nums = [1]
moveZeroes(nums)
console.log(nums)