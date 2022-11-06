/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function (prices) {
  // 变成当天买第二天卖出的收益
  for (let i = 1; i < prices.length; i++) {
    prices[i - 1] = prices[i] - prices[i - 1]
  }
  prices[prices.length - 1] = 0


  let max = 0
  for (let d = 0; d < prices.length; d++) {
    let m1 = findMax(0, d)
    let m2 = findMax(d, prices.length)
    max = Math.max(max, m1 + m2)
  }
  return max

  function findMax(from, to) { // 不包含to
    let max = 0, t = 0
    for (let i = from; i < to; i++) {
      t += prices[i]
      if (t < 0) {
        t = 0
        continue
      }
      max = Math.max(max, t)
    }
    return max
  }
};


console.log(maxProfit([3, 3, 5, 0, 0, 3, 1, 4]))