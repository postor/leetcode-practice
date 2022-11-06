/**
 * @param {character[][]} board
 * @param {string} word
 * @return {boolean}
 */
var exist = function (board, word) {

  return board.some((x, i) => x.some((y, j) => r(i, j)))

  function r(i, j, wi = 0, used = board.map(x => x.map(() => false))) {
    //无法继续
    if (i < 0 || i >= board.length) return false
    if (j < 0 || j >= board[i].length) return false
    if (wi >= word.length) return false
    if (board[i][j] !== word[wi]) return false
    if (used[i][j]) return false
    // 匹配完了
    if (wi == word.length - 1) return true
    // 继续匹配
    used[i][j] = true
    return r(i + 1, j, wi + 1, used.map(x => x.map(y => y))) // 下
      || r(i, j + 1, wi + 1, used.map(x => x.map(y => y))) // 右
      || r(i - 1, j, wi + 1, used.map(x => x.map(y => y))) // 上
      || r(i, j - 1, wi + 1, used.map(x => x.map(y => y))) // 左
  }
};

const board = [
  ['A', 'B', 'C', 'E'],
  ['S', 'F', 'C', 'S'],
  ['A', 'D', 'E', 'E']
]
console.log(exist(board, 'ABCCED'))
console.log(exist(board, 'SEE'))
console.log(exist(board, 'ABCB'))