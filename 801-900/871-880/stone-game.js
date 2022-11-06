/**
 * @param {number[]} piles
 * @return {boolean}
 */
var stoneGame = function (piles) {
  let cache = piles.map(x => piles.map(y => -1))

  return bestChoice(0, piles.length - 1) > 0

  /**
   * find the best choice
   * @param {number} l from index 
   * @param {number} r to index
   * @returns {number} beat stones (alice's - bob's or bob's -alice's based on who's turn)
   */
  function bestChoice(l, r) {
    if (cache[l][r] !== -1) return cache[l][r]

    if (r == l + 1) return setCache(Math.abs(piles[l] - piles[r]))
    return setCache(Math.max(
      piles[l] - bestChoice(l + 1, r),
      piles[r] - bestChoice(l, r - 1))
    )

    function setCache(val) {
      cache[l][r] = val
      return val
    }
  }
};