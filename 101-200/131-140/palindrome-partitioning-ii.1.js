/**
 * @param {string} s
 * @return {number}
 */
var minCut = function (s) {
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
  // console.log(dp.map(x => x.map(y => (y ? 1 : 0)).join('\t')).join('\n'))

  // 长度和需要切的次数的dp，下标i和值v表示子串0-i的最小需要切次数为v
  let lenCuts = [0]

  // 以 aab 为例
  // 0        1        2
  // 0        0        1
  // a切0次   aa切0次   aab切1次

  outer:
  for (let len = 1; len < s.length; len++) {
    // if (len == 3) {
    //   console.log(1)
    // }
    if (dp[0][len]) {
      lenCuts[len] = 0
      continue
    }
    let vals = []
    for (let i = 1; i <= len; i++) {
      if (dp[i][len]) {
        vals.push(lenCuts[i - 1] + 1)
      }
    }
    lenCuts[len] = Math.min(...vals)
    // console.log('??')
  }

  // console.log(lenCuts.join(','))
  return lenCuts[lenCuts.length - 1]

};


console.log(minCut("abbab"));