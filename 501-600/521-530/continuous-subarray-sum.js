/**
 * @param {number[]} nums
 * @param {number} k
 * @return {boolean}
 */
var checkSubarraySum = function (nums, k) {
  let arr = []
  for (let i = 0; i < nums.length; i++) {
    let addk = arr.map(x => (x + nums[i]) % k)
    addk.push(nums[i] % k)
    if (addk.some(x => x == 0)) return true
    arr = arr.concat(addk)
  }
  return false
};