/**
 * @param {number[]} nums
 * @return {number[]}
 */
var findDuplicates = function (nums) {
  let rtn = []
  for (let i = 0; i < nums.length; i++) {
    let j = Math.abs(nums[i]) - 1
    if (nums[j] < 0) {
      rtn.push(Math.abs(nums[i]))
      continue
    }
    nums[j] = -nums[j]
  }
  return rtn
};
console.log(findDuplicates([4, 3, 2, 7, 8, 2, 3, 1]))