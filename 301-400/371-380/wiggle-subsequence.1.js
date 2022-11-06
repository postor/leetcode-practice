/**
 * @param {number[]} nums
 * @return {number}
 */
var wiggleMaxLength = function (nums) {
  if (nums.length < 2) return nums.length

  function countUp(from = 1, tmp = nums[0]) {
    if (from >= nums.length) return 0
    if (nums[from] > tmp) {
      return 1 + countDown(from + 1, nums[from])
    }
    return countUp(from + 1, Math.min(nums[from], tmp))
  }

  function countDown(from = 1, tmp = nums[0]) {
    if (from >= nums.length) return 0
    if (nums[from] < tmp) {
      return 1 + countUp(from + 1, nums[from])
    }
    return countDown(from + 1, Math.max(nums[from], tmp))
  }

  return Math.max(countDown(), countUp()) + 1
};

console.log(wiggleMaxLength([1, 17, 5, 10, 13, 15, 10, 5, 16, 8]))