/**
 * @param {number[]} nums
 * @param {number} target
 * @return {boolean}
 */
var search = function (nums, target) {
  let minStart = 0, min = nums[0]
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] < min) {
      minStart = i
      break
    }
    min = nums[i]
  }

  if (nums[getOffsetedIndex(0)] > target) {
    return false
  }
  if (nums[getOffsetedIndex(nums.length - 1)] < target) {
    return false
  }

  return re()

  function re(l = 0, r = nums.length - 1) {
    if (r - l <= 1) {
      if (nums[getOffsetedIndex(l)] == target) return true
      if (nums[getOffsetedIndex(r)] == target) return true
      return false
    }

    let mid = Math.floor((l + r) / 2)
    if ((nums[getOffsetedIndex(mid)] > target)) {
      return re(l, mid)
    }
    return re(mid, r)
  }


  function getOffsetedIndex(i) {
    let index = i + minStart
    if (index > nums.length - 1) {
      return index - nums.length
    }
    return index
  }
};

//console.log(search([2, 5, 6, 0, 0, 1, 2], 0))
console.log(search([1, 2, 1], 2))