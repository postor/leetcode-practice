/**
 * @param {number} n
 * @return {number}
 */
var integerReplacement = function (n) {
  return r(n)
  function r(x = n) {
    if (x == 1) return 0
    if ((x % 2) == 0) return r(x / 2) + 1
    let add = r((x + 1) / 2) + 2
    let sub = r((x - 1) / 2) + 2
    return Math.min(add, sub)

  }
};

console.log(integerReplacement(8))