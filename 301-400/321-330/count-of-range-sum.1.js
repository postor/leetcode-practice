/**
 * @param {number[]} nums
 * @param {number} lower
 * @param {number} upper
 * @return {number}
 */
var countRangeSum = function (nums, lower, upper) {
  if (!nums.length) return 0
  let sums0 = nums.map(x => x)
  for (let i = 1; i < nums.length; i++) sums0[i] = sums0[i - 1] + nums[i]

  let total = 0
  for (let i = 0; i < nums.length; i++) {
    for (let j = i; j < nums.length; j++) {
      let sum = i == 0 ? sums0[j] : sums0[j] - sums0[i - 1]
      sum >= lower && sum <= upper && total++
    }
  }

  return total
};

console.log(countRangeSum([-2, 5, -1], -2, 2))