/**
 * @param {number} n
 * @return {number}
 */
var checkRecord = function (n) {
  const MOD = BigInt(1000000007)
  let dp = [
    new Array(n + 1).fill(BigInt(0)), // dp[0][i] lists not ending with L
    new Array(n + 1).fill(BigInt(0)), // dp[1][i] lists ending with 1 L
    new Array(n + 1).fill(BigInt(0)), // dp[2][i] lists ending with 2 L
  ]
  dp[0][1] = dp[1][1] = BigInt(1)

  for (let i = 2; i <= n; i++) {
    // add 1 P
    dp[0][i] = (dp[0][i - 1] + dp[1][i - 1] + dp[2][i - 1]) % MOD
    // add 1 L
    dp[1][i] = dp[0][i - 1]
    dp[2][i] = dp[1][i - 1]
  }

  if (n == 1) return 3
  let a0 = possible(n) // total for 0 A record
  let a1 = BigInt(0)  // total for 1 A record
  for (let i = 0; i < n; i++) {
    if (i == 0 || i == n - 1) {
      a1 += possible(n - 1)
      continue
    }
    a1 += (possible(i) * possible(n - i - 1)) % MOD
  }
  return (a0 + a1) % MOD

  function possible(n) {
    return dp.map(x => x[n]).reduce((a, b) => a + b) % MOD
  }
};

// console.log(checkRecord(1))
// console.log(checkRecord(2))
console.log(checkRecord(100000))