/**
 * @param {number[][]} points
 * @return {number}
 */
var findMinArrowShots = function (points) {
  if (!points.length) return 0
  points.sort((a, b) => a[1] - b[1])
  let cur = points[0][1], shootCount = 1
  for (let i = 1; i < points.length; i++) {
    let [start, end] = points[i]
    if (start <= cur) continue
    cur = end
    shootCount++
  }
  return shootCount
};

console.log(findMinArrowShots([[10, 16], [2, 8], [1, 6], [7, 12]]))