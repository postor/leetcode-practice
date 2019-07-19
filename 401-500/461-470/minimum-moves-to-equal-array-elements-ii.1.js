/**
 * @param {number[]} nums
 * @return {number}
 */
var minMoves2 = function (nums) {
  let total = nums.reduce((a, b) => a + b)
  let mid = total / nums.length
  let target = nums[0], diff = Math.abs(target - mid)
  for (let i = 1; i < nums.length; i++) {
    let d = Math.abs(nums[i] - mid)
    if (d < diff) {
      target = nums[i]
      diff = d
    }
  }
  let changes = 0
  nums.forEach(x => {
    changes += Math.abs(x - target)
  })
  return changes
};

console.log(minMoves2([1, 0, 0, 8, 6]))
console.log(minMoves2([1, 2, 3]))