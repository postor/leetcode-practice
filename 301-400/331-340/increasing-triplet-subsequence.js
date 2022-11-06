/**
 * @param {number[]} nums
 * @return {boolean}
 */
var increasingTriplet = function (nums) {
  let one = Number.MAX_SAFE_INTEGER, two = Number.MAX_SAFE_INTEGER
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] <= one) {
      one = nums[i]
      continue
    }
    if (nums[i] <= two) {
      two = nums[i]
      continue
    }
    return true
  }
  return false
};

console.log(increasingTriplet([1,2,3,4,5]))
console.log(increasingTriplet([5,4,3,2,1]))