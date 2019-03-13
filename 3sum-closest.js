/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var threeSumClosest = function (nums, target) {
  nums.sort((a, b) => a - b)
  let missing = Number.MAX_SAFE_INTEGER, arr = []
  for (let i = 0; i < nums.length - 2; i++) {
    let j = i + 1, k = nums.length - 1
    while (j < k) {
      let m = envaluate(i, j, k)
      let absM = Math.abs(m)
      if (absM < missing) {
        missing = absM
        arr = [nums[i], nums[j], nums[k]]
      }
      if (m > 0) {
        j++
      } else if (m < 0) {
        k--
      } else {
        return nums[i] + nums[j] + nums[k]
      }
    }
  }

  return arr[0] + arr[1] + arr[2]

  function envaluate(i, j, k) {
    return target - nums[i] - nums[j] - nums[k]
  }
};

console.log(threeSumClosest([0,2,1,-3], 1))