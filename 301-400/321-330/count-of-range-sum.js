/**
 * @param {number[]} nums
 * @param {number} lower
 * @param {number} upper
 * @return {number}
 */
var countRangeSum = function (nums, lower, upper) {
  if (!nums.length) return 0
  let matches = nums.map(x => x >= lower && x <= upper)
  if (!matches.some(x => x)) return 0
  let i = 0, j = nums.length - 1
  for (; !matches[i]; i++) { }
  for (; !matches[j]; j--) { }
  // i 为第一个match,j为最后一个match
  let sums = [nums[i]], total = 1
  for (let x = i + 1; x <= j; x++) {
    //sums = sums.map(y => y + nums[x])
    if (matches[x]) {
      sums.push(nums[x])
      total += sums.length
    }
  }
  return total
};

console.log(countRangeSum([-2, 5, -1], -2, 2))