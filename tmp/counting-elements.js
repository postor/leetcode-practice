/**
 * @param {number[]} arr
 * @return {number}
 */
var countElements = function (arr) {
  let set = new Set()
  for (let n of arr) {
    set.add(n)
  }
  let total = 0
  for (let n of arr) {
    if (set.has(n + 1)) total++
  }
  return total
};