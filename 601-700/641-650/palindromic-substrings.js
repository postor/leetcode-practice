/**
 * @param {string} s
 * @return {number}
 */
var countSubstrings = function (s) {
  // dp[startIndex][length] = s.substr(startIndex,length) is Palindromic 
  let dp = new Array(s.length).fill(0).map(x => new Array(s.length + 1))
  let rtn = 0
  // all single char are Palindromic
  for (let i = 0; i < s.length; i++) {
    dp[i][1] = true
  }
  rtn += s.length
  // all repeat are true
  for (let i = 0; i < s.length - 1; i++) {
    if (s[i] === s[i + 1]) {
      dp[i][2] = true
      rtn += 1
    }
  }
  // 3+
  for (let length = 3; length <= s.length; length++) {
    for (let start = 0; start <= s.length - length; start++) {
      if (!dp[start + 1][length - 2]) continue
      if (s[start] !== s[start + length - 1]) continue
      dp[start][length] = true
      rtn += 1
    }
  }
  return rtn
};