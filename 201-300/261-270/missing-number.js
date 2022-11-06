/**
 * @param {number[]} nums
 * @return {number}
 */
var missingNumber = function (nums) {
  let n = nums.length
  let total = n * (n + 1) / 2
  return nums.reduce((r, n) => r - n, total)
};

console.log(missingNumber([9, 6, 4, 2, 3, 5, 7, 0, 1]))