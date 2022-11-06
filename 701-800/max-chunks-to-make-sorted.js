/**
 * @param {number[]} arr
 * @return {number}
 */
var maxChunksToSorted = function (arr) {
  let stack = [], rtn = 0, start = -1
  for (let i = 0; i < arr.length; i++) {
    if (!stack.length) {
      if (i == arr[i]) {
        rtn++
        continue
      }
      stack.push(arr[i])
      start = i
      continue
    }
    // if stack.length
    if (arr[i] > stack[stack.length - 1]) {
      stack.push(arr[i])
      continue
    }
    if (arr[i] < stack[0]) {
      stack.unshift(arr[i])
    }
    if (stack[0] == start && stack[stack.length - 1] == i) {
      rtn++
      start = -1
      stack = []
    }
  }
  return rtn
};

console.log(maxChunksToSorted([4, 3, 2, 1, 0]))
console.log(maxChunksToSorted([1, 0, 2, 3, 4]))