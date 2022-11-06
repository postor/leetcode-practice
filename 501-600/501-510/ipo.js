/**
 * @param {number} k
 * @param {number} W
 * @param {number[]} Profits
 * @param {number[]} Capital
 * @return {number}
 */
var findMaximizedCapital = function (k, W, Profits, Capital) {
  let cache = {}
  let rtn = W + r()
  return rtn
  function r(used = Capital.map(x => 0), left = k, money = W) {
    if (left == 0) return 0
    let key = `${left}|${money}|${used.join(',')}`
    if (cache[key] !== undefined) return cache[key]
    let maxProfit = 0
    for (let i = 0; i < Capital.length; i++) {
      if (used[i]) continue
      if (Capital[i] > money) continue
      let used1 = used.concat()
      used1[i] = 1
      let p = r(used1, left - 1, money + Profits[i]) + Profits[i]
      if (p > maxProfit) maxProfit = p
    }
    cache[key] = maxProfit
    return maxProfit
  }
};

// console.log(findMaximizedCapital(2, 0, [1, 2, 3], [0, 1, 1]))
// console.log(findMaximizedCapital(10, 0, [1, 2, 3], [0, 1, 2]))
// console.log(findMaximizedCapital(2, 0, [1, 2, 3], [0, 1, 1]))
