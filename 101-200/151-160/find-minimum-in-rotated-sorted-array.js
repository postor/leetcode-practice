/**
 * @param {number[]} nums
 * @return {number}
 */
var findMin = function (nums) {
  if (nums[0] < nums[nums.length - 1]) return nums[0]
  return re()
  function re(l = 0, r = nums.length - 1) {
    if (r - l < 2) {
      return Math.min(nums[l], nums[r])
    }
    let m = Math.floor((l + r) / 2)
    if (nums[m] > nums[l]) {
      return re(m, r)
    }
    if (nums[m] < nums[l]) {
      return re(l, m)
    }
    return Math.min(re(l, m),re(m, r))
  }
};

console.log(findMin([3, 4, 5, 1, 2]))