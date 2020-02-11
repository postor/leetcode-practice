/**
 * @param {number[]} nums
 * @return {number}
 */
var totalHammingDistance = function (nums) {
  const MAP_SIZE_LIMIT = 10000
  let map = new Map(), total = 0
  for (let i = 0; i < nums.length - 1; i++) {
    for (let j = i + 1; j < nums.length; j++) {
      let xor = nums[i] ^ nums[j]
      if (map.has(xor)) {
        map.set(xor, map.get(xor) + 1)
      } else {
        if (map.size > MAP_SIZE_LIMIT) {
          total += count1s(xor)
          continue
        }
        map.set(xor, 1)
      }
    }
  }

  for (let [xor, count] of map.entries()) {
    total += count1s(xor) * count
  }
  return total

  function count1s(xor) {
    let t = xor, count = 0
    while (t) {
      if (t & 1) count++
      t >>= 1
    }
    return count
  }
};

// console.log(totalHammingDistance([4, 14, 2]))
console.time()
console.log(totalHammingDistance(require('./hamming-data').data))
console.timeEnd()