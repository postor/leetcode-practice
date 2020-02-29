/**
 * @param {string} s
 * @return {number}
 */
var strangePrinter = function (s) {
  if (!s.length) return 0
  const cache = {}
  let rtn = Math.min(
    stepsBasedOn(0, s.length, s[0]),
    stepsBasedOn(0, s.length, s[s.length - 1]))
  return rtn

  function stepsBasedOn(start, length, base) {
    let cached = getCache(start, length, base)
    if (cached !== undefined) return cached
    let l = start, r = start + length - 1
    while (s[l] === base) l++
    while (s[r] === base) r--
    if (r < l) return cacheValue(1)

    let min = 1 + Math.min(
      stepsBasedOn(l, r - l + 1, s[l]),
      stepsBasedOn(l, r - l + 1, s[r]))

    // split first group enclosed by base
    let ll = l
    l = s.indexOf(base, l)
    if (l !== -1 && l < r) {
      let steps = Math.min(stepsBasedOn(ll, l - ll, s[ll]), stepsBasedOn(ll, l - ll, s[l - 1]))
      min = Math.min(min, steps + stepsBasedOn(l, r - l + 1, base))
    }
    // last group
    let rr = r
    r = s.lastIndexOf(base, r)
    if (r !== -1 && ll < r) {
      let steps = Math.min(stepsBasedOn(r + 1, rr - r, s[r + 1]), stepsBasedOn(r + 1, rr - r, s[rr]))
      min = Math.min(min, steps + stepsBasedOn(ll, r - ll + 1, base))
    }
    return cacheValue(min)

    function cacheValue(v) {
      setCache(start, length, base, v)
      return v
    }
  }

  function setCache(start, length, base, steps) {
    // console.log([s.substr(0, start), s.substr(start, length), s.substr(start + length)].join('|'), steps, base)
    if (cache[base] === undefined) cache[base] = []
    if (cache[base][length] === undefined) cache[base][length] = []
    cache[base][length][start] = steps
  }
  function getCache(start, length, base) {
    if (cache[base] === undefined) return undefined
    if (cache[base][length] === undefined) return undefined
    return cache[base][length][start]
  }
};

console.log(strangePrinter("abcadabdacbdcabcabadacd"))
console.log(strangePrinter("abcccadaabdaccccbbdddddcaabcabbbadacd"))
console.log(strangePrinter("bbdabcdababadcbdbcbdcbccaacadadccbacabdcdb"))
console.log(strangePrinter("baacdddaaddaaaaccbddbcabdaabdbbcdcbbbacbddcabcaaa"))
console.log(strangePrinter("aaabbb"))
console.log(strangePrinter("aba"))
