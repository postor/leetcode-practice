/**
 * @param {number[]} nums
 * @return {number[]}
 */
var findDisappearedNumbers = function (nums) {
  for (let i = 0; i < nums.length; i++) {
    nums[Math.abs(nums[i]) - 1] = -Math.abs(nums[Math.abs(nums[i]) - 1])
  }
  let rtn = []
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] > 0) rtn.push(i + 1)
  }
  return rtn
};

// console.log(findDisappearedNumbers([4,3,2,7,8,2,3,1]))