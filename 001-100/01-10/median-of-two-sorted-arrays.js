/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
var findMedianSortedArrays = function (nums1, nums2) {
  var total = nums1.length + nums2.length
  var i1 = 0, i2 = 0
  if (!(total % 2)) {
    var n = total / 2 - 1, ns = []
    while (i1 + i2 <= n + 1) {
      if (typeof nums2[i2] == 'undefined' || nums1[i1] < nums2[i2]) {
        if (i1 + i2 >= n) {
          ns.push(nums1[i1])
        }
        i1++
        continue
      }
      if (typeof nums1[i1] == 'undefined' || nums1[i1] >= nums2[i2]) {
        if (i1 + i2 >= n) {
          ns.push(nums2[i2])
        }
        i2++
        continue
      }
      throw 'err'
    }
    return (ns[0] + ns[1]) / 2
  }
  var n = (total + 1) / 2 - 1, ns2 = 0
  while (i1 + i2 <= n) {
    if (typeof nums2[i2] == 'undefined' || nums1[i1] < nums2[i2]) {
      if (i1 + i2 == n) {
        ns2 = nums1[i1]
      }
      i1++
      continue
    }

    if (typeof nums1[i1] == 'undefined' || nums1[i1] >= nums2[i2]) {
      if (i1 + i2 == n) {
        ns2 = nums2[i2]
      }
      i2++
      continue
    }
    throw 'err'
  }
  return ns2

};

//console.log(findMedianSortedArrays([1, 2], [3, 4]))
//console.log(findMedianSortedArrays([1], [3, 4]))
//console.log(findMedianSortedArrays([2], []))
console.log(findMedianSortedArrays([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22], [0, 6]))

