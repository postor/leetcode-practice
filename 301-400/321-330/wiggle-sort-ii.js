/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var wiggleSort = function (nums) {
  if (nums.length < 2) return nums
  nums.sort((a, b) => a - b)
  let tmp = nums.map(x => x)
  let l = Math.floor((nums.length - 1) / 2), r = nums.length - 1
  for (let i = 0; i < nums.length; i++) {
    nums[i] = i & 1 ? tmp[r--] : tmp[l--]
  }
  return nums
};


// console.log(wiggleSort([1, 1, 2, 2, 3]))
console.log(wiggleSort([4, 5, 5, 5, 5, 6, 6, 6]))
// console.log(wiggleSort([4, 5, 5, 6]))
