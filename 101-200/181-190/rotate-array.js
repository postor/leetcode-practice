/**
 * @param {number[]} nums
 * @param {number} k
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var rotate = function (nums, k) {
  // O(1) space
  let t = k % nums.length
  t = t > nums.length / 2 ? nums.length - t : t
  if (nums.length % t) {
    start(0, nums.length)
  } else {
    let times = nums.length / t
    for (let i = 0; i < t; i++) {
      start(i, times)
    }
  }

  return nums

  function start(from, times) {
    let val = nums[from]
    nums[from] = undefined
    for (let i = 0; i < times; i++) {
      let to = (from + k) % nums.length
      let t = nums[to]
      nums[to] = val
      val = t
      from = to
      // console.log(nums)
    }
  }
};

// console.log(rotate([1, 2, 3, 4, 5, 6, 7], 3))
// console.log(rotate([1, 2, 3, 4, 5, 6], 2))
// console.log(rotate([1, 2, 3, 4, 5, 6], 4))
// console.log(rotate([1, 2], 3))