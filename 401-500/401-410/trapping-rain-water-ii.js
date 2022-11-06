/**
 * @param {number[][]} heightMap
 * @return {number}
 */
var trapRainWater = function (heightMap) {
  const NOT_USED = 21000,
    CAN_NOT_TRACK = 21001,
    CAN_TRACK = 21002,
    CAN_NOT_TRACK_CHECKED = 21003,
    NOT_USED_TRACKED = 21004,
    USED = 21005
  let marks = heightMap.map(x => x.map(y => NOT_USED))
  // all borders cannot track
  let height = heightMap.length
  if (height < 3) return 0
  let width = heightMap[0].length
  if (width < 3) return 0
  for (let i = 0; i < height; i++) {
    marks[i][0] = CAN_NOT_TRACK
    marks[i][width - 1] = CAN_NOT_TRACK
  }
  for (let i = 1; i < width - 1; i++) {
    marks[0][i] = CAN_NOT_TRACK
    marks[height - 1][i] = CAN_NOT_TRACK
  }

  checkNewCannotTracks(0, 0, heightMap[0][0])
  // console.log(marks.map(x => x.join('\t')).join('\n'))
  let total = 0
  for (let i = 1; i < height - 1; i++) {
    for (let j = 1; j < width - 1; j++) {
      if (marks[i][j] < 20000) {
        total += marks[i][j] - heightMap[i][j]
      }
    }
  }
  return total

  function checkNewCannotTracks(i, j, v) {
    if (i < 0 || j < 0 || i >= height || j >= width) return
    if (CAN_NOT_TRACK_CHECKED == marks[i][j]) return
    if (marks[i][j] < 20000) {
      if (marks[i][j] > v) {
        if (heightMap[i][j] < v) {
          markAsLower()
        } else {
          markAsChecked()
        }
      }
      return
    }
    if (marks[i][j] == NOT_USED) {
      if (heightMap[i][j] < v) {
        markAsLower()
      } else {
        markAsChecked()
      }
      return
    }
    markAsChecked()

    function markAsLower() {
      marks[i][j] = v
      checkNewCannotTracks(i + 1, j, v)
      checkNewCannotTracks(i - 1, j, v)
      checkNewCannotTracks(i, j + 1, v)
      checkNewCannotTracks(i, j - 1, v)
    }
    function markAsChecked() {
      marks[i][j] = CAN_NOT_TRACK_CHECKED
      checkNewCannotTracks(i + 1, j, heightMap[i][j])
      checkNewCannotTracks(i - 1, j, heightMap[i][j])
      checkNewCannotTracks(i, j + 1, heightMap[i][j])
      checkNewCannotTracks(i, j - 1, heightMap[i][j])
    }
  }

};

console.log(trapRainWater([
  [14, 17, 18, 16, 14, 16],
  [17, 3, 10, 2, 3, 8],
  [11, 10, 4, 7, 1, 7],
  [13, 7, 2, 9, 8, 10],
  [13, 1, 3, 4, 8, 6],
  [20, 3, 3, 9, 10, 8]]))