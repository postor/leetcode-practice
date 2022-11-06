/**
 * @param {number[][]} rectangles
 * @return {boolean}
 */
var isRectangleCover = function (rectangles) {
  //rectangles.sort(([a1], [a2]) => a1 - a2) // nlogn

  let total = 0, xorI = 0, xorJ = 0,
    top = Number.MAX_SAFE_INTEGER,
    left = Number.MAX_SAFE_INTEGER,
    bottom = Number.MIN_SAFE_INTEGER,
    right = Number.MIN_SAFE_INTEGER,
    corners = {}
  for (let k = 0; k < rectangles.length; k++) {
    let [a, b, c, d] = rectangles[k]
    top = Math.min(top, a)
    left = Math.min(left, b)
    bottom = Math.max(bottom, c)
    right = Math.max(right, d)
    total += (c - a) * (d - b)
    let cornersT = [[a, b], [c, d], [a, d], [c, b]]
    for (let i = 0; i < cornersT.length; i++) {
      let [x, y] = cornersT[i]
      updateCorner(x, y)
    }
  }
  if (!(total == (right - left) * (bottom - top))) return false
  let cornersT = [[top, left], [bottom, right], [top, right], [bottom, left]]
  for (let i = 0; i < cornersT.length; i++) {
    let [x, y] = cornersT[i]
    updateCorner(x, y)
  }

  return !Object.keys(corners).some(x => Object.keys(corners[x]).some(y => corners[x][y]))

  function updateCorner(x, y) {
    if (!corners[x]) corners[x] = {}
    corners[x][y] = !corners[x][y]
  }
};
console.log(isRectangleCover([[0, 0, 2, 2], [1, 1, 3, 3], [2, 0, 3, 1], [0, 3, 3, 4]]))

console.time()
console.log(isRectangleCover(require('./perfect-rectangle.data')))
console.timeEnd()
console.time()
console.log(isRectangleCover(require('./perfect-rectangle.data.1')))
console.timeEnd()