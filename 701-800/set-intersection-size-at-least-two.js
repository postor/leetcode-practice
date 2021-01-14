/**
 * @param {number[][]} intervals
 * @return {number}
 */
var intersectionSizeTwo = function (intervals) {
  // sort by left edge
  intervals.sort((a, b) => a[0] - b[0])
  // loop each interval,and an extra loop to finish counting
  let setSize = 0, stack = [], i = 0
  while (true) {
    let l = i == intervals.length ? Number.MAX_SAFE_INTEGER : intervals[i][0]
    let r = i == intervals.length ? Number.MAX_SAFE_INTEGER : intervals[i][1]
    // loop till last n elements that must add to set, e.g. right two elements 
    while (stack.length) {
      let min = stack.reduce((prev, item) => Math.min(prev, item[1] - item[2] + 1), Number.MAX_SAFE_INTEGER)
      // if can not wait next interval, add this element to set 
      if (min < l) {
        setSize++
        // remove those have 2 intersects 
        stack = stack.filter(item => {
          if (item[2] == 1) return false
          // and mark those who have 1
          item[2]--
          return true
        })
        continue
      }
      // can wait 
      break
    }
    // this is the extra loop? then return
    if (i == intervals.length) return setSize
    // normal loop and add this interval to stack
    stack.push([l, r, 2])
    i++
  }
  
};

// console.log(intersectionSizeTwo([[1, 3], [1, 4], [2, 5], [3, 5]]))
// console.log(intersectionSizeTwo([[1, 2], [2, 3], [2, 4], [4, 5]]))