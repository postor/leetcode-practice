/**
 * @param {number} n
 * @return {number}
 */
var arrangeCoins = function (n) {
  // 1+2+....+x = x(1+x)/2 <= n
  // x*x + x +0.25 = 2n+0.25
  // x+0.5 = sqrt(2n+0.25)
  // x = floor(sqrt(2n+0.25)-0.5)
  return Math.floor(Math.sqrt(2 * n + 0.25) - 0.5)
};