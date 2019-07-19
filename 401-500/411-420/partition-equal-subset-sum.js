/**
 * @param {number[]} nums
 * @return {boolean}
 */
var canPartition = function (nums) {
  let total = nums.reduce((a, b) => a + b)
  if (total % 2) return false
  let half = total / 2
  let dp = new Array(half + 1).fill(false)
  dp[0] = true
  for (let i = 0; i < nums.length; i++) {
    for (let j = half; j >= nums[i]; j--) {
      dp[j] = dp[j] || dp[j - nums[i]]
    }
  }
  return dp[half]
};

console.log(canPartition([1, 5, 11, 5]))