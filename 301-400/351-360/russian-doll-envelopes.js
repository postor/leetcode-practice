/**
 * @param {number[][]} envelopes
 * @return {number}
 */
var maxEnvelopes = function (envelopes) {
  if (envelopes.length < 2) return envelopes.length
  envelopes.sort((a, b) => a[0] - b[0]) // nlogn
  let dp = new Array(envelopes.length).fill(1)
  for (let j = 1; j < envelopes.length; j++) {
    for (let i = 0; i < j; i++) {
      if (compare(i, j)) {
        dp[j] = Math.max(dp[j], 1 + dp[i])
      }
    }
  }
  // console.log(dp)
  return Math.max(...dp)

  function compare(i, j) {
    let [a, b] = envelopes[i]
    let [c, d] = envelopes[j]
    return a < c && b < d
  }

};

// console.log(maxEnvelopes([[5,4],[6,4],[6,7],[2,3]]))
console.log(maxEnvelopes([[7, 8], [12, 16], [12, 5], [1, 8], [4, 19], [3, 15], [4, 10], [9, 16]]))