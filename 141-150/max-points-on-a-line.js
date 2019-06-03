/**
 * @param {number[][]} points
 * @return {number}
 */
var maxPoints = function (points) {
  if (!points.length) return 0
  if (1 == points.length) return 1

  const MISSING = 0.0000000001

  // 处理重合点
  let points1 = [], points1Same = []
  outer1:
  for (let i = 0; i < points.length; i++) {
    let [x1, y1] = points[i]
    for (let p = 0; p < points1.length; p++) {
      let [x2, y2] = points1[p]
      if (x1 == x2 && y1 == y2) {
        //重合
        points1Same[p] = points1Same[p].concat(i)
        continue outer1
      }
    }
    points1.push(points[i])
    points1Same.push([i])
  }

  // 都在一个点上
  if (points1.length == 1) return points.length

  let lines = [], linePointIndexs = []
  // 遍历点
  for (let i = 1; i < points1.length; i++) {
    let toSkip = []
    // 遍历已知先
    for (let l = 0; l < lines.length; l++) {
      // 如果出现在某条线上
      if (lines[l](points1[i])) {
        // 增加到线上
        linePointIndexs[l] = linePointIndexs[l].concat(points1Same[i])
        // 则不需再计算线
        toSkip = toSkip.concat(linePointIndexs[l])
      }
    }
    for (let j = 0; j < i; j++) {
      // 跳过不需要再计算的
      if (toSkip.includes(j)) continue
      let [x1, y1] = points1[j]
      let [x2, y2] = points1[i]
      if (x1 == x2) {
        if (y1 != y2) {
          lines.push(([x, y]) => {
            return x == x1
          })
          linePointIndexs.push(points1Same[i].concat(points1Same[j]))
          continue
        }
      }
      //let k = (y1 - y2) / (x1 - x2)
      //let a = y1 - k * x1
      lines.push(([x, y]) => {
        // eslint-disable-next-line
        return BigInt(x - x1) * BigInt(y1 - y2) == BigInt(y - y1) * BigInt(x1 - x2)
      })
      linePointIndexs.push(points1Same[i].concat(points1Same[j]))
    }
  }
  return Math.max(...linePointIndexs.map(x => x.length))
};

console.log(maxPoints([[0, 0], [94911151, 94911150], [94911152, 94911151]]))