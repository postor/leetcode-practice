/**
 * @param {number[][]} grid
 * @return {number}
 */
var minPathSum = function (grid) {
  let cache = grid.map(x => x.map(_ => -1))
  return r()
  function r(x = 0, y = 0) {
    if (cache[x][y] != -1) return cache[x][y]
    if (x == grid.length - 1) {
      //右下
      if (y == grid[x].length - 1) return grid[x][y]
      //下
      cache[x][y] = grid[x][y] + r(x, y + 1)
      return cache[x][y]
    }
    if (y == grid[x].length - 1) {
      //右
      cache[x][y] = grid[x][y] + r(x + 1, y)
      return cache[x][y]
    }
    //非右非下
    cache[x][y] = grid[x][y] + Math.min(r(x + 1, y), r(x, y + 1))
    return cache[x][y]
  }
};

console.log(minPathSum([
  [1, 3, 1],
  [1, 5, 1],
  [4, 2, 1]
]))