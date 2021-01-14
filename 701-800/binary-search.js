/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var search = function (nums, target) {
  if (!nums.length) return -1
  if (nums[nums.length - 1] == target) return nums.length - 1
  for (let l = 0, r = nums.length; l < r;) {
    let mid = Math.floor((l + r) / 2)
    if (nums[mid] == target) return mid
    if (nums[mid] > target) {
      r = mid
      continue
    }
    if (nums[mid] < target) {
      l = mid + 1
      continue
    }
  }
  return -1
};