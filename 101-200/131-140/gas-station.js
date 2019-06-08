/**
 * @param {number[]} gas
 * @param {number[]} cost
 * @return {number}
 */
var canCompleteCircuit = function (gas, cost) {
  for (let i = 0; i < gas.length; i++) {
    if (r(i, 0, i, true)) return i
  }
  return -1

  function r(start, cur, target, first = false) {
    let s = start == gas.length ? 0 : start
    if (!first && s == target) return true
    let c = cur + gas[s]
    let left = c - cost[s]
    if (left < 0) return false
    return r(s + 1, left, target)
  }

};

// console.log(canCompleteCircuit([1, 2, 3, 4, 5], [3, 4, 5, 1, 2]))
console.log(canCompleteCircuit([3, 1, 1], [1, 2, 2]))
