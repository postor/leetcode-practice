/**
 * Definition for an interval.
 * function Interval(start, end) {
 *     this.start = start;
 *     this.end = end;
 * }
 */

/**
* @param {Interval[]} intervals
* @param {Interval} newInterval
* @return {Interval[]}
*/
var insert = function (intervals, newInterval) {
  let rtn = [], used = false, tmp = null
  for (let i = 0; i < intervals.length; i++) {
    let t = intervals[i]
    //如果已经插入，直接推到结果
    if (used) {
      rtn.push(t)
      continue
    }
    //如果已经确定左端点，但仍在插入过程中
    if (tmp) {
      if (tmp.end < t.start) {
        rtn.push(tmp)
        rtn.push(t)
        used = true
        continue
      }
      tmp.end = Math.max(t.end, tmp.end)
      continue
    }
    //如果不到插入，直接推到结果
    if (t.end < newInterval.start) {
      rtn.push(t)
      continue
    }
    if (newInterval.end < t.start) {
      rtn.push(newInterval)
      rtn.push(t)
      used = true
      continue
    }
    //肯定有交集了
    tmp = new Interval(
      Math.min(t.start, newInterval.start),
      Math.max(t.end, newInterval.end)
    )
  }
  //已经加入结果
  if (used) return rtn
  //尚未进入结果，但已经合并若干元素
  if (tmp) return [...rtn, tmp]
  //未进入结果，也没有合并任何元素
  return [...rtn, newInterval]
};






console.log(insert([[1, 2], [3, 5], [6, 7], [8, 10], [12, 16]], [4, 8]).join('|'))