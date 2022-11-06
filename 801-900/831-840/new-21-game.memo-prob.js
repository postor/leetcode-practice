/**
 * @param {number} n
 * @param {number} k
 * @param {number} maxPts
 * @return {number}
 */
var new21Game = function (n, k, maxPts) {
  let memo = new Array(k + maxPts)

  let [lgeK, lteN, probNK] = memoR(0)
  // return lteN / lgeK
  return probNK

  function memoR(points) {
    if (!memo[points]) {
      memo[points] = r(points, memoR)
    }
    return memo[points]
  }

  function r(points, rfn = r) {
    if (points >= k) {
      return [1, points <= n ? 1 : 0, points <= n ? 1 : 0]
    }
    let lgeK = 0, lteN = 0, probNK = 0
    for (let i = 1; i <= maxPts; i++) {
      let [k1, n1, nk] = rfn(points + i, rfn)
      lgeK += k1
      lteN += n1
      probNK += nk / maxPts
    }
    return [lgeK, lteN, probNK]
  }
};

// console.log(new21Game(6, 1, 10)) //0.6
// console.log(new21Game(21, 17, 10)) //0.73278