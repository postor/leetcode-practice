/**
 * @param {number} num
 * @return {number}
 */
var maximumSwap = function (num) {
  let arr = ('' + num).split('').map(x => parseInt(x))
  let maxs = new Array(arr.length).fill(0)
  maxs[maxs.length - 1] = maxs.length - 1
  for (let i = maxs.length - 2; i >= 0; i--) {
    maxs[i] = arr[i] > arr[maxs[i + 1]] ? i : maxs[i + 1]
  }
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] !== arr[maxs[i]]) {
      let tmp = arr[i]
      arr[i] = arr[maxs[i]]
      arr[maxs[i]] = tmp
      return parseInt(arr.join(''))
    }
  }
  return num
};

console.log(maximumSwap(2736))
console.log(maximumSwap(9973))