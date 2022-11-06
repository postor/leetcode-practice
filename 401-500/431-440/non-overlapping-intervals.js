/**
 * @param {number[][]} intervals
 * @return {number}
 */
var eraseOverlapIntervals = function (intervals) {
  if(!intervals.length) return 0
  intervals.sort((a, b) => a[0] - b[0])
  let overlaps = intervals.map((x, index) => ({
    index,
    removed: false,
    count: 0,
    list: []
  })), onboard = []

  // 计算重叠
  for (let i = 0; i < intervals.length; i++) {
    if (!onboard.length) {
      onboard.push(overlaps[i])
      continue
    }

    let [start, end] = intervals[i]
    let y = overlaps[i]
    onboard = onboard.filter(x => {
      let [s, e] = intervals[x.index]
      if (e <= start) return false

      x.list.push(i)
      x.count++

      y.list.push(x.index)
      y.count++
      return true
    })
    onboard.push(y)
  }

  // 去掉重叠
  let removeCount = 0
  while (true) {
    let max = -1, id = 0
    for (let i = 0; i < overlaps.length; i++) {
      let x = overlaps[i]
      if (x.removed) continue
      if (x.count > max) {
        max = x.count
        id = i
      }
    }
    if (max == 0) break
    let toRemve = overlaps[id]
    toRemve.removed = true
    removeCount++
    toRemve.list.forEach(j => {
      overlaps[j].count--
    })
  }
  return removeCount
};

console.log(eraseOverlapIntervals( [[0,2],[1,3],[1,3],[2,4],[3,5],[3,5],[4,6]]))