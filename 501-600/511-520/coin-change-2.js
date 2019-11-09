/**
 * @param {number} amount
 * @param {number[]} coins
 * @return {number}
 */
var change = function (amount, coins) {
  if (amount == 0) return 1
  let CACHE = coins.map(x => ({}))
  return r()

  function r(start = 0, val = 0) {
    if (val > amount || start == coins.length) return 0
    if (val == amount) {
      return 1
    }
    if (CACHE[start][val] != undefined) return CACHE[start][val]

    let total = 0
    total += r(start, val + coins[start])
    total += r(start + 1, val)
    CACHE[start][val] = total

    return CACHE[start][val]
  }
};

// console.log(change(5, [1, 2, 5]))