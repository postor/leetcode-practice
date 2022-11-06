/**
 * @param {number[]} numbers
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function (numbers, target) {
  let l = 0, r = numbers.length - 1
  while (l < r) {
    let sum = numbers[l] + numbers[r]
    if (sum === target) {
      return [l+1, r+1]
    }
    if (sum > target) {
      r--
      continue
    }
    l++
    continue
  }
  return null
};

console.log(twoSum([2, 7, 11, 15], 9))