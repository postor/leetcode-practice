/**
 * @param {number[]} nums
 * @return {number}
 */
var findLengthOfLCIS = function (nums) {
  if (!nums.length) return 0
  let start = 0, rtn = 1
  for (let i = 1; i < nums.length; i++) {
    if (nums[i] > nums[i - 1]) continue
    rtn = Math.max(rtn, i - start)
    start = i
  }
  rtn = Math.max(rtn, nums.length - start)
  return rtn
};

// console.log(findLengthOfLCIS([1, 3, 5, 4, 7]), 3)
// console.log(findLengthOfLCIS([2, 2, 2, 2, 2]), 1)
// console.log(findLengthOfLCIS([1,3,5,7]), 4)
