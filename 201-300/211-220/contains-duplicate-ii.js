/**
 * @param {number[]} nums
 * @param {number} k
 * @return {boolean}
 */
var containsNearbyDuplicate = function (nums, k) {
  let dic = {}
  for (let i = 0; i < nums.length; i++) {
    let n = nums[i]
    if (dic[n] !== undefined && i - dic[n] <= k) {
      return true
    }
    dic[n] = i
  }
  return false
};