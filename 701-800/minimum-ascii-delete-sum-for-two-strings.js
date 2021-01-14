function totalAscii(str = '') {
  let rtn = 0
  for (let i = 0; i < str.length; i++) {
    rtn += str.charCodeAt(i)
  }
  return rtn
}

/**
 * @param {string} text1
 * @param {string} text2
 * @return {number}
 */
var longestCommonSubsequence = function (text1, text2) {
  let cache = new Array(text1.length).fill(0).map(x => new Array(text2.length))
  let rtn = r()
  return rtn
  function r(i1 = 0, i2 = 0) {
    if (i1 >= text1.length || i2 >= text2.length) return ''
    if (cache[i1][i2] !== undefined) return cache[i1][i2]
    if (text1[i1] === text2[i2]) return setCache(text2[i2] + r(i1 + 1, i2 + 1))
    let v1 = r(i1, i2 + 1), v2 = r(i1 + 1, i2)

    return setCache(totalAscii(v1) > totalAscii(v2) ? v1 : v2)

    function setCache(v) {
      cache[i1][i2] = v
      return v
    }
  }
};

/**
 * @param {string} s1
 * @param {string} s2
 * @return {number}
 */
var minimumDeleteSum = function (s1, s2) {
  let lcs = longestCommonSubsequence(s1, s2)
  return totalAscii(s1) + totalAscii(s2) - 2 * totalAscii(lcs)

};

// console.log(minimumDeleteSum('sea', 'eat'))
// console.log(minimumDeleteSum('delete', 'leet'))