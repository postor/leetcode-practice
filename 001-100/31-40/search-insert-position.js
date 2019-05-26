/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var searchInsert = function (nums, target) {
  return s(0, nums.length - 1)
  function s(start, end) {
    if (target <= nums[start]) {
      return start
    }
    if (target > nums[end]) {
      return end + 1
    }
    if (start + 1 >= end) {
      return end
    }
    let mid = Math.floor((start + end) / 2)
    if (target < nums[mid]) {
      return s(start, mid)
    }
    return s(mid, end)
  }
};

console.log(searchInsert([1, 3, 5, 6], 5))