/**
 * @param {character[][]} board
 * @return {boolean}
 */
var isValidSudoku = function (board) {
  //row
  for (let i = 0; i < board.length; i++) {
    if (checkRepeat(board[i])) {
      return false
    }
  }
  //column  
  for (let j = 0; j < board.length; j++) {
    let column = board.map(x => x[j])
    if (checkRepeat(column)) {
      return false
    }
  }
  //3X3
  for (let x = 0; x < 3; x++) {
    for (let y = 0; y < 3; y++) {
      let arr = [
        ...board[x * 3].slice(y * 3, y * 3 + 3),
        ...board[x * 3 + 1].slice(y * 3, y * 3 + 3),
        ...board[x * 3 + 2].slice(y * 3, y * 3 + 3),
      ]
      if (checkRepeat(arr)) {
        return false
      }
    }
  }
  return true


  function checkRepeat(arr) {
    return arr.some((x, i) => x != '.' && arr.indexOf(x, i + 1) >= 0)
  }
};


let board = [["5","3",".",".","7",".",".",".","."],["6",".",".","1","9","5",".",".","."],[".","9","8",".",".",".",".","6","."],["8",".",".",".","6",".",".",".","3"],["4",".",".","8",".","3",".",".","1"],["7",".",".",".","2",".",".",".","6"],[".","6",".",".",".",".","2","8","."],[".",".",".","4","1","9",".",".","5"],[".",".",".",".","8",".",".","7","9"]]
console.log(isValidSudoku(board))