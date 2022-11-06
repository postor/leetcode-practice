/**
 * @param {number[]} nums
 * @return {number}
 */
var majorityElement = function (nums) {
  let value = nums[0], count = 1
  for (let i = 1; i < nums.length; i++) {
    if (value == nums[i]) {
      count++
      continue
    }
    count--
    if (count < 0) {
      count = 1
      value = nums[i]
    }
  }
  return value
};

// console.log(majorityElement([2,2,1,1,1,2,2]))

// console.log(majorityElement([3,2,3]))