/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @param {number} k
 * @return {number[]}
 */
var maxNumber = function (nums1, nums2, k) {
  let left = nums1.length + nums2.length - k + 1
  let nums = [nums1, nums2]
  let starts = [0, 0]
  let result = new Array(k).fill(0)

  function getNext(starts, left) {
    let maxes = findMax(starts, left)
    for (let x = 0; x < maxes.length; x++) {
      let [ni, nj] = maxes[x], v = nums[ni][nj]

      let offset = nj - starts[ni]
    }
  }

  function findMax(starts, left) {
    let max = 0, rtn = []
    for (let i = 0; i < nums.length; i++) {
      for (let j = starts[i]; j < left; j++) {
        if (nums[i][j] > max) {
          max = nums[i][j]
          rtn = [[i, j, max]]
          continue
        }
        if (nums[i][j] == max) {
          rtn.push([i, j, max])
        }
      }
    }
  }
};