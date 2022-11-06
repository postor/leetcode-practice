/**
 * @param {number[]} nums
 * @return {boolean}
 */
var checkPossibility = function (nums) {
  let left = 1, last = -Number.MAX_SAFE_INTEGER
  for (let i = 0; i < nums.length - 1; i++) {
    // when a num bigger than next
    if (nums[i] > nums[i + 1]) {
      // no change left
      if (left === 0) return false
      // try change next
      if (i + 2 >= nums.length) {
        //next is the end one
        return true
      }
      if (nums[i + 2] >= nums[i]) {
        i++ // skip next
        last = nums[i]
        left--
        continue
      }
      // or can try change this one
      if (nums[i + 1] >= last) {
        left--
        last = nums[i]
        continue
      }
      return false
    }
    last = nums[i]
  }
  return true
};

// console.log(checkPossibility([2, 3, 3, 2, 4]), true)
// console.log(checkPossibility([4, 2, 3]), true)
// console.log(checkPossibility([4, 2, 1]), false)
// console.log(checkPossibility([3, 4, 2, 3]), false)