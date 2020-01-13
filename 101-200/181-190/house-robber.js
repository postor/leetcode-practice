/**
 * @param {number[]} nums
 * @return {number}
 */
var rob = function (nums) {
  // dp[from][to]=max rob 
  let dp = []
  nums.forEach((x, i) => setDp(i, i, x)) // inital
  for (let length = 2; length <= nums.length; length++) {
    for (let start = 0; start < nums.length - length + 1; start++) {
      let end = start + length - 1
      let max = Math.max(getDp(start + 1, end), getDp(start, end - 1))
      for (let toRemove = start + 1; toRemove < start + length - 1; toRemove++) {
        max = Math.max(max, getDp(start, toRemove - 1) + getDp(toRemove + 1, end))
      }
      setDp(start, end, max)
    }
  }

  return dp[0][nums.length - 1]

  function setDp(from, to, val) {
    if (!dp[from]) dp[from] = []
    dp[from][to] = val
  }

  function getDp(from, to) {
    return dp[from][to]
  }
};

// console.log(4, rob([1, 2, 3, 1]))
// console.log(12, rob([2, 7, 9, 3, 1]))