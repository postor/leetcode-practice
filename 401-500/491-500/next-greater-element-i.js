/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
var nextGreaterElement = function (nums1, nums2) {
  // nums2 start from right, if found larger then smaller ones are not needed
  // e.g. [4,2,5,4,3,2,1] is the same as [4,5] when compared to nums in nums1

  // return value
  let rtn = nums1.map(x => -1)
  // key is value in nums1, and value is index in nums1, used for updating rtn
  let indexDic1 = getIndexDic(nums1)
  // right arr like [4,5] described above, we need to remember indexes in nums2
  let rightArr = []

  // loop nums2 from right
  for (let i = nums2.length - 1; i >= 0; i--) {
    let num = nums2[i]
    // loop while rightArr has elements
    while (rightArr.length) {
      let val = rightArr[0]
      // if found smaller or eaqual
      if (val <= num) {
        // just drop
        rightArr.shift()
        continue
      }
      // if found bigger
      let index1 = indexDic1[num]
      // if need to update rtn
      if (index1 !== undefined) {
        // update it
        rtn[index1] = val
      }
      break
    }
    // add this num to rightArr
    rightArr.unshift(num)
  }
  return rtn

  function getIndexDic(arr = []) {
    let dic = {}
    for (let i = 0; i < arr.length; i++) {
      dic[arr[i]] = i
    }
    return dic
  }
};

console.log(nextGreaterElement([4, 1, 2], [1, 3, 4, 2]))