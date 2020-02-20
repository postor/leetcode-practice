/**
 * @param {number[]} nums
 * @return {number}
 */
var findLHS = function (nums) {
  let map = new Map()
  for (let n of nums) {
    map.set(n, map.has(n) ? map.get(n) + 1 : 1)
  }

  // let sortedKeys = [...map.keys()].sort((a, b) => a - b), max = 0
  // for (let i = 1; i < sortedKeys.length; i++) {
  //   if (sortedKeys[i] - sortedKeys[i - 1] === 1) {
  //     max = Math.max(max, map.get(sortedKeys[i]) + map.get(sortedKeys[i - 1]))
  //   }
  // }
  // return max

  let max = 0
  for (let [k, v] of map.entries()) {
    if (map.has(k + 1)) max = Math.max(max, v + map.get(k + 1))
  }
  return max
};

console.log(findLHS([1, 3, 2, 2, 5, 2, 3, 7]))