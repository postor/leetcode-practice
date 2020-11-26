/**
 * @param {string[]} stickers
 * @param {string} target
 * @return {number}
 */
var minStickers = function (stickers, target) {
  let sDics = stickers.map(x => getDic(x)), tDic = getDic(target)

  // check can make
  let sKeys = sDics.reduce((a, b) => Object.assign({}, a, b))
  for (let k in tDic) {
    if (!sKeys[k]) return -1
  }

  // remove uselsess
  sDics = sDics.map(x => {
    for (let k in x) {
      if (!tDic[k]) delete x[k]
    }
    return x
  })

  // recursion with memorize
  let keys = Object.keys(tDic), caches = {}
  let rtn = r()
  return rtn

  function r(left = keys.map(x => tDic[x])) {
    let k = left.join('')
    if (caches[k] !== undefined) return caches[k]
    if (left.every(x => !x)) return 0
    let min = Number.MAX_SAFE_INTEGER
    for (let sd of sDics) {
      let [tuseful, tleft] = calcLeft(left, sd)
      if (!tuseful) continue
      min = Math.min(min, r(tleft))
    }
    caches[k] = min + 1
    return caches[k]
  }

  function calcLeft(left = [], dics = {}) {
    let rtn = left.concat([]), useful = false
    for (let i = 0; i < left.length; i++) {
      let k = keys[i]
      if (!dics[k] || !rtn[i]) continue
      rtn[i] = Math.max(0, rtn[i] - dics[keys[i]])
      useful = true
    }
    return [useful, rtn]
  }

  function getDic(str) {
    let dic = {}
    for (let char of str) {
      dic[char] = (dic[char] || 0) + 1
    }
    return dic
  }
};

// console.log(minStickers(["with", "example", "science"], "thehat"))