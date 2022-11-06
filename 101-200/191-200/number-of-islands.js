/**
 * @param {character[][]} grid
 * @return {number}
 */
var numIslands = function (grid) {
  let count = 0
  for (let i = 0; i < grid.length; i++) {
    for (let j = 0; j < grid[i].length; j++) {
      if (grid[i][j] == 1) {
        count++
        r(i, j)
      }
    }
  }
  return count

  function r(i, j) {
    if (grid[i][j] != 1) return
    grid[i][j] = 2
    if (i > 0) {
      r(i - 1, j)
    }
    if (j > 0) {
      r(i, j - 1)
    }
    if (i < grid.length - 1) {
      r(i + 1, j)
    }
    if (j < grid[i].length - 1) {
      r(i, j + 1)
    }
  }
};