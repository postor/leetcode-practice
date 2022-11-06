/**
 * @param {number} n
 * @return {number}
 */
var countNumbersWithUniqueDigits = function (n) {
  let dp = [1, 10]
  for (let i = 2; i <= n; i++) {
    dp[i] = dp[i - 1] + total(i)
  }
  return dp[n]


  function total(n) {
    let total = 9 // fist cannot choose zero
    let among = 9 // you can choose from 0-9, but first digit has been chosen
    for (let i = 1; i < n; i++) {
      total *= among
      among--
    }
    return total
  }

};

// console.log(countNumbersWithUniqueDigits(2))