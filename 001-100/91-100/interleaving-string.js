/**
 * @param {string} s1
 * @param {string} s2
 * @param {string} s3
 * @return {boolean}
 */
var isInterleave = function (s1, s2, s3) {
  return tryMatch()
  function tryMatch(i1 = 0, i2 = 0, i3 = 0) {
    if (i3 == s3.length && i2 == s2.length && i1 == s1.length) {
      return true
    }
    if (i3 > s3.length || i2 > s2.length || i1 > s1.length) {
      return false
    }
    if (s3[i3] !== s1[i1]) {
      if (s3[i3] !== s2[i2]) {
        return false
      }
      return tryMatch(i1, i2 + 1, i3 + 1)
    }
    if (s3[i3] !== s2[i2]) {
      return tryMatch(i1 + 1, i2, i3 + 1)
    }
    return tryMatch(i1 + 1, i2, i3 + 1) || tryMatch(i1, i2 + 1, i3 + 1)
  }
};

console.log(isInterleave("aabcc", "dbbca", "aadbbcbcac"))