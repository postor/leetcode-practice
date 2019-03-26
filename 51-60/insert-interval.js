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
  let rtn = [],used=false,tmp=newInterval
  for(let i=0;i<intervals.length;i++){
    let t = intervals[i]
    if(used){
      rtn.push(t)
      continue
    }
    if(tmp.start<t.start){
      if(tmp.end<t.start){
        rtn.push(tmp)
        rtn.push(t)
        used=true
        continue
      }
      if()
    }
  }
};