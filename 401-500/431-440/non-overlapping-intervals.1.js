/**
 * @param {number[][]} intervals
 * @return {number}
 */
var eraseOverlapIntervals = function (intervals) {
  if (!intervals.length) return 0
  intervals.sort((a, b) => a[1] - b[1])

  // 计算重叠
  let removeCount = 0, curEnd = -Infinity
  for (let i = 0; i < intervals.length; i++) {
    let [start, end] = intervals[i]
    if (start < curEnd) {
      removeCount++
      continue
    }
    curEnd = end
  }

  return removeCount
};

console.log(eraseOverlapIntervals([[0, 2], [1, 3], [1, 3], [2, 4], [3, 5], [3, 5], [4, 6]]))