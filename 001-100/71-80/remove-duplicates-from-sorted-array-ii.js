/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function (nums) {
  let i = 1, curnum = nums[0], curcount = 1
  for (let j = 1; j < nums.length; j++) {
    if (nums[j] == curnum) {
      if (curcount > 1) {
        continue
      }
      curcount++
      nums[i] = nums[j]
      i++
      continue
    } else {
      curnum = nums[i] = nums[j]
      curcount = 1
      i++
      continue
    }
  }
  nums.length = i
  return i
};

let nums = [1, 1, 1, 2, 2, 3]
removeDuplicates(nums)
console.log(nums)