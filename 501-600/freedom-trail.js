/**
 * @param {string} ring
 * @param {string} key
 * @return {number}
 */
var findRotateSteps = function (ring, key) {
  let dp = {}, cache = {}
  for (let j = 0; j < ring.length; j++) {
    let char = ring[j]
    for (let i = 0; i < ring.length; i++) {
      let steps1 = getSteps(i, j)
      setDp(i, char, steps1, j)
    }
  }
  let total = r(0, 0)+key.length
  return total

  function r(cur, ki) {
    if (ki == key.length) return 0
    if (cache[cur] && cache[cur][ki] !== undefined) return cache[cur][ki]
    let dpData = getDp(cur, key[ki])
    let min = Math.min(...dpData.map(([steps, j]) => steps + r(j, ki + 1)))
    if (!cache[cur]) cache[cur] = {}
    cache[cur][ki] = min
    return min
  }

  function setDp(i, char, steps, j) {
    if (!dp[i]) dp[i] = {}
    if (!dp[i][char]) dp[i][char] = []
    dp[i][char].push([steps, j])
  }
  function getDp(i, char) {
    if (!dp[i]) return undefined
    return dp[i][char]
  }
  function getSteps(i, j) {
    if (i == j) return 0
    let diff = Math.abs(i - j)
    let other = ring.length - diff
    return Math.min(diff, other)
  }

};

console.log(findRotateSteps("caotmcaataijjxi"
  , "oatjiioicitatajtijciocjcaaxaaatmctxamacaamjjx"))