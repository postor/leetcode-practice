/**
 * @param {number[][]} points
 * @return {number[][]}
 */
var outerTrees = function (points) {

  // find lower most point
  let [lowerMost, lowerMostIs, lowerMostLeft] = findLowerMost()
  let rtn = lowerMostIs.map(i => points[i])
  for (let i = lowerMostIs.length - 1; i >= 0; i--) {
    points.splice(lowerMostIs[i], 1)
  }
  let last = [lowerMost[0] + 10, lowerMost[1]], cur = lowerMost
  if (!points.length) return rtn

  while (points.length > 0) {
    let [next, linePoints] = getLongestMax(cur, last, points, true)
    if (isSamePoint(cur, lowerMostLeft) || isSamePoint(last, lowerMostLeft)) {
      rtn = rtn.concat(linePoints)
      last = cur
      cur = next
      continue
    }
    let a1 = angle(cur, last, next)
    let a2 = angle(cur, last, lowerMostLeft)
    if (a2 == a1) {
      rtn = rtn.concat(linePoints)
      return rtn
    }
    if (a2 < a1) {
      // console.log([a1, cur, last, next].join('|'))
      // console.log([a2, cur, last, lowerMostLeft].join('|'))
      return rtn
    }
    rtn = rtn.concat(linePoints)
    last = cur
    cur = next
  }
  return rtn

  function isSamePoint(p1, p2) {
    return p1[0] == p2[0] && p1[1] == p2[1]
  }

  function getLongestMax(p1, p2, arr, min) {
    let angles = getAngles(p1, p2, arr)
    // console.log(angles.join(','))
    let indexes = getMaxIndex(angles, min)
    // find longest
    let [x, y] = p1
    let linePoints = []
    let lengthes = indexes.map(i => {
      let [x1, y1] = points[i]
      linePoints.push(points[i])
      return Math.hypot(x - x1, y - y1)
    })
    let [maxLenI] = getMaxIndex(lengthes)
    let point = points[indexes[maxLenI]]
    // remove
    for (let i = indexes.length - 1; i >= 0; i--) {
      points.splice(indexes[i], 1)
    }
    return [point, linePoints]
  }

  function getMaxIndex(arr = [], min = false) {
    let max = arr[0], indexes = [0]
    for (let i = 1; i < arr.length; i++) {
      if (min ? arr[i] < max : arr[i] > max) {
        indexes = [i]
        max = arr[i]
        continue
      }
      if (arr[i] == max) {
        indexes.push(i)
      }
    }
    return indexes
  }


  function getAngles(p1, p2, ps = []) {
    return ps.map(p3 => angle(p1, p2, p3))
  }

  function angle(p1, p2, p3) {
    let rtn = Math.atan2(p3[1] - p1[1], p3[0] - p1[0])
      - Math.atan2(p2[1] - p1[1], p2[0] - p1[0])
    if (rtn < 0) rtn += Math.PI * 2
    // console.log([rtn / Math.PI * 180, p1, p2, p3].join('|'))
    return rtn
  }

  function findLowerMost() {
    let rightMost, maxX = -Infinity, leftMost, minX = Infinity,
      arr = [], minY = Infinity
    points.forEach(([x, y], i) => {
      if (y < minY) {
        arr = [i]
        minX = maxX = x
        leftMost = rightMost = [x, y]
        minY = y
        return
      }
      if (y == minY) {
        arr.push(i)
        if (x > maxX) {
          maxX = x
          rightMost = [x, y]
        }
        if (x < minX) {
          minX = x
          leftMost = [x, y]
        }
      }
    })
    return [rightMost, arr, leftMost]
  }
};

console.log(outerTrees([[1, 1], [2, 2], [2, 0], [2, 4], [3, 3], [4, 2]]).join('|'))
console.log(outerTrees([[1,2],[2,2],[4,2]]).join('|'))