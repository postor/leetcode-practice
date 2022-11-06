/**
 * @param {string[]} deadends
 * @param {string} target
 * @return {number}
 */
var openLock = function (deadends, target) {
  let cache = new Map,
    deadendsSet = new Set(deadends.map(x => Number.parseInt(deadends))),
    targetNum = Number.parseInt(target)

  let rtn = minStep()
  return rtn == Number.MAX_SAFE_INTEGER ? -1 : rtn

  function minStep(from = [0, 0, 0, 0]) {
    let n = toNum(from)
    if (n == targetNum) return 0
    if (deadendsSet.has(n)) return Number.MAX_SAFE_INTEGER
    if (cache.has(n)) return cache.get(n)
    deadendsSet.add(n)
    let min = Number.MAX_SAFE_INTEGER
    for (let i = 0; i < 4; i++) {
      min = Math.min(min, tryMoveIndex(from, i, 1), tryMoveIndex(from, i, -1))
    }
    let rtn = min + 1
    cache.set(n, rtn)
    return rtn

    function tryMoveIndex(from = [], i, delta) {
      let t = from.concat()
      t[i] = (t[i] + delta + 10) % 10
      return minStep(t)
    }
  }

  function toNum(arr = []) {
    return arr.reduce((a, b) => a * 10 + b)
  }
};

console.log(openLock(["0201", "0101", "0102", "1212", "2002"], '0202'))