/**
 * @param {string} s
 * @return {boolean}
 */
var validPalindrome = function (s) {
  return r(0, s.length - 1, 1)
  function r(start, end, removeCount) {
    for (let i = start, j = end; i < j; i++ , j--) {
      if (s[i] === s[j]) continue
      if (removeCount === 0) return false
      if (r(i, j - 1, removeCount - 1)) return true
      if (r(i + 1, j, removeCount - 1)) return true
      return false
    }
    return true
  }

};

console.log(validPalindrome("abca"), true)