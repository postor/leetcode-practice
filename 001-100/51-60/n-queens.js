class ChessMap {
  constructor(n, arr) {
    this.n = n
    this.arr = arr
    if (!arr) {
      this.arr = Array(n).fill([]).map(x => Array(n).fill('.'))
    }
  }

  can(x, y) {
    if (!this.arr || !this.arr[x] || !this.arr[x][y]) {
      debugger
    }
    return (this.arr[x][y] == '.')
  }

  add(x, y) {
    if (this.can(x, y)) {
      this.arr[x] = Array(this.n).fill(' ')
      for (let i = 0; i < this.n; i++) {
        this.arr[i][y] = ' '
        for (let j = 0; j < this.n; j++) {
          if (x + y == i + j || x - y == i - j) {
            this.arr[i][j] = ' '
          }
        }
      }
      this.arr[x][y] = 'Q'
      return true
    }
    return false
  }

  getMap() {
    return this.arr.map(x => x.map(char => char == ' ' ? '.' : char).join(''))
  }

  copy() {
    return new ChessMap(this.n, this.arr.map(x => x.map(y => y)))
  }
}

/**
 * @param {number} n
 * @return {string[][]}
 */
var solveNQueens = function (n) {
  let rtn = []
  r()
  return rtn

  function r(base = new ChessMap(n), x = 0, xy = -1, left = n) {
    if (left == 0) {
      rtn.push(base.getMap())
      return
    }
    for (let i = x; i < n; i++) {
      for (let j = 0; j < n; j++) {
        if (i * n + j <= xy) continue
        if (base.can(i, j)) {
          let t = base.copy()
          t.add(i, j)
          r(t, i, i * n + j, left - 1)
        }
      }
    }
  }
};

console.log('ss\n' + solveNQueens(4).map(x => x.join('\n')).join('\n--------\n'))