/**
 * @param {string} str
 * @return {number}
 */
var myAtoi = function (str) {
  if (!str.length) return 0

  var i, flag = 1, val = 0
  for (i = 0; i < str.length; i++) {
    if (str[i] !== ' ') {
      break;
    }
  }
  if (str.charCodeAt(i) == '+'.charCodeAt(0)) {
    flag = 1
    i++
  } else if (str.charCodeAt(i) == '-'.charCodeAt(0)) {
    flag = -1
    i++
  }
  if (i >= str.length) return 0
  var charcode0 = '0'.charCodeAt(0)

  val = str.charCodeAt(i) - charcode0
  if (val > 9 || val < 0) {
    // not number
    return 0
  }
  i++
  while (i < str.length) {
    var t = str.charCodeAt(i) - charcode0
    if (t > 9 || t < 0) {
      break;
    }
    val = val * 10 + t
    i++
  }

  var max = Math.pow(2, 31)
  if (val >= max) {
    val = flag == 1 ? max - 1 : max
  }

  return val * flag

};