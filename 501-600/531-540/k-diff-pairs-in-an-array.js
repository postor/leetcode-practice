/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var findPairs = function (nums, k) {
  nums.sort((a, b) => a - b)
  let left = 0, right = 1, last = undefined, count = 0
  while (right < nums.length) {
    if (last === nums[left]) {
      left++
      if (right === left) right++
      continue
    }
    let diff = nums[right] - nums[left]
    if (diff < k) {
      right++
      continue
    }
    if (diff > k) {
      left++
      if (right === left) right++
      continue
    }
    count++
    last = nums[left]
    left++
    if (right === left) right++
  }

  return count
};

// console.log(findPairs([3, 1, 4, 1, 5], 2))

// console.log(findPairs([1, 3, 1, 5, 4], 0))
