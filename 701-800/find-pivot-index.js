/**
 * @param {number[]} nums
 * @return {number}
 */
var pivotIndex = function (nums) {
  if (!nums.length) return -1
  let total = nums.reduce((a, b) => a + b)
  let left = 0
  for (let i = 0; i < nums.length; i++) {
    let next = left + nums[i], right = total - next
    if (right == left) return i
    // if (right < left) return -1
    left = next
  }
  return -1
};

// console.log(pivotIndex(
//   [-1, -1, -1, -1, -1, 0]
// ))