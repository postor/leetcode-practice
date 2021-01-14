/**
 * @param {number[]} arr
 * @return {number}
 */
var maxChunksToSorted = function (arr) {
  let sorted = arr.concat(),
    arrMax = [-Infinity, 0],
    sortedMax = [-Infinity, 0], rtn = 0
  sorted.sort((a, b) => a - b)
  outer:
  for (let i = 0; i < arr.length; i++) {
    next(arr[i], arrMax)
    next(sorted[i], sortedMax)
    if (sortedMax[0] == arrMax[0] && sortedMax[1] == arrMax[1]) {
      rtn++
      clear(sortedMax)
      clear(arrMax)
    }
  }
  return rtn
  function next(n, max = []) {
    if (max[1] == 0 || n > max[0]) {
      max[0] = n
      max[1] = 1
      return
    }
    if (n == max[0]) return max[1]++
  }
  function clear(max = []) {
    max[0] = -Infinity
    max[1] = 0
  }

};

console.log(maxChunksToSorted([5, 10, 19, 0, 10, 5, 2, 11, 13, 7, 5, 0, 13, 19, 0, 19, 11, 8, 5, 18]))