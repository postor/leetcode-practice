/**
 * @param {string} text1
 * @param {string} text2
 * @return {number}
 */
var longestCommonSubsequence = function (text1, text2) {
  let cache = new Array(text1.length).fill(0).map(x => new Array(text2.length).fill(-1))
  let rtn = r()
  return rtn
  function r(i1 = 0, i2 = 0) {
    if (i1 >= text1.length || i2 >= text2.length) return 0
    if (cache[i1][i2] !== -1) return cache[i1][i2]
    if (text1[i1] === text2[i2]) return setCache(r(i1 + 1, i2 + 1) + 1)
    return setCache(Math.max(r(i1, i2 + 1), r(i1 + 1, i2)))

    function setCache(v) {
      cache[i1][i2] = v
      return v
    }
  }
};

console.log(longestCommonSubsequence('abcde','ace'))