/**
 * @param {number} n
 * @param {number} m
 * @return {number}
 */
var flipLights = function (n, m) {
  // fist a*6 bulps always the same, we only need remember 1*6
  let total = n > 6 ? n % 6 + 6 : n, states = new Set()
  let inital = parseInt(''.padEnd(total, '1'), 2),
    even = parseInt(''.padEnd(total, '10'), 2),
    odd = parseInt(''.padEnd(total, '01'), 2),
    k3p1 = parseInt(''.padEnd(total, '100'), 2),
    all = inital, traveled = {}

  r(inital, m)
  return states.size

  function r(cur, left) {
    let key = cur + '_' + left
    if (traveled[key]) return
    traveled[key] = true
    if (left === 0) {
      states.add(cur)
      return
    }
    r(cur ^ all, left - 1)
    r(cur ^ even, left - 1)
    r(cur ^ odd, left - 1)
    r(cur ^ k3p1, left - 1)
  }

};

console.log(flipLights(1, 1), 2)
console.log(flipLights(2, 1), 3)
console.log(flipLights(3, 1), 4)