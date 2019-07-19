/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isSubsequence = function (s, t) {
  let i = 0, j = 0
  while (i < s.length) {
    while (t[j] != s[i]) {
      if (j >= t.length) return false
      j++
    }
    i++ , j++
  }
  return true
};