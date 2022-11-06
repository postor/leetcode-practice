/**
 * @param {number[][]} positions
 * @return {number[]}
 */
var fallingSquares = function (positions) {
  let ranges = [{ left: 0, height: 0, right: 1e8 + 1e6 }], rtn = [], max = 0

  outer:
  for (let [left, length] of positions) {
    let curHeight = 0, startI = -1, right = left + length, newRanges = []
    for (let i = 0; i < ranges.length; i++) {
      let range = ranges[i]
      if (left < range.right && startI == -1) {
        startI = i
        // left part
        if (left != range.left) {
          newRanges.push({
            left: range.left,
            height: range.height,
            right: left
          })
        }
      }
      if (startI != -1) {
        curHeight = Math.max(curHeight, range.height)
      }
      if (right <= range.right) {
        // added part
        let newHeight = length + curHeight
        newRanges.push({
          left,
          height: newHeight,
          right,
        })
        // right part
        if (right != range.right) {
          newRanges.push({
            left: right,
            height: range.height,
            right: range.right,
          })
        }
        max = Math.max(newHeight, max)
        rtn.push(max)
        // replace
        ranges.splice(startI, i - startI + 1, ...newRanges)
        continue outer
      }
    }
  }
  return rtn
};

// console.log(fallingSquares([[1,2],[2,3],[6,1]]))
// console.log(fallingSquares([[100, 100], [200, 100]]))