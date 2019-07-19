/**
 * @param {number[]} nums
 * @return {number}
 */
var minMoves2 = function (nums) {
  let dicV = {}, dicC = {}
  nums.forEach(x => {
    if (!dicC[x]) {
      dicV[x] = x
      dicC[x] = 1
      return
    }
    dicC[x]++
  })
  let min = Infinity, keys = Object.keys(dicV)
  keys.forEach(k => {
    let changes = 0
    keys.forEach(k2 => {
      if (k2 == k) return
      changes += Math.abs(dicV[k] - dicV[k2]) * dicC[k2]
    })
    min = Math.min(min, changes)
  })
  return min
};

console.log(minMoves2([1, 0, 0, 8, 6]))