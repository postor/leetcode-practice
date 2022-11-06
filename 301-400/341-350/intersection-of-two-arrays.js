/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
var intersection = function (nums1, nums2) {
  let dic1 = getDic(nums1)
  let dic2 = getDic(nums2)
  let rtn = []
  for (let n of dic2.values()) {
    if (dic1.has(n)) rtn.push(n)
  }
  return rtn

  function getDic(nums) {
    let map = new Map()
    nums.forEach(x => map.set(x, x))
    return map
  }
};