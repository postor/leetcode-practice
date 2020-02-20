/**
 * @param {number[]} nums
 * @return {number}
 */
var triangleNumber = function (nums) {
  nums.sort((a, b) => a - b)
  let total = 0
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] === 0) continue
    for (let j = i + 1; j < nums.length; j++) {
      let min = nums[j] - nums[i], max = nums[j] + nums[i]
      for (let k = j + 1; k < nums.length; k++) {
        if (nums[k] > min) {
          if (nums[k] < max) {
            total++
            continue
          }
          break
        }
      }
    }
  }
  return total
};

console.log(triangleNumber([2,2,3,4]))