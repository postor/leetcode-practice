/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
var intersect = function (nums1, nums2) {
  let dic1 = getDic(nums1)
  let dic2 = getDic(nums2)
  let rtn = []
  dic2.forEach((value, key) => {
    if (!dic1.has(key)) return
    for (let i = 0; i < Math.min(dic1.get(key), value); i++) {
      rtn.push(key)
    }
  })
  return rtn

  function getDic(nums) {
    let map = new Map()
    nums.forEach(x => {
      if (!map.has(x)) {
        map.set(x, 1)
        return
      }
      map.set(x, map.get(x) + 1)
    })
    return map
  }
};

// console.log(intersect([4, 9, 5]
//   , [9, 4, 9, 8, 4]))