/**
 * @param {number} n
 * @return {number}
 */
var countDigitOne = function (n) {
  //0-9含1个1, 0-99含20
  let dp = [0, 1]
  // dp[i] = dp[i-1]*10+Math.pow(10,i-1)

  let c = 1, v = 10
  while (v <= n) {
    dp[c] = dp[c - 1] * 10 + Math.pow(10, c - 1)
    c++
    v *= 10
  }
  c = c - 1
  v = v / 10

  let rtn = 0, t = n, plus = 0 //例如n=225,v=100,c=2
  while (c > 0) {
    let mod = t % v
    let count = (t - mod) / v
    rtn += dp[c] * count + (t - mod) * plus
    if (count == 1) plus++
    if (count > 1) rtn += v
    c--
    v /= 10
    t = mod
  }
  // 个位
  if (t > 0) rtn += 1
  rtn += (t + 1) * plus

  return rtn
};

// console.log(countDigitOne(13)) //6
// console.log(countDigitOne(10)) //2
// console.log(countDigitOne(999)) //300