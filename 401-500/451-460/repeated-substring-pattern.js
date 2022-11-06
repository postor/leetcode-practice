/**
 * @param {string} s
 * @return {boolean}
 */
var repeatedSubstringPattern = function (s = '') {
  outer:
  for (let length = 1; length <= s.length / 2; length++) {
    if (s.length % length) continue
    let substr = s.substr(0, length)
    for (let start = length; start < s.length; start += length) {
      if (!compare(start)) continue outer
    }
    return true

    function compare(start) {
      for (let i = 0; i < length; i++) {
        if (substr[i] != s[start + i]) return false
      }
      return true
    }
  }

  return false
};

// console.log(repeatedSubstringPattern('abab'))
// console.log(repeatedSubstringPattern('aba'))
// console.log(repeatedSubstringPattern('abcabcabcabc'))