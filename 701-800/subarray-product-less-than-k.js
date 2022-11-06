/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var numSubarrayProductLessThanK = function (nums, k) {
  if (!nums.length) return 0
  if (k < 2) return 0
  let l = 0, r = 0, curProduct = nums[0], rtn = nums[0] < k ? 1 : 0
  for (let r = 1; r < nums.length; r++) {
    curProduct *= nums[r]
    while (curProduct >= k) {
      curProduct /= nums[l]
      l++
    }
    rtn += r - l + 1
  }
  return rtn
};

// console.log(numSubarrayProductLessThanK([10, 5, 2, 6], 100))