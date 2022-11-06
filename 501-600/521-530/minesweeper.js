/**
 * @param {character[][]} board
 * @param {number[]} click
 * @return {character[][]}
 */
var updateBoard = function (board, click) {
  let [i, j] = click
  if (board[i][j] === 'M') {
    board[i][j] = 'X'
    return board
  }
  let mines = board.map(x => x.map(y => (y === 'M') ? 1 : 0))
  let sums = mines.map(x => x.concat())
  for (let i = 0; i < board.length; i++) {
    for (let j = 1; j < board[i].length; j++) {
      sums[i][j] = sums[i][j - 1] + mines[i][j]
    }
  }
  let mineCounts = mines.map(x => x.concat())
  for (let i = 0; i < board.length; i++) {
    for (let j = 0; j < board[i].length; j++) {
      if (i == 0 && j == 2) debugger
      let count = 0
      for (let i1 = Math.max(0, i - 1); i1 < Math.min(board.length, i + 2); i1++) {
        count += sums[i1][Math.min(j + 1, board[i1].length - 1)]
        if (j - 1 > 0) count -= sums[i1][j - 2]
      }
      mineCounts[i][j] = count
    }
  }

  reveal(i, j)
  return board

  function reveal(i, j) {
    if (i < 0 || j < 0 || i > board.length - 1 || j > board[0].length - 1) return
    if (board[i][j] !== 'E') return
    if (mineCounts[i][j]) {
      board[i][j] = '' + mineCounts[i][j]
      return
    }
    board[i][j] = 'B'
    reveal(i + 1, j - 1)
    reveal(i + 1, j)
    reveal(i + 1, j + 1)
    reveal(i - 1, j - 1)
    reveal(i - 1, j)
    reveal(i - 1, j + 1)
    reveal(i, j + 1)
    reveal(i, j - 1)
  }
};

// console.log(updateBoard([['E', 'E', 'E', 'E', 'E'],
// ['E', 'E', 'M', 'E', 'E'],
// ['E', 'E', 'E', 'E', 'E'],
// ['E', 'E', 'E', 'E', 'E']], [3, 0]).join('\n'))

console.log(updateBoard([["E", "M", "M", "E", "E", "E", "E", "E"], ["E", "E", "M", "E", "E", "E", "E", "E"], ["E", "E", "E", "E", "E", "E", "E", "E"], ["E", "M", "E", "E", "E", "E", "E", "E"], ["E", "E", "E", "E", "E", "E", "E", "E"], ["E", "E", "M", "E", "E", "E", "E", "E"], ["E", "E", "E", "E", "E", "E", "E", "E"], ["E", "E", "E", "E", "E", "E", "E", "E"]]
  , [5, 5]).join('\n'))