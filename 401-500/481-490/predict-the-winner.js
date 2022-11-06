/**
 * @param {number[]} nums
 * @return {boolean}
 */
var PredictTheWinner = function (nums) {
  // [1, 5, 233, 7] start=0 end=3 score=0
  //     end  0    1    2    3
  // start
  // 0        1    4
  // 1             5    228
  // 2                  233  226
  // 3                       7 


  const dp = nums.map(x => nums.map(y => 0))
  for (let i = 0; i < nums.length; i++) {
    dp[i][i] = nums[i]
  }

  for (let length = 2; length <= nums.length; length++) {
    for (let start = 0; start <= nums.length - length; start++) {
      let end = start + length - 1
      dp[start][end] = Math.max(nums[start] - dp[start + 1][end], nums[end] - dp[start][end - 1])
    }
  }
  return dp[0][nums.length - 1] >= 0
};

// console.log(PredictTheWinner([1, 5, 233, 7]))
// console.log(PredictTheWinner([0]))