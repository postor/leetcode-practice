/**
 * @param {number[]} nums
 * @return {number}
 */
var findShortestSubArray = function (nums) {
  let dic = new Map(), maxDegree = 0, minLen = 0
  for (let [i, n] of nums.entries()) {
    if (!dic.has(n)) {
      dic.set(n, [i, 1])
      if (maxDegree < 1) {
        maxDegree = 1
        minLen = 1
      }
      continue
    }
    let tmp = dic.get(n)
    tmp[1]++
    if (tmp[1] < maxDegree) continue

    let len = i - tmp[0] + 1
    if (tmp[1] == maxDegree) {
      minLen = Math.min(minLen, len)
      continue
    }
    // if (tmp[i] > maxDegree) {
    minLen = len
    maxDegree = tmp[1]
    // }
  }
  return minLen
};

// console.log(findShortestSubArray([1, 2, 2, 3, 1]))
// console.log(findShortestSubArray([1, 2, 2, 3, 1, 4, 2]))