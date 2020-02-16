/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var subarraySum = function (nums, k) {
  let sums = new Array(nums.length + 1)
  sums[0] = 0
  for (let i = 0; i < nums.length; i++) {
    sums[i + 1] = sums[i] + nums[i]
  }
  let count = 0
  for (let i = 0; i < nums.length; i++) {
    for (let j = i; j < nums.length; j++) {
      // sum(i,j) = sums[j+1]-sums[i]
      if ((sums[j + 1] - sums[i]) === k) count++
    }
  }
  return count
};


console.log(subarraySum([1, 1, 1], 2))