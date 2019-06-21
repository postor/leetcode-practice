/**
 * @param {number[]} coins
 * @param {number} amount
 * @return {number}
 */
var coinChange = function (coins, amount) {
  coins.sort((x, y) => y - x)
  let min = Number.MAX_SAFE_INTEGER
  r()
  return min == Number.MAX_SAFE_INTEGER ? -1 : min

  function r(i = 0, left = amount, count = 0) {
    if (!left) {
      min = Math.min(min, count)
    }
    if (count > min) return
    if (i == coins.length) return
    // 使用j张最大的，贪心
    for (let j = Math.floor(left / coins[i]); j >= 0; j--) {
      r(i + 1, left - j * coins[i], count + j)
    }
  }
};

console.log(coinChange([1, 2, 5], 11))