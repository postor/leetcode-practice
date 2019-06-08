/**
 * @param {string} s
 * @return {string[][]}
 */
var partition = function (s) {
  // dp 表示从i到j坐标是否为对称
  let dp = new Array(s.length).fill(null).map(x => [])

  // 初始已知
  for (let i = 0; i < s.length; i++) {
    dp[i][i] = true
  }
  for (let i = 1; i < s.length; i++) {
    dp[i][i - 1] = true
  }

  // 以 aab 为例
  //     0    1    2
  // 0   a
  // 1   ''   a
  // 2        ''   b

  // 计算长度为k+1的字符串是否为对称
  for (let k = 1; k < s.length; k++) {
    for (let i = 0; i < s.length - k; i++) {
      let j = i + k
      dp[i][j] = dp[i + 1][j - 1] && (s[i] == s[j])
    }
  }

  // 以 aab 为例
  //     0    1    2
  // 0   a    aa   aab=false
  // 1   ''   a    ab=false
  // 2        ''   b

  // 找到切分之后仍然全是对称的
  let rtn = []
  r()
  return rtn

  function r(start = 0, end = s.length - 1, strs = []) {
    for (let i = start; i < end; i++) {
      if (dp[start][i]) r(i + 1, end, strs.concat(s.substring(start, i + 1)))
    }
    //i==end
    if (dp[start][end]) {
      rtn.push(strs.concat(s.substring(start, end + 1)))
    }
  }

};

console.log(partition('aab').join('\n'));