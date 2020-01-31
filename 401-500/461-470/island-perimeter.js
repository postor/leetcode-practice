/**
 * @param {number[][]} grid
 * @return {number}
 */
var islandPerimeter = function (grid) {
  let total = 0
  for (let i = 0; i < grid.length; i++) {
    for (let j = 0; j < grid[i].length; j++) {
      if (isLand(i, j)) {
        total += 4
        if (isLand(i - 1, j)) total -= 2
        if (isLand(i, j - 1)) total -= 2
      }
    }
  }
  return total

  function isLand(i, j) {
    if (i < 0 || j < 0) return 0
    return grid[i][j]
  }
};

console.log(islandPerimeter([[0,1,0,0],
  [1,1,1,0],
  [0,1,0,0],
  [1,1,0,0]]))