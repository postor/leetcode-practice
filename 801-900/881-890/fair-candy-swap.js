/**
 * @param {number[]} aliceSizes
 * @param {number[]} bobSizes
 * @return {number[]}
 */
var fairCandySwap = function (aliceSizes, bobSizes) {
  // 思路：应该交换的差额 = (alice总数-bob总数)/2
  let sum1 = aliceSizes.reduce((a, b) => a + b), sum2 = bobSizes.reduce((a, b) => a + b)
  let exchange = (sum1 - sum2) / 2
  for (let a of aliceSizes) {
    for (let b of bobSizes) {
      // alice 比 bob 多则应该 a 比 b 大
      if ((a - b) === exchange) {
        return [a, b]
      }
    }
  }
};