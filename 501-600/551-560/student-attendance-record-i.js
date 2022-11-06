/**
 * @param {string} s
 * @return {boolean}
 */
var checkRecord = function (s) {
  let last = undefined, continueLate = 0, absent = false
  for (let char of s) {
    if (char === 'A') {
      if (absent) return false
      absent = true
    }
    if (char === 'L') {
      if (last === 'L') {
        if (continueLate == 2) {
          return false
        } else {
          continueLate++
        }
      } else {
        continueLate = 1
      }
    }
    last = char
  }
  return true
};

// console.log(checkRecord("PPALLL"))