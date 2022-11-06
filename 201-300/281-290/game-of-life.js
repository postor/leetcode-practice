/**
 * @param {number[][]} board
 * @return {void} Do not return anything, modify board in-place instead.
 */
var gameOfLife = function (board) {
  // dp[i][j] means total of nine cells
  let dp = board.map(x => x.map(y => 0))
  let h = board.length
  if (!h) return dp
  let w = board[0].length
  if (!w) return dp

  // every three cell in row
  let dp3 = board.map(x => x.map(y => 0))
  for (let i = 0; i < h; i++) {
    dp3[i][0] = getValue(i, 0) + getValue(i, 1)
  }
  for (let i = 0; i < h; i++) {
    for (let j = 1; j < w; j++) {
      dp3[i][j] = dp3[i][j - 1] - getValue(i, j - 2) + getValue(i, j + 1)
    }
  }

  dp[0][0] = getDp3(0, 0) + getDp3(1, 0)
  for (let j = 1; j < w; j++) {
    dp[0][j] = dp[0][j - 1]
      + getValue(0, j + 1) + getValue(1, j + 1)
      - getValue(0, j - 2) - getValue(1, j - 2)
  }
  for (let i = 1; i < h; i++) {
    for (let j = 0; j < w; j++) {
      dp[i][j] = dp[i - 1][j]
        - getDp3(i - 2, j)
        + getDp3(i + 1, j)
    }
  }


  for (let i = 0; i < h; i++) {
    for (let j = 0; j < w; j++) {
      if (board[i][j]) {
        // Any live cell with two or three live neighbors lives on to the next generation.
        if (dp[i][j] < 3 || dp[i][j] > 4) {
          board[i][j] = 0
        }
      } else {
        // Any dead cell with exactly three live neighbors becomes a live cell, as if by reproduction.
        if (dp[i][j] == 3) {
          board[i][j] = 1
        }
      }
    }
  }
  return board

  function getDp3(i, j) {
    if (i < 0 || i >= h) return 0
    return dp3[i][j]
  }

  function getValue(i, j) {
    if (i < 0 || j < 0 || i >= h || j >= w) return 0
    return board[i][j]
  }

};

// console.log(gameOfLife([
//   [0, 1, 0],
//   [0, 0, 1],
//   [1, 1, 1],
//   [0, 0, 0]
// ]).join('\n'))

// console.log(gameOfLife([[0]]).join('\n'))