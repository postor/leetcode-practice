/**
 * @param {string} a
 * @param {string} b
 * @return {string}
 */
var complexNumberMultiply = function (a, b) {
  let [a1, a2] = toNumbers(a)
  let [b1, b2] = toNumbers(b)
  return `${a1 * b1 - a2 * b2}+${a1 * b2 + b1 * a2}i`

  function toNumbers(str = '') {
    return str.substr(0, str.length - 1).split('+').map(x => parseInt(x))
  }
};

// console.log(complexNumberMultiply("1+1i", "1+1i"))
// console.log(complexNumberMultiply("1+-1i", "1+-1i"))