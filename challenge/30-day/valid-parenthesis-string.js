/**
 * @param {string} s
 * @return {boolean}
 */
var checkValidString = function (s) {
  return check(s, '()') && check([...s].reverse(), ')(')

  function check(s, dic) {
    let min = 0, max = 0
    for (let char of s) {
      switch (char) {
        case dic[0]:
          min += 1
          max += 1
          break
        case dic[1]:
          min -= 1
          max -= 1
          break
        case '*':
          min -= 1
          max += 1
          break
      }
      if (max < 0) return false
    }
    if (min > 0) return false
    return true
  }
};