/**
 * Definition for an interval.
 * function Interval(start, end) {
 *     this.start = start;
 *     this.end = end;
 * }
 */
/**
 * @param {Interval[]} intervals
 * @return {Interval[]}
 */
var merge = function (intervals) {
  if (!intervals.length) return []
  intervals.sort((a, b) => a.start - b.start)
  let rtn = [], cur = intervals[0]
  for (let i = 1; i < intervals.length; i++) {
    let t = intervals[i]
    if (t.start <= cur.end) {
      if (t.end <= cur.end) {
        continue
      }
      cur.end = t.end
      continue
    }
    rtn.push(cur)
    cur = t
  }
  rtn.push(cur)
  return rtn
};