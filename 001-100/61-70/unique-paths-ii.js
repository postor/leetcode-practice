/**
 * @param {number[][]} obstacleGrid
 * @return {number}
 */
var uniquePathsWithObstacles = function (obstacleGrid) {
  let cache = obstacleGrid.map(x => x.map(_ => -1))

  return r()

  function r(x = 0, y = 0) {
    if (obstacleGrid[x][y]) return 0
    //已经计算过
    if (cache[x][y] != -1) {
      return cache[x][y]
    }
    //边界
    if (x == obstacleGrid.length - 1 && y == obstacleGrid[x].length - 1) {
      if (obstacleGrid[x][y]) return 0
      return 1
    }
    //非边界
    let total = 0;
    //如果可以左走
    if (x < obstacleGrid.length - 1) {
      if (!obstacleGrid[x + 1][y]) {
        total += r(x + 1, y)
      }
    }
    if (y < obstacleGrid[x].length - 1) {
      if (!obstacleGrid[x][y + 1]) {
        total += r(x, y + 1)
      }
    }
    cache[x][y] = total
    return total
  }
};

console.log(uniquePathsWithObstacles([
  [0, 0, 0],
  [0, 1, 0],
  [0, 0, 0]
]))