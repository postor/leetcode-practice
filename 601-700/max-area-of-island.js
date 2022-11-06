/**
 * @param {number[][]} grid
 * @return {number}
 */
var maxAreaOfIsland = function (grid) {
  let gp = grid.map(x => x.map(y => -1)), groupNum = -1, groupAreas = []
  for (let i = 0; i < grid.length; i++) {
    for (let j = 0; j < grid[i].length; j++) {
      if (grid[i][j] && gp[i][j] === -1) {
        checkCell(i, j, ++groupNum)
      }
    }
  }
  return groupAreas.length ? Math.max(...groupAreas) : 0

  function checkCell(i, j, groupNum) {
    if (i >= 0 && i < grid.length && j >= 0 && j < grid[i].length) {
      if (grid[i][j] && gp[i][j] === -1) {
        groupAreas[groupNum] = (groupAreas[groupNum] || 0) + 1
        gp[i][j] = groupNum
        checkCell(i - 1, j, groupNum)
        checkCell(i, j - 1, groupNum)
        checkCell(i + 1, j, groupNum)
        checkCell(i, j + 1, groupNum)
      }
    }
  }
};

// console.log(maxAreaOfIsland([[1, 1, 0, 0, 0], [1, 1, 0, 0, 0], [0, 0, 0, 1, 1], [0, 0, 0, 1, 1]]))