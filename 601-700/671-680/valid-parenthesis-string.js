/**
 * @param {string} s
 * @return {boolean}
 */
var checkValidString = function (s) {
  if (!s.length) return true
  // dp[start][length] = isValid(s.substr(start,length))
  let dp = new Array(s.length).fill(0).map(x => new Array(s.length + 1).fill(false))
  for (let i = 0; i < s.length; i++) {
    dp[i][0] = true
    dp[i][1] = s[i] === '*' ? true : false
  }
  for (let length = 2; length <= s.length; length++) {
    for (let start = 0; start <= s.length - length; start++) {
      let end = start + length - 1
      // paire
      if (s[start] === '(' || s[start] === '*') {
        if (s[end] === '*' || s[end] === ')') {
          dp[start][length] = dp[start][length] || dp[start + 1][length - 2]
        }
      }
      // two parts
      for (let len1 = 1; len1 < length; len1++) {
        dp[start][length] = dp[start][length] || (dp[start][len1] && dp[start + len1][length - len1])
      }
    }
  }
  return dp[0][s.length]
};

console.log(checkValidString("()"), true)
console.log(checkValidString("(*)"), true)
console.log(checkValidString("(*))"), true)