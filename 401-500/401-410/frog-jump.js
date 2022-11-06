/**
 * @param {number[]} stones
 * @return {boolean}
 */
var canCross = function (stones) {
  let dp = {}
  stones.forEach(x => dp[x] = new Set())
  let target = stones[stones.length - 1]
  if(!dp[1]) return false
  if(stones.length==2) return true
  dp[1].add(1)
  for (let cur = 1; cur < stones.length - 1; cur++) {
    let values = dp[stones[cur]].values()
    while (true) {
      let { value, done } = values.next()
      if (done) break
      if (addPos(stones[cur], value + 1)) return true
      if (addPos(stones[cur], value)) return true
      if (addPos(stones[cur], value - 1)) return true
    }
  }
  return false

  function addPos(cur, len) {
    if (len == 0) return
    let t = cur + len
    if (!dp[t]) return
    if (t == target) {
      return true
    }
    dp[t].add(len)
  }
};

console.log(canCross([0, 1, 3, 5, 6, 8, 12, 17]))
console.log(canCross([0, 1, 2, 3, 4, 8, 9, 11]))