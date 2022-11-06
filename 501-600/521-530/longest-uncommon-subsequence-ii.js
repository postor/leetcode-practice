/**
 * @param {string[]} strs
 * @return {number}
 */
var findLUSlength = function (strs) {
  const CACHE = {}

  // find same
  let noSame = strs.filter((x, i) => !strs.some((y, j) => cachedIsSub(y, x) && i != j))
  if (!noSame.length) return -1
  return Math.max(...noSame.map(x => x.length))


  function cachedIsSub(a, b) {
    let key = `${a}|${b}`
    if (CACHE[key] !== undefined) return CACHE[key]
    CACHE[key] = isSub(a, b)
    return CACHE[key]
  }

  /**
   * 
   * @param {*} a str
   * @param {*} b sub
   */
  function isSub(a, b) {
    let j = 0
    for (let i = 0; i < b.length; i++) {
      if (j == a.length) return false
      while (b[i] != a[j]) {
        j++
        if (j == a.length) return false
      }
      j++
      continue
    }
    return true
  }
};

console.log(findLUSlength(["aabbcc", "aabbcc", "cb", "abc"]))