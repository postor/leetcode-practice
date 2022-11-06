/**
 * @param {number[][]} points
 * @return {number}
 */
var findMinArrowShots = function (points) {
  let overlaps = []
  points.forEach(([start, end], index) => {
    for (let i = start; i <= end; i++) {
      if (!overlaps[i]) overlaps[i] = []
      overlaps[i].push(index)
    }
  })

  let shootCount = points.length
  while (true) {
    let saved = findMaxAndShoot()
    if (!saved) break
    shootCount -= saved
  }
  return shootCount


  function findMaxAndShoot() {
    let max = 0, index = 0
    for (let i = 0; i < overlaps.length; i++) {
      if (!overlaps[i]) continue
      if (overlaps[i].length > max) {
        max = overlaps[i].length
        index = i
      }
    }
    if (max <= 1) return 0
    let saved = overlaps[index].length - 1
    overlaps[index].concat().forEach(x => {
      let [start, end] = points[x]
      for (let i = start; i <= end; i++) {
        overlaps[i] = overlaps[i].filter(y => y != x)
      }
    })

    return saved
  }

};

console.log(findMinArrowShots([[10, 16], [2, 8], [1, 6], [7, 12]]))