/**
 * @param {number} n
 * @param {number} k
 * @return {number}
 */
var kInversePairs = function (n, k) {
  if (!k) return 1
  // n  k=0    1    2    3    4    5    6    7    8    9    10   11   12   13
  // 1    1    0    0    0    0      
  // 2    1    1    0    0    0    
  // 3    1    2    2    1    0
  // 4    1    3    5    6    5    3    1 
  // -- 4 is 4 times of 3 result with offset   
  //      1    2    2    1
  //           1    2    2    1
  //                1    2    2    1
  //                     1    2    2    1
  //
  // 5    1    4    9    15   20 
  //      |    |    |    |    |
  //      1    3    5    6    5    3    1 
  //           1    3    5    6    5    3    1 
  //                1    3    5    6    5    3    1 
  //                     1    3    5    6    5    3    1 
  //                          1    3    5    6    5    3    1 
  // n=5 k=3 and count 20 is tested, I suppose it works
  // -----  solution 1, TLE :( ------
  let dp = { 0: 1 }, length = 1
  for (let i = 2; i <= n; i++) {
    let dp1 = {}
    for (let j = 0; j < i; j++) {
      // console.log({ i })
      for (let l = 0; l < length; l++) {
        dp1[l + j] = ((dp1[l + j] || 0) + dp[l]) % 1000000007
      }
    }
    console.log({i})
    dp = dp1
    length += i
    // console.log(`n: ${i}, len: ${dp.length}, ${dp.join(',')}`)
  }
  // console.log(dp.join(','))
  return dp[k] || 0
  // -----  solution 1, TLE :( ------

  // for less calculation, 

};

console.log(kInversePairs(3, 0))
console.log(kInversePairs(3, 1))
console.log(kInversePairs(5, 3))
// console.log(kInversePairs(1000, 1000))