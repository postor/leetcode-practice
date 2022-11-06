/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLastWord = function (s) {
  let len = 0, firstEmpty = true
  for (let i = s.length - 1; i >= 0; i--) {
    if (s[i] == ' ') {
      if (firstEmpty) {
        continue
      }
      break
    }
    len++
    firstEmpty = false
  }
  return len
};