/**
 * @param {number[][]} intervals
 * @return {number[]}
 */
var findRightInterval = function (intervals) {
  if (intervals.length == 0) return []
  if (intervals.length == 1) return [-1]

  let ids = intervals.map((x, i) => i)
  ids.sort((a, b) => intervals[a][0] - intervals[b][0])
  let left = 0, right = 1, rtn = intervals.map(x => -1)
  while (left < ids.length) {
    if (right == ids.length) {
      left++
      right = left + 1
      continue
    }
    let i = ids[left]
    let j = ids[right]
    let [s1, e1] = intervals[i]
    let [s2, e2] = intervals[j]
    if (s2 >= e1) {
      rtn[i] = j
      left++
      right = left + 1
      continue
    }
    right++
    continue
  }
  return rtn
};

console.log(findRightInterval([[3, 4], [2, 3], [1, 2]]))
console.log(findRightInterval([[1, 4], [2, 3], [3, 4]]))