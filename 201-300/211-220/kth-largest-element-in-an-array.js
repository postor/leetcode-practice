/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var findKthLargest = function (nums, k) {
  // quick sort

  return q()
  function q(arr = nums, ith = k) {
    if (arr.length == 1) return arr[0]
    let small = [], equal = [], large = [], it = arr[0]
    arr.forEach(x => x > it
      ? large.push(x)
      : x == it
        ? equal.push(x)
        : small.push(x))
    if (ith <= large.length) return q(large, ith)
    let t = ith - large.length
    if (t <= equal.length) return it
    return q(small, t - equal.length)
  }
};

console.log(findKthLargest([3, 2, 3, 1, 2, 4, 5, 5, 6], 4))
console.log(findKthLargest([3,2,1,5,6,4], 2))

