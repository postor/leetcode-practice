/**
 * @param {number[]} nums1
 * @param {number} m
 * @param {number[]} nums2
 * @param {number} n
 * @return {void} Do not return anything, modify nums1 in-place instead.
 */
var merge = function (nums1, m, nums2, n) {
  let rtn = [], i1 = 0, i2 = 0
  while (true) {
    if (i1 < m) {
      if (i2 < n) {
        if (nums1[i1] > nums2[i2]) {
          rtn.push(nums2[i2])
          i2++
          continue
        }
        rtn.push(nums1[i1])
        i1++
        continue
      }
      for (let j = i1; j < m; j++) {
        rtn.push(nums1[j])
      }
      break
    }
    if (i2 < n) {
      for (let j = i2; j < n; j++) {
        rtn.push(nums2[j])
      }
      break
    }
    break
  }
  for (let i = 0; i < rtn.length; i++) {
    nums1[i] = rtn[i]
  }
  return nums1
};
console.log(merge([1, 2, 3, 0, 0, 0], 3, [2, 5, 6], 3))