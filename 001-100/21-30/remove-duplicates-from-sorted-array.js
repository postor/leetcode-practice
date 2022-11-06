/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function (nums) {
  let i = 1, curnum = nums[0]
  for (let j = 1; j < nums.length; j++) {
    if (nums[j] == curnum) { 
      continue
    }else{
      curnum = nums[i] = nums[j]
      i++
      continue
    }
  }
};

let nums = [1,1,2]
removeDuplicates(nums)
console.log(nums)