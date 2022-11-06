/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function (prices) {
  let oneBuyOneSell = 0;
  let twoBuyTwoSell = 0;
  let oneBuy = Number.POSITIVE_INFINITY
  let twoBuy = Number.POSITIVE_INFINITY;

  for (let i = 0; i < prices.length; i++) {
    const p = prices[i];
    // 购买价格
    oneBuy = Math.min(oneBuy, p);
    // 出售后的利润
    oneBuyOneSell = Math.max(oneBuyOneSell, p - oneBuy);

    // 第二次购买的投入，综合了第一次的利润
    twoBuy = Math.min(twoBuy, p - oneBuyOneSell);

    // 第二次出售的利润，因为算投入的时候综合了第一次的利润，所以这就是总利润
    twoBuyTwoSell = Math.max(twoBuyTwoSell, p - twoBuy);
    console.log(JSON.stringify({
      p,
      oneBuy,
      oneBuyOneSell,
      twoBuy,
      twoBuyTwoSell
    }))
  }

  return twoBuyTwoSell;
};


console.log(maxProfit([3, 3, 5, 0, 0, 3, 1, 4]))