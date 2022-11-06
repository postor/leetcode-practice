/**
 * @param {number} n
 * @param {number} minProfit
 * @param {number[]} group
 * @param {number[]} profit
 * @return {number}
 */
var profitableSchemes = function (n, minProfit, group, profit) {
  const modby = Math.pow(10, 9) + 7
  let dic = new Map, defaultMask = [0, 0, 0, 0]

  return starts(0) + (minProfit === 0 ? 1 : 0)

  function starts(i, mask = defaultMask) {
    if (i >= group.length) return 0
    // not using group i
    let rtn = starts(i + 1, mask) % modby

    // using group i
    let used = maskOr(mask, i)
    let cur = calcMask(used)
    if (cur.worker > n) {
      return rtn
    }
    rtn += (cur.profit >= minProfit) ? 1 : 0
    return (rtn + starts(i + 1, used)) % modby
  }

  function calcMask(mask = defaultMask) {
    let cached = nestedDic(mask)
    if (cached) return cached

    for (let i = 0; i < group.length; i++) {
      if (maskHas(mask, i)) {
        let m = maskUnset(mask, i)
        let sub = calcMask(m)
        let rtn = {
          profit: sub.profit + profit[i],
          worker: sub.worker + group[i]
        }
        nestedDic(mask, rtn)
        return rtn
      }
    }
    return {
      profit: 0,
      worker: 0
    }
  }

  function maskUnset(mask = defaultMask, n = 0) {
    let t = mask.concat()
    t[Math.floor(n / 32)] ^= 1 << (n % 32)
    return t
  }

  function maskOr(mask = defaultMask, n = 0) {
    let t = mask.concat()
    t[Math.floor(n / 32)] |= 1 << (n % 32)
    return t
  }
  function maskHas(mask = defaultMask, n = 0) {
    return mask[Math.floor(n / 32)] & 1 << (n % 32)
  }

  function nestedDic(path1 = [], val = undefined) {
    let path = path1.concat()
    let t = dic, key = path.pop()
    while (path.length) {
      let k = path.shift()
      if (!t.has(k)) t.set(k, new Map)
      t = t.get(k)
    }
    if (val === undefined) return t.get(key)
    t.set(key, val)
  }
};

console.log(profitableSchemes(10, 5, [2, 3, 5], [6, 7, 8])) // 7