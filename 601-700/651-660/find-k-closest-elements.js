/**
 * @param {number[]} arr
 * @param {number} k
 * @param {number} x
 * @return {number[]}
 */
var findClosestElements = function (arr, k, x) {
  let closestLTE = findSmallerIndex()
  while (closestLTE < arr.length - 1 && arr[closestLTE] === arr[closestLTE + 1]) closestLTE += 1
  let closest = closestLTE === arr.length - 1
    ? closestLTE
    : x - arr[closestLTE] < arr[closestLTE + 1] - x
      ? closestLTE
      : closestLTE + 1
  let rtn = [arr[closest]], l = closest - 1, r = closest + 1
  while (rtn.length < k) {
    if (l < 0) {
      rtn.push(arr[r])
      r++
      continue
    }
    if (r >= arr.length) {
      rtn.unshift(arr[l])
      l--
      continue
    }
    if (x - arr[l] <= arr[r] - x) {
      rtn.unshift(arr[l])
      l--
      continue
    }
    rtn.push(arr[r])
    r++
  }
  return rtn

  /**
   * find index smaller or equal to x
   * @param {*} l 
   * @param {*} r 
   */
  function findSmallerIndex(l = 0, r = arr.length - 1) {
    if (r - l < 2) return arr[r] > x ? l : r
    let mid = Math.floor((l + r) / 2)
    if (arr[mid] > x) {
      return findSmallerIndex(l, mid)
    }
    return findSmallerIndex(mid, r)
  }
};



// console.log(findClosestElements([1, 2, 2, 2, 5, 5, 5, 8, 9, 9], 4, 0), [1, 2, 2, 2])
// console.log(findClosestElements([1, 2, 3, 4, 5], 4, 3), [1, 2, 3, 4])