/**
 * @param {number[]} nums
 * @return {number}
 */
var longestConsecutive = function (nums) {
  let t = nums.map(x => nums.map(y => x - y))
  let total = 0
  for (let i = 0; i < nums.length; i++) {
    for (let j = 0; j < nums.length; j++) {
      t[i][j] == 1 && total++
    }
  }
  return total
};