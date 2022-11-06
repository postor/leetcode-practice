/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var smallestDistancePair = function (nums, k) {
  let arr = group(nums)
  let k1 = 0
  for (let [n, count] of arr) {
    if (count == 1) continue
    k1 += count * (count - 1) / 2
    if (k1 >= k) return 0
  }
  let distances = groupDistance(arr)
  for (let [dis, m, n] of distances) {
    k1 += m * n
    if (k1 >= k) return dis
  }
  throw 'k to large'

  function group(nums) {
    let rtn = new Map()
    for (let n of nums) {
      rtn.set(n, rtn.has(n) ? rtn.get(n) + 1 : 1)
    }
    let arr = [...rtn.entries()]
    // arr.sort((a, b) => a[0] - b[0])
    return arr
  }

  function groupDistance(arr = []) {
    let distances = []
    for (let i = 1; i < arr.length; i++) {
      for (let j = 0; j < i; j++) {
        let dis = Math.abs(arr[i][0] - arr[j][0])
        distances.push([dis, arr[i][1], arr[j][1]])
      }
    }
    distances.sort((a, b) => a[0] - b[0])
    return distances
  }
};

// console.log(smallestDistancePair([1, 3, 1], 1))
// console.log(smallestDistancePair([95, 29, 47, 58, 80, 65, 26, 7, 69, 0, 1, 53, 61, 46, 66, 30, 78, 25, 1, 62, 5, 1, 78, 60, 81, 100, 52, 33, 9, 52, 7, 74, 94, 93, 47, 68, 80, 81, 50, 31, 9, 96, 8, 8, 64, 4, 40, 22, 50, 93]
//   , 1142))

const [arr, k] = require('./find-k-th-smallest-pair-distance.json')
console.log(arr.length, k, Math.pow(2, arr.length))
console.log(smallestDistancePair.call(null, arr, k))