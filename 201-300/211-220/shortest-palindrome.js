/**
 * @param {string} s
 * @return {string}
 */
var shortestPalindrome = function (s) {
  let tmp = ''
  for (let j = s.length - 1; j > 0; j--) {
    if (isPalindrome(0, j)) return tmp + s
    tmp = tmp + s[j]
  }
  return tmp + s

  function isPalindrome(i = 0, j = s.length - 1) {
    for (let x = i, y = j; x < y; x++ , y--) {
      if (s[x] != s[y]) return false
    }
    return true
  }
};

// console.log(shortestPalindrome('aacecaaa'))
// console.log(shortestPalindrome('abcd'))