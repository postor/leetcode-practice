/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function (prices) {
  let ps = prices.map((x, i, arr) => i == arr.length - 1 ? 0 : arr[i + 1] - x)
  let arr = ps.filter(x => x > 0)
  if (!arr.length) return 0
  return arr.reduce((a, b) => a + b)
};