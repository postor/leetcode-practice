/**
 * @param {number[]} nums
 * @return {number}
 */
var minMoves2 = function (nums) {
  if (!nums.length) return 0
  nums.sort((a, b) => a - b)
  let median = nums[Math.floor(nums.length / 2)]
  let total = 0
  nums.forEach(x => total += Math.abs(median - x))
  return total
};

// console.log(minMoves2([1, 0, 0, 8, 6]))