/**
 * @param {number[]} nums
 * @return {number}
 */
var findUnsortedSubarray = function (nums) {
  let left = 0, right = nums.length - 1
  while (left < nums.length - 1 && nums[left] <= nums[left + 1]) left++
  if (left === right) return 0
  while (right > 0 && nums[right] >= nums[right - 1]) right--
  let max = Math.max(nums[left], nums[right]), min = Math.min(nums[left], nums[right])
  for (let i = left + 1; i < right; i++) {
    max = Math.max(nums[i], max)
    min = Math.min(nums[i], min)
  }
  while (nums[left-1] > min) left--
  while (nums[right+1] < max) right++
  return right - left + 1
};

console.log(findUnsortedSubarray([2, 6, 4, 8, 10, 9, 15]))