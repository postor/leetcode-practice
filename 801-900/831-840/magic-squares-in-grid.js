/**
 * @param {number[][]} grid
 * @return {number}
 */
var numMagicSquaresInside = function (grid) {
  if (grid.length < 3 || grid[0].length < 3) return 0
  const SUM_ROW = 15
  let rtn = 0
  for (let i = 0; i < grid.length - 2; i++) {
    for (let j = 0; j < grid[i].length; j++) {
      if (isMagic(i, j)) rtn += 1
    }
  }
  return rtn

  function isMagic(i, j) {
    let [row, column, diagnoal1, diagnoal2] = [isRow, isColumn, isDiagonal1, isDiagonal2].map(x => memo(x))
    return row(i, j) && row(i + 1, j) && row(i + 2, j)
      && column(i, j) && column(i, j + 1) && column(i, j + 2)
      && diagnoal1(i, j) && diagnoal2(i, j) && numCheck(i, j)
  }

  function numCheck(i, j) {
    let arr = new Array(9).fill(0)
      ;[0, 1, 2].forEach(x => [0, 1, 2].forEach(y => arr[grid[i + x][j + y] - 1] = 1))
    return !arr.some(x => !x)
  }

  function isRow(i, j) {
    return SUM_ROW == [0, 1, 2].reduce((result, next) => result + grid[i][j + next], 0)
  }

  function isColumn(i, j) {
    return SUM_ROW == [0, 1, 2].reduce((result, next) => result + grid[i + next][j], 0)
  }


  function isDiagonal1(i, j) {
    return SUM_ROW == [0, 1, 2].reduce((result, next) => result + grid[i + next][j + next], 0)
  }


  function isDiagonal2(i, j) {
    return SUM_ROW == [0, 1, 2].reduce((result, next) => result + grid[i + 2 - next][j + next], 0)
  }

  function memo(fn) {
    let cache = grid.map(x => x.map(y => undefined))
    return (i, j) => {
      if (cache[i][j] === undefined) cache[i][j] = fn(i, j)
      return cache[i][j]
    }
  }
};

console.log(numMagicSquaresInside([[4, 3, 8, 4], [9, 5, 1, 9], [2, 7, 6, 2]]))