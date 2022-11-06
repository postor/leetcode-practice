/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function (prices) {
  let ps = prices.map((x, i, arr) => i == arr.length - 1 ? 0 : arr[i + 1] - x)
  let max = 0, t = 0
  for (let i = ps.length - 2; i >= 0; i--) {
    t += ps[i]
    if (t < 0) {
      t = 0
      continue
    }
    max = Math.max(max, t)
  }
  return max
};

console.log(maxProfit([7, 1, 5, 3, 6, 4]))