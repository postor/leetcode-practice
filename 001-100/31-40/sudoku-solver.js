/**
 * @param {character[][]} board
 * @return {void} Do not return anything, modify board in-place instead.
 */
var solveSudoku = function (board) {
  const numbers = '123456789'.split('')
  let doneBoard

  //按格子可能性最少开始发散递归遍历可能性
  tryPossibility(board)
  if (!doneBoard) {
    throw 'can not solve!'
  }
  //回写到原board
  doneBoard.forEach((row, i) => board[i] = row)
  return

  function tryPossibility(board, pos = undefined) {
    if (doneBoard) return
    const b = board.map(x => x.concat())
    if (pos) {
      b[pos.row][pos.column] = pos.char
    }
    const { row, column, done, bad, posibilities } = findLeastPosibility(b)
    if (bad) {
      return
    }
    if (done) {
      doneBoard = b
      return
    }
    posibilities.forEach(char => tryPossibility(b, {
      row,
      column,
      char,
    }))
  }

  /**
   * 查找最少可能性的点，如果已经完成则只需返回done
   * @param {*} b 
   */
  function findLeastPosibility(b) {
    let arr = []
    for (let row = 0; row < b.length; row++) {
      for (let column = 0; column < b[0].length; column++) {
        if (b[row][column] === '.') {
          const posibilities = getPosiblilities(b, row, column)
          if (!posibilities.length) {
            return { bad: true }
          }
          arr.push({
            row,
            column,
            posibilities,
          })
        }
      }
    }
    if (!arr.length) {
      return { done: true }
    }

    arr.sort((a, b) => a.posibilities.length - b.posibilities.length)

    return arr[0]
  }

  /**
   * 计算一个点的可能性
   * @param {*} b 
   * @param {*} row 
   * @param {*} column 
   */
  function getPosiblilities(b, row, column) {
    //不在行
    let ps = numbers.filter(x => !(b[row].includes(x)))
    //不在列
    let c = b.map(x => x[column])
    ps = ps.filter(x => !(c.includes(x)))
    //不在对应3*3
    let sRow = row - (row % 3), sColumn = column - (column % 3)
    for (let i = sRow; i < sRow + 3; i++) {
      for (let j = sColumn; j < sColumn + 3; j++) {
        ps = ps.filter(x => !(x === b[i][j]))
      }
    }

    return ps
  }
};

let input = [["5", "3", ".", ".", "7", ".", ".", ".", "."], ["6", ".", ".", "1", "9", "5", ".", ".", "."], [".", "9", "8", ".", ".", ".", ".", "6", "."], ["8", ".", ".", ".", "6", ".", ".", ".", "3"], ["4", ".", ".", "8", ".", "3", ".", ".", "1"], ["7", ".", ".", ".", "2", ".", ".", ".", "6"], [".", "6", ".", ".", ".", ".", "2", "8", "."], [".", ".", ".", "4", "1", "9", ".", ".", "5"], [".", ".", ".", ".", "8", ".", ".", "7", "9"]]
console.log(input.join('\n'))
solveSudoku(input)
console.log(input.join('\n'))