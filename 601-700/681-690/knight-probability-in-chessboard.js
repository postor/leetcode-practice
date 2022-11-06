/**
 * @param {number} N
 * @param {number} K
 * @param {number} r
 * @param {number} c
 * @return {number}
 */
var knightProbability = function (N, K, r, c) {
  let board = new Array(N).fill(0).map(x => new Array(N).fill(0))
  board[r][c] = 1
  let on = step(board, K)

  return on / Math.pow(8, K)

  function step(board, left) {
    if (left === 0) return countOnBoard()
    let t = new Array(N).fill(0).map(x => new Array(N).fill(0))
    for (let r = 0; r < N; r++) {
      for (let c = 0; c < N; c++) {
        updateT(r, c, board[r][c])
      }
    }
    return step(t, left - 1)

    function updateT(r, c, count) {
      if (!count) return
      for (let [x, y] of move(r, c)) {
        if (x < 0 || x >= N || y < 0 || y >= N) {
          continue
        }
        t[x][y] += count
      }
    }

    function move(r, c) {
      return [
        [r + 2, c + 1],
        [r + 2, c - 1],
        [r - 2, c + 1],
        [r - 2, c - 1],
        [r + 1, c + 2],
        [r - 1, c + 2],
        [r + 1, c - 2],
        [r - 1, c - 2],
      ]
    }

    function countOnBoard() {
      let on = 0
      for (let r = 0; r < N; r++) {
        for (let c = 0; c < N; c++) {
          on += board[r][c]
        }
      }
      return on
    }
  }

};

// console.log(knightProbability(3, 2, 0, 0), 0.0625)