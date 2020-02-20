/**
 * @param {number[]} price
 * @param {number[][]} special
 * @param {number[]} needs
 * @return {number}
 */
var shoppingOffers = function (price, special, needs) {
  let maxMoney = normalBuy(needs)
  let saves = special.map(x => normalBuy(x.slice(0, price.length)) - x[x.length - 1])
  let rtn = maxMoney
  trySaveMoney(needs, maxMoney)
  return rtn

  function trySaveMoney(needs, curMoney) {
    // if (!needs.map) debugger
    rtn = Math.min(curMoney, rtn)
    for (let i = 0; i < saves.length; i++) {
      if (saves[i] <= 0) continue
      let after = needs.map((x, j) => x - special[i][j])
      if (after.some(x => x < 0)) continue
      trySaveMoney(after, curMoney - saves[i])
    }
  }

  function normalBuy(needs) {
    return needs.map((x, i) => x * price[i]).reduce((a, b) => a + b)
  }
};

console.log(shoppingOffers([4, 3, 2, 9, 8, 8]
  , [[1, 5, 5, 1, 4, 0, 18], [3, 3, 6, 6, 4, 2, 32]]
  , [6, 5, 5, 6, 4, 1]))

console.log(shoppingOffers([0, 0, 0]
  , [[1, 1, 0, 4], [2, 2, 1, 9]]
  , [2, 2, 1]))

