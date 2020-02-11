/**
 * @param {number[]} nums
 * @return {number}
 */
var totalHammingDistance = function (nums) {
  let total = 0
  for (let i = 0; i < 32; i++) {
    let counts = [0, 0]
    for (let j = 0; j < nums.length; j++) {
      counts[nums[j] & 1]++
      nums[j] >>= 1
    }
    total += counts[0] * counts[1]
  }
  return total
};

// console.log(totalHammingDistance([4, 14, 4]))
// console.time()
// console.log(totalHammingDistance(require('./hamming-data').data))
// console.timeEnd()