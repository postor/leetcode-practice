/**
 * @param {number} n
 * @return {number}
 */
var getMoneyAmount = function (n) {
  let cache = {}
  let rtn =  r(1, n)
  return rtn
  function r(from, to) {
    if (from == to) return 0
    if (to - from == 1) return from
    let cached = getCache(from, to)
    if (cached) return cached

    let minMoney = Number.MAX_SAFE_INTEGER
    for (let i = from + 1; i < to; i++) {
      let v = i + Math.max(r(from, i - 1), r(i + 1, to))
      minMoney = Math.min(minMoney, v)
    }
    setCache(from,to,minMoney)
    return minMoney
  }

  function getCache(from, to) {
    if (cache[from]) return cache[from][to]
  }
  function setCache(from, to, v) {
    if (!cache[from]) cache[from] = {}
    cache[from][to] = v
  }
};

console.log(getMoneyAmount(5))