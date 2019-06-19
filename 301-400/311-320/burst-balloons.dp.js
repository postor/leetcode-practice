/**
 * @param {number[]} nums
 * @return {number}
 */
var maxCoins = function (nums) {
  let arr = [1, ...nums, 1] // 左右补1，简化运算
  // dp[i][j] 代表从i到j这段的最大收益
  let dp = arr.map(x => arr.map(x => 0))

  // 寻找一段子数组，先定长度len，因为dp依赖关系，从短的开始
  for (let len = 1; len < arr.length - 1; len++) {
    // 寻找数组的开始left
    for (let left = 1; left < arr.length - len; left++) {
      // 结束right可以从len和left推出
      let right = left + len - 1
      let max = Number.MIN_SAFE_INTEGER
      // 假定的最后一个发出的气球last
      for (let last = left; last <= right; last++) {
        // 本次发射赚到的钱
        let v = arr[left - 1] * arr[last] * arr[right + 1]
        // 子数组之前在last左边赚到的钱
        if (left < last) {
          v += dp[left][last - 1]
        }
        // 子数组之前在last右边赚到的钱 
        if (last < right) {
          v += dp[last + 1][right]
        }
        max = Math.max(v, max)
      }
      dp[left][right] = max
    }
  }
  return dp[1][dp.length - 2]
};

console.log(maxCoins([3, 1, 5, 8]))


/*
A recursive solution is discussed here. We can solve this problem using dynamic programming.
First, consider a sub-array from indices Left to Right(inclusive).
If we assume the balloon at index Last to be the last balloon to be burst in this sub-array, we would say the coined gained to be-A[left-1]*A[last]*A[right+1].
Also, the total Coin Gained would be this value, plus dp[left][last – 1] + dp[last + 1][right], where dp[i][j] means maximum coin gained for sub-array with indices i, j.
Therefore, for each value of Left and Right, we need find and choose a value of Last with maximum coin gained, and update the dp array.
Our Answer is the value at dp[1][N].

nums=[7, 9, 8, 0, 7, 1, 3, 5, 5, 2, 3]
assume:
left=1,right=4,last=2  [7, [9, 8, 0, 7], 1]
coin1=A[left-1]*A[last]*A[right+1]=7*8*1
coin2=dp[left][last-1] = [7,[9],8]
coin3=dp[last + 1][right] = [8, [0, 7], 1]

//

*/