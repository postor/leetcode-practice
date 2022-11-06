/**
 * @param {number} n
 * @return {number}
 */
var countNumbersWithUniqueDigits = function (n) {
  let dp = new Array(n + 1).fill(0)
  dp[0] = 1
  dp[1] = 10 // 0-9
  let dp2 = new Array(n + 1).fill(0)
  dp2[1] = 1


  //dp[2] = 91 = 10 + 9*9 = dp[1]*10 - (dp[0]*1)*9 // 11,22... 
  //dp[3] = 739 = 91*10 - (9*2+1)*9 = dp[2]*10 - ((dp[1])*2-dp[0]*3)*9 // 101-191 110-119 202-292 220-229 ...
  //dp[4] =    = 739 + (748-(91-9*2))*3 = dp[3] + (dp[2]-(dp[2]-1)*3))*9 // 1001-1991 1010-1910 1100-1199 ...

  for (let i = 2; i <= n; i++) {
    // 1=>1 2=>10-1 3=>91-9*2-1
    dp2[i] = dp2[i - 1]
    for (let j = i; j > 0; j--) {
      dp2[i] -= j * dp2[j - 1]
    }

    dp[i] = dp[i - 1] * 10 - dp2[i] * 9
  }
  return dp[n]
};

console.log(countNumbersWithUniqueDigits(3))

// for (let i = 1; i < 5; i++) {
//   console.log(countNumbersWithUniqueDigits(i))
// }