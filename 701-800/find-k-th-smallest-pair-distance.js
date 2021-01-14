/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var smallestDistancePair = function (nums, k) {
  nums.sort((a, b) => a - b)
  let maxDis = nums[nums.length - 1] - nums[0]
  let disCounts = new Array(maxDis + 1).fill(0)
  for (let i = 1; i < nums.length; i++) {
    for (let j = 0; j < i; j++) {
      disCounts[nums[i] - nums[j]]++
    }
  }
  let t = 0
  for (let i = 0; i < disCounts.length; i++) {
    t += disCounts[i]
    if (t >= k) return i
  }
};

// console.log(smallestDistancePair([1, 3, 1], 1))
// console.log(smallestDistancePair([95, 29, 47, 58, 80, 65, 26, 7, 69, 0, 1, 53, 61, 46, 66, 30, 78, 25, 1, 62, 5, 1, 78, 60, 81, 100, 52, 33, 9, 52, 7, 74, 94, 93, 47, 68, 80, 81, 50, 31, 9, 96, 8, 8, 64, 4, 40, 22, 50, 93]
//   , 1142))

// const [arr, k] = require('./find-k-th-smallest-pair-distance.json')
// console.log(arr.length, k, Math.pow(2, arr.length))
// console.log(smallestDistancePair.call(null, arr, k))