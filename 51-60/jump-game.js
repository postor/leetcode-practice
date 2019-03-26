/**
 * @param {number[]} nums
 * @return {boolean}
 */
var canJump = function (nums) {
  if (nums.length == 1) return true
  for (let i = nums.length - 2; i >= 0; i--) {
    if (nums[i] == 0) {
      if (canBlock(i)) {
        return false
      }
    }
  }
  return true

  function canBlock(i) {
    for (let j = 1; i - j >= 0; j++) {
      if (nums[i - j] > j) {
        return false
      }
    }
    return true
  }

};

console.log(canJump([2,3,1,1,4]))
console.log(canJump([3,2,1,0,4]))