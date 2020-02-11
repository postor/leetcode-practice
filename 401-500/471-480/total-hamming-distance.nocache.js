/**
 * @param {number[]} nums
 * @return {number}
 */
var totalHammingDistance = function (nums) {
  let total = 0
  for (let i = 0; i < nums.length - 1; i++) {
    for (let j = i + 1; j < nums.length; j++) {
      let xor = nums[i] ^ nums[j]
      total += count1s(xor)
    }
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