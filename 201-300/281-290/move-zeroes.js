/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var moveZeroes = function (nums) {
  let i = 0
  for (let j = 0; j < nums.length; j++) {
    if (!nums[j]) {
      continue
    }
    if (i == j) {
      i++
      continue
    }
    nums[i] = nums[j]
    i++
  }
  for (let j = i; j < nums.length; j++) {
    nums[j] = 0
  }
  return nums
};

// console.log(moveZeroes([0, 1, 0, 3, 12]))