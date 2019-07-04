/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @param {number} k
 * @return {number[][]}
 */
var kSmallestPairs = function (nums1, nums2, k) {
  if (!nums1.length || !nums2.length) return []
  //merge 
  let indexes = nums1.map(x => 0)
  let values = nums1.map((x, i) => x + nums2[0])
  let rtn = []
  for (let drop = 0; drop < k; drop++) {
    let [index] = findMin()
    if (index === undefined) break
    rtn.push([nums1[index], nums2[indexes[index]]])
    indexes[index]++
    values[index] = nums1[index] + nums2[indexes[index]]
  }
  return rtn

  function findMin() {
    let index, value, filled = false
    for (let i = 0; i < indexes.length; i++) {
      if (indexes[i] >= nums2.length) continue
      if (!filled) {
        index = i
        value = values[i]
        filled = true
        continue
      }
      if (values[i] < value) {
        index = i
        value = values[i]
      }
    }
    return [index, value]
  }
};

console.log(kSmallestPairs([1, 1, 2], [1, 2, 3], 2).map(x => x.join(',')).join('|'))
// console.log(kSmallestPairs([1, 7, 11], [2, 4, 6], 3).map(x=>x.join(',')).join('|'))