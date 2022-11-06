/**
 * @param {number[][]} rectangles
 * @return {boolean}
 */
var isRectangleCover = function (rectangles) {
  // areas[0][0]代表[0,0,1,1]的面积上覆盖的次数
  let areas = [],
    top = Number.MAX_SAFE_INTEGER,
    left = Number.MAX_SAFE_INTEGER,
    bottom = Number.MIN_SAFE_INTEGER,
    right = Number.MIN_SAFE_INTEGER
  for (let k = 0; k < rectangles.length; k++) {
    let [a, b, c, d] = rectangles[k]
    for (let i = a; i < c; i++) {
      for (let j = b; j < d; j++) {
        top = Math.min(top, i)
        left = Math.min(left, j)
        bottom = Math.max(bottom, i)
        right = Math.max(right, j)
      }
    }
  }

  for (let k = 0; k < rectangles.length; k++) {
    let [a, b, c, d] = rectangles[k]
    for (let i = a; i < c; i++) {
      for (let j = b; j < d; j++) {
        if (add1(i, j)) {
          return false // 重叠了
        }
      }
    }
  }
  for (let i = 0; i <= bottom - top; i++) {
    for (let j = 0; j <= right - left; j++) {
      if (!areas[i]) {
        return false // 漏了
      }
      if (!areas[i][j]) {
        return false // 漏了
      }
    }
  }
  return true

  function add1(a, b) {
    let i = a - top, j = b - left
    if (!areas[i]) areas[i] = []
    if (!areas[i][j]) {
      areas[i][j] = 1
      return false
    }
    return true
  }

};

console.log(isRectangleCover([[1, 1, 3, 3], [3, 1, 4, 2], [3, 2, 4, 4], [1, 3, 2, 4], [2, 3, 3, 4]]))