/**
 * @param {number[]} gas
 * @param {number[]} cost
 * @return {number}
 */
var canCompleteCircuit = function (gas, cost) {
  let gain = gas.map((x, i) => x - cost[i])
  let gain2 = gain.concat(gain)
  let start = 0, sum = 0
  for (let i = 0; i < gain2.length; i++) {
    let x = gain2[i]
    sum += x
    if (sum < 0) {
      if (i >= gas.length) return -1
      start = i + 1
      sum = 0
      continue
    }
    if (i - start == gas.length) return start
  }
};

// console.log(canCompleteCircuit([1, 2, 3, 4, 5], [3, 4, 5, 1, 2]))
// console.log(canCompleteCircuit([3, 1, 1], [1, 2, 2]))
