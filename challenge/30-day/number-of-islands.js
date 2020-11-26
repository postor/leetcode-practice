/**
 * @param {character[][]} grid
 * @return {number}
 */
var numIslands = function (grid) {
  let boolGrid = grid.map(x => x.map(y => false)), count = 0
  for (let i = 0; i < grid.length; i++) {
    for (let j = 0; j < grid[i].length; j++) {
      if (grid[i][j] == '1' && !boolGrid[i][j]) {
        count++
        setUsed(i, j)
      }
    }
  }
  return count

  function setUsed(i, j) {
    if (i < 0 || j < 0 || i >= grid.length || j >= grid[i].length) return
    if (grid[i][j] == '0' || boolGrid[i][j]) return
    boolGrid[i][j] = true
    setUsed(i - 1, j)
    setUsed(i + 1, j)
    setUsed(i, j - 1)
    setUsed(i, j + 1)
  }
};

console.log(numIslands([
  ["1", "1", "0", "0", "0"],
  ["1", "1", "0", "0", "0"],
  ["0", "0", "1", "0", "0"],
  ["0", "0", "0", "1", "1"]
]))