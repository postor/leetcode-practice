/**
 * @param {number} num
 * @return {number}
 */
var addDigits = function (num) {
  if (num < 10) return num
  let t = num, sum = 0
  while (true) {
    let mod = t % 10
    sum += mod
    t -= mod
    if (!t) break
    t /= 10
  }
  return addDigits(sum)
};