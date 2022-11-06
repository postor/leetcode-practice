/**
 * @param {number} n
 * @param {number} k
 * @param {number} maxPts
 * @return {number}
 */
var new21Game = function (n, k, maxPts) {
  if (k == 0) return 1
  let dp = new Array(k + maxPts).fill(0)
  dp[0] = 1;
  dp[1] = 1 / maxPts;
  // case  i<=maxPts
  // dp[i-1] = (dp[0]+....+dp[i-2])/maxPts
  // dp[i] = (dp[0]+....+dp[i-1])/maxPts
  // dp[i]-dp[i-1] = (dp[i-1])/maxPts
  // dp[i]= (dp[i-1])/maxPts +dp[i-1] 

  // case  maxPts < i <= k 
  // dp[i-1] = (dp[i-maxPts-1]+....+dp[i-2])/maxPts
  // dp[i] = (dp[i-maxPts]+....+dp[i-1])/maxPts
  // dp[i]-dp[i-1] = (dp[i-1]-dp[i-maxPts-1])/maxPts
  // dp[i]= (dp[i-1]-dp[i-maxPts-2])/maxPts +dp[i-1] 


  // case  i>k
  // dp[i-1] = (dp[i-maxPts-1]+....+dp[k-1])/maxPts
  // dp[i] = (dp[i-maxPts]+....+dp[k-1])/maxPts
  // dp[i]-dp[i-1] = -(dp[i-maxPts-1])/maxPts
  // dp[i]= dp[i-1] -(dp[i-maxPts-1])/maxPts

  // case k < maxPts?  


  if (k > maxPts) {
    for (let i = 2; i < dp.length; i++) {
      if (i <= maxPts) {
        dp[i] = (dp[i - 1]) / maxPts + dp[i - 1]
      } else if (i <= k) {
        dp[i] = (dp[i - 1] - (dp[i - maxPts - 1] || 0)) / maxPts + dp[i - 1]
      } else {
        dp[i] = - (dp[i - maxPts - 1] || 0) / maxPts + dp[i - 1]
      }
    }
  } else { // k<=maxPts
    for (let i = 2; i < dp.length; i++) {
      if (i <= k) {
        dp[i] = (dp[i - 1]) / maxPts + dp[i - 1]
      } else {
        dp[i] = -(dp[i - maxPts - 1] || 0) / maxPts + dp[i - 1]
      }
    }
  }

  let rtn = 0
  for (let i = k; i <= Math.min(n, k + maxPts - 1); i++) rtn += dp[i]
  return rtn
};


// console.log(new21Game(1, 0, 1)) //0.6
// console.log(new21Game(6, 1, 10)) //0.6
// console.log(new21Game(21, 17, 10)) //0.73278
// console.time()
// console.log(new21Game(5710,
//   5070,
//   8516))

// console.timeEnd()
// console.time()
console.log(new21Game(185,
  183,
  2))
// console.timeEnd()