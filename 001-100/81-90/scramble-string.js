/**
 * @param {string} s1
 * @param {string} s2
 * @return {boolean}
 */
var isScramble = function (s1, s2) {
  // dp[i][j] = v 代表 s1.substr(i,v)==s2.substr(j,v)
  let dp = []

  // 初始化 v = 1 情况包含在初始化中
  for (let i = 0; i < s1.length; i++) {
    dp[i] = []
    for (let j = 0; j < s2.length; j++) {
      dp[i][j] = [true, s1[i] == s2[j]]
    }
  }

  // 基于基础表增长 v 的值
  for (let v = 2; v < s1.length + 1; v++) {
    for (let i = 0; i < s1.length; i++) {
      item:
      for (let j = 0; j < s2.length; j++) {
        // 没有翻转，尝试各追加
        for (let q = 1; q < dp[i][j].length; q++) {
          let left = v - q
          if (i + q >= s1.length) continue
          if (j + q >= s1.length) continue
          if (dp[i][j][q] && dp[i + q][j + q][left]) {
            dp[i][j][v] = true
            printdp()
            continue item
          }
        }

        // 有翻转
        for (let q = 1; q < v; q++) {
          // 基于之前的 dp，满足以下才算本 dp 成立
          let q2 = v - q
          // 前面 q 个翻转到后面成立
          if (j + q2 >= s2.length) continue
          if (!dp[i][j + q2][q]) continue

          // 后面 v-q 个翻转到前面也成立的情况
          if (i + q >= s1.length) continue
          if (!dp[i + q][j][q2]) continue

          // 都成立了
          dp[i][j][v] = true
          printdp()
          continue item
        }

        dp[i][j][v] = false
      }
    }
  }
  return dp[0][0][s1.length]

  function printdp() {
    // console.log('')
    // console.log(dp.map(x => x.map(y => {
    //   for (let i = y.length - 1; i >= 0; i--) {
    //     if (y[i]) return i
    //   }
    // })).join('\n'))
  }
};

console.log(isScramble("great", "rgeat"))