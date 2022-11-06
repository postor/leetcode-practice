/**
 * @param {number[]} nums
 * @return {number}
 */
var dominantIndex = function (nums) {
  if (nums.length == 0) return -1
  if (nums.length == 1) return 0
  let tops = []
  for (let [i, n] of nums.entries()) {
    if (tops.length == 0) {
      tops.push(i)
      continue
    }
    if (tops.length == 1) {
      if (n > nums[tops[0]]) {
        tops.push(i)
      } else {
        tops.unshift(i)
      }
      continue
    }
    // tops.length==2
    if (n > nums[tops[tops.length - 1]]) {
      tops.shift()
      tops.push(i)
      continue
    }
    if (n > nums[tops[0]]) {
      tops[0] = i
      continue
    }
  }
  return nums[tops[1]] >= nums[tops[0]] * 2 ? tops[1] : -1

};

console.log(dominantIndex(
  [0, 0, 3, 2]))