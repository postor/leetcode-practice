/**
 * @param {string} s
 * @return {string[]}
 */
var findRepeatedDnaSequences = function (s) {
  let sarr = s.split('')

  // dp 1
  let q = []
  let dp = sarr.map((x, i) => sarr.map((y, j) => {
    let rtn = x == y ? 1 : 0
    if (rtn) {
      q.push([i, j])
    }
    return rtn
  }))

  // dp 2
  let q2 = []
  for (let x = 0; x < q.length; x++) {
    let [i, j] = q[x]
    if (j + 1 >= s.length) continue
    if (!dp[i + 1] || !dp[i + 1][j + 1]) continue
    dp[i][j] = 2
    q2.push([i, j])
  }

  // dp 4
  let q4 = []
  for (let x = 0; x < q2.length; x++) {
    let [i, j] = q2[x]
    if (j + 2 >= s.length) continue
    if (!dp[i + 2] || !dp[i + 2][j + 2]) continue
    if (dp[i + 2][j + 2] < 2) continue
    dp[i][j] = 4
    q4.push([i, j])
  }


  // dp 8
  let q8 = []
  for (let x = 0; x < q4.length; x++) {
    let [i, j] = q4[x]
    if (j + 4 >= s.length) continue
    if (!dp[i + 4] || !dp[i + 4][j + 4]) continue
    if (dp[i + 4][j + 4] < 4) continue
    dp[i][j] = 8
    q8.push([i, j])
  }

  // dp 10
  let rtn = []
  for (let x = 0; x < q8.length; x++) {
    let [i, j] = q8[x]
    if (j + 8 >= s.length) continue
    if (!dp[i + 8] || !dp[i + 8][j + 8]) continue
    if (dp[i + 8][j + 8] < 2) continue
    let s1 = s.slice(i, i + 10)
    if (rtn.includes(s1)) continue
    rtn.push(s1)
  }


  return rtn
};

// console.log(findRepeatedDnaSequences("AAAAAAAAAAA"))
// findRepeatedDnaSequences(require('./dna'))

console.log(findRepeatedDnaSequences("AAAAACCCCCAAAAACCCCCCAAAAAGGGTTT"))