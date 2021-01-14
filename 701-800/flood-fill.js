/**
 * @param {number[][]} image
 * @param {number} sr
 * @param {number} sc
 * @param {number} newColor
 * @return {number[][]}
 */
var floodFill = function (image, sr, sc, newColor) {
  let done = image.map(x => x.map(y => false)), oldColor = image[sr][sc]
  fill(sr, sc)
  return image

  function fill(i, j) {
    if (i < 0 || j < 0 || i >= image.length || j >= image[i].length) return
    if (done[i][j]) return
    done[i][j] = true
    if (image[i][j] != oldColor) return
    image[i][j] = newColor
    fill(i + 1, j)
    fill(i - 1, j)
    fill(i, j + 1)
    fill(i, j - 1)
  }
};