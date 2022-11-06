/**
 * @param {number} n
 * @param {number} k
 * @return {number[]}
 */
var constructArray = function (n, k) {
  let set = new Set(new Array(n).fill(0).map((x, i) => i + 1))
  let rtn = r(set)
  return rtn

  function r(left = new Set(), prefix = [], diffs = new Set()) {
    if (left.size === 0) {
      return diffs.size === k ? prefix : []
    }
    if (left.size + diffs.size < k) return []

    for (let num of left) {
      let l1 = new Set(left), d1 = new Set(diffs)
      if (prefix.length) {
        d1.add(Math.abs(prefix[prefix.length - 1] - num))
        if (d1.size > k) continue
      }
      l1.delete(num)
      let rtn = r(l1, prefix.concat([num]), d1)
      if (rtn.length) return rtn
    }
    return []
  }
};

console.log(constructArray(92, 80))
// console.log(constructArray(3, 1))