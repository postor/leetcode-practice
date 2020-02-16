/**
 * @param {number[]} nums
 * @param {number} k
 * @return {boolean}
 */
var checkSubarraySum = function (nums, k) {
  let sums = new Array(nums.length)
  sums[0] = nums[0]
  for (let i = 1; i < sums.length; i++) {
    sums[i] = sums[i - 1] + nums[i]
  }
  for (let start = 0; start < nums.length - 1; start++) {
    for (let end = start + 1; end < nums.length; end++) {
      let total = start == 0 ? sums[end] : sums[end] - sums[start - 1]
      if (k == 0 && total == 0) return true
      if (total % k == 0) return true
    }
  }
  return false
};
// console.log(checkSubarraySum([0, 1, 0], 0))
// console.log(checkSubarraySum([1, 2], 2))
// console.log(checkSubarraySum([0, 0], 0))
// console.log(checkSubarraySum([23, 2, 4, 6, 7], 6))
// console.log(checkSubarraySum([23, 2, 6, 4, 7], 6))

