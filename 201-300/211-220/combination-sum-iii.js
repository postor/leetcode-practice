/**
 * @param {number} k
 * @param {number} n
 * @return {number[][]}
 */
var combinationSum3 = function (k, n) {
  // k维数组 dp[n]=[arr,val] ,arr表示已选数字，val表示现在的值,n=arr.length-1
  let dp = [
    [1, 2, 3, 4, 5, 6, 7, 8, 9].map(x => [[x], x])
  ]
  for (let i = 1; i < k; i++) {
    dp[i] = []
    dp[i - 1].forEach(([arr, sum]) => {
      for (let j = arr[arr.length - 1]+1; j < 10; j++) {
        dp[i].push([
          [...arr, j],
          sum + j
        ])
      }
    })
    delete dp[i - 1]
  }
  return dp[k - 1].filter(([arr, sum]) => sum == n).map(([arr]) => arr)
};

// console.log(combinationSum3(3, 7).join('\n'))
// console.log(combinationSum3(3, 9).join('\n'))