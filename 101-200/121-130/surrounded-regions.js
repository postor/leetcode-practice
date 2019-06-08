/**
 * @param {character[][]} board
 * @return {void} Do not return anything, modify board in-place instead.
 */
var solve = function (board) {
  if(!board.length) return board
  for (let i = 0; i < board.length; i++) {
    r(i, 0)
    r(i, board[0].length - 1)
  }
  for (let i = 1; i < board[0].length - 1; i++) {
    r(0, i)
    r(board.length - 1, i)
  }

  for (let i = 0; i < board.length; i++) {
    for (let j = 0; j < board[i].length; j++) {
      board[i][j] = board[i][j] == 'F' ? 'O' : 'X'
    }
  }
  return board

  function r(x, y) {
    if (board[x][y] == 'F' || board[x][y] == 'X') {
      return
    }
    board[x][y] = 'F'
    if (x > 0) {
      r(x - 1, y)
    }
    if (y > 0) {
      r(x, y - 1)
    }
    if (x < board.length - 2) {
      r(x + 1, y)
    }
    if (y < board[x].length - 2) {
      r(x, y + 1)
    }
  }
};