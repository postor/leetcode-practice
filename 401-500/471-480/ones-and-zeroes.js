/**
 * @param {string[]} strs
 * @param {number} m
 * @param {number} n
 * @return {number}
 */
var findMaxForm = function (strs, m, n) {
  let costs = strs.map(x => getDic(x)), cache = {}
  // x zeros and y ones can make dp[x][y] 
  let dp = new Array(m + 1).fill(0).map(x => new Array(n + 1).fill(0))
  for (let cost of costs) {
    let m1 = cost['0'], n1 = cost['1']
    for (let i = m; i >= m1; i--) {
      for (let j = n; j >= n1; j--) {
        dp[i][j] = Math.max(
          dp[i][j],               // keep as is
          dp[i - m1][j - n1] + 1  // add this one 
        )
      }
    }
  }

  return dp[m][n]

  /**
   * count 0s and 1s
   * @param {*} str 
   */
  function getDic(str = '') {
    let dic = { 0: 0, 1: 0 }
    for (let char of str) {
      dic[char] = dic[char] + 1
    }
    return dic
  }
};


// console.log(findMaxForm(["10", "0", "1"], 1, 1))
// console.log(findMaxForm(["10", "0001", "111001", "1", "0"], 5, 3))
// console.log(findMaxForm(
//   ["0", "11", "1000", "01", "0", "101", "1", "1", "1", "0", "0", "0", "0", "1", "0", "0110101", "0", "11", "01", "00", "01111", "0011", "1", "1000", "0", "11101", "1", "0", "10", "0111"]
//   , 9
//   , 80))