/**
 * @param {character[][]} board
 * @return {number}
 */
var countBattleships = function (board) {
  let total = 0
  for (let i = 0; i < board.length; i++) {
    for (let j = 0; j < board[i].length; j++) {
      if (board[i][j] == 'X') {
        if (i + 1 < board.length && board[i + 1][j] == 'X') continue
        if (j + 1 < board[i].length && board[i][j + 1] == 'X') continue
        total++
      }
    }
  }
  return total
};