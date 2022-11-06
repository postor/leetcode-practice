/**
 * @param {number} num
 * @return {string}
 */
var convertToBase7 = function (num) {
  if (!num) return '0'
  let t = Math.abs(num), rtn = '', prefix = num < 0 ? '-' : ''
  while (true) {
    let m = t % 7
    rtn = m + rtn
    t -= m
    if (!t) break
    t /= 7
  }
  return prefix + rtn
};