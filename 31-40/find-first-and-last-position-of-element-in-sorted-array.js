/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var searchRange = function (nums, target) {
  if (!nums.length) return [-1, -1]

  if (target < nums[0] || target > nums[nums.length - 1]) {
    return [-1, -1]
  }
  //在范围内
  return tryHalf()

  function tryHalf(start = 0, end = nums.length - 1) {
    if (end - start > 1) {
      let mid = Math.floor((start + end) / 2)
      if (nums[mid] > target) {
        return tryHalf(start, mid)
      }
      if (nums[mid] < target) {
        return tryHalf(mid, end)
      }
      return [tryLeft(start, mid) + 1, tryRight(mid, end) - 1]
    }
    if (end < start) {
      return [-1, -1]
    }
    if (end == start) {
      if (target == nums[start]) {
        return [start, start]
      }
      return [-1, -1]
    }
    if (nums[end] == nums[start]) {
      if (target == nums[start]) {
        return [start, end]
      }
      return [-1, -1]
    }
    if (target == nums[start]) {
      return [start, start]
    }
    if (target == nums[end]) {
      return [end, end]
    }
    return [-1, -1]
  }

  function tryLeft(start, end) {
    if (start + 1 >= end) {
      if (nums[end] != target) {
        return end
      }
      if (nums[start] != target) {
        return start
      }
      return start - 1
    }
    let mid = Math.floor((start + end) / 2)
    if (nums[mid] != target) {
      return tryLeft(mid, end)
    }
    return tryLeft(start, mid)
  }

  function tryRight(start, end) {
    if (start + 1 >= end) {
      if (nums[start] != target) {
        return start
      }
      if (nums[end] != target) {
        return end
      }
      return end + 1
    }
    let mid = Math.floor((start + end) / 2)
    if (nums[mid] > target) {
      return tryRight(start, mid)
    }
    return tryRight(mid, end)
  }

};

console.log(searchRange([5, 7, 7, 8, 8, 10], 8))
console.log(searchRange([5, 7, 7, 8, 8, 10], 7))
console.log(searchRange([5, 7, 7, 8, 8, 10], 5))
console.log(searchRange([5, 7, 7, 8, 8, 10], 10))
console.log(searchRange([5, 7, 7, 8, 8, 10], 6))
console.log(searchRange([1, 2, 3], 2))
console.log(searchRange([1, 2, 2], 2))
