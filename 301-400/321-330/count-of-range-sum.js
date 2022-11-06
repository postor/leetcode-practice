/**
 * @param {number[]} nums
 * @param {number} lower
 * @param {number} upper
 * @return {number}
 */
var countRangeSum = function (nums, lower, upper) {
  if (!nums.length) return 0
  let sums = [], total = 0
  for (let i = 0; i < nums.length; i++) {
    sums = sums.map(x => x + nums[i])
    sums.push(nums[i])
    sums.forEach(x => x >= lower && x <= upper && total++)
  }
  return total
};

console.log(countRangeSum([-2, 5, -1], -2, 2))