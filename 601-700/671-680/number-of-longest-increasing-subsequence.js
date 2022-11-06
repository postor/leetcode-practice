/**
 * @param {number[]} nums
 * @return {number}
 */
var findNumberOfLIS = function (nums) {
  let dp = new Array(nums.length).fill(0).map(x => [1, 1]), maxLength = 1
  for (let i = 1; i < nums.length; i++) {
    for (let j = i - 1; j >= Math.max(0, dp[i][0] - 3); j--) {
      if (nums[j] < nums[i]) {
        let t = dp[j][0] + 1
        maxLength = Math.max(maxLength, t)
        if (dp[i][0] === t) {
          dp[i][1] += dp[j][1]
          continue
        }
        if (dp[i][0] < t) {
          dp[i][1] = dp[j][1]
          dp[i][0] = t
          continue
        }
      }
    }
  }
  let rtn = 0
  for (let [length, count] of dp) {
    if (length === maxLength) rtn += count
  }
  return rtn
};


// console.log(findNumberOfLIS([1, 2, 4, 3, 5, 4, 7, 2]))

// console.log(findNumberOfLIS([1, 3, 5, 4, 7]))
// console.log(findNumberOfLIS([2, 2, 2, 2, 2]))