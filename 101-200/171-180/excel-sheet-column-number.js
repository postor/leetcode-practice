/**
 * @param {string} s
 * @return {number}
 */
var titleToNumber = function (s) {
  let aCode = 'A'.charCodeAt(0), cur = 0, base = 1
  for (let i = s.length - 1; i >= 0; i--) {
    cur += base
    let diff = s[i].charCodeAt(0) - aCode
    cur += diff * base
    base *= 26
  }
  return cur
};

console.log('A', titleToNumber('A'))
console.log('Z', titleToNumber('Z'))
console.log('AA', titleToNumber('AA'))