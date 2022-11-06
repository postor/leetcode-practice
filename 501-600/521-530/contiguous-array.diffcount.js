/**
 * @param {number[]} nums
 * @return {number}
 */
var findMaxLength = function (nums) {
  if (!nums.length) return 0
  let diffs = new Array(nums.length + 1), diffIndexMap = new Map()
  diffs[0] = 0, diffIndexMap.set(diffs[0], 0)
  let max = 0
  for (let i = 1; i < diffs.length; i++) {
    diffs[i] = diffs[i - 1] + (nums[i - 1] ? 1 : -1)
    if (diffIndexMap.has(diffs[i])) {
      max = Math.max(i - diffIndexMap.get(diffs[i]), max)
    } else {
      diffIndexMap.set(diffs[i], i)
    }
  }
  return max
};

// console.log(findMaxLength([0, 1, 0, 1]))
// console.log(findMaxLength([0, 1, 0]))
// console.log(findMaxLength([0, 1]))

// console.log(findMaxLength(require('./contiguous-array.data')))