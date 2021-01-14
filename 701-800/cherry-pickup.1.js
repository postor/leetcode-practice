/**
 * @param {number[][]} grid
 * @return {number}
 */
var cherryPickup = function (grid) {
  if (!grid.length || !grid[0].length) return 0
  let rowCount = grid.length,
    columnCount = grid[0].length,
    cacheGo = grid.map(x => x.map(y => new Map)),
    cacheBack = grid.map(x => x.map(y => new Map))

  if (rowCount == 1 && columnCount == 1) return Math.max(grid[0][0], 0)

  let rtn = go(0, 0, '')
  return Math.max(0, rtn)

  function go(i, j, cherries = 0) {
    // printCherries(cherries)
    if (i == rowCount || j == columnCount || grid[i][j] == -1) return -1
    if (i == rowCount - 1 && j == columnCount - 1) return back(i, j, cherries)
    let cache = cacheGo[i][j]
    if (cache.has(cherries)) return cache.get(cherries)

    let newCherries = grid[i][j] == 1 ? bitSet(i, j, cherries) : cherries
    let candidates = [
      go(i + 1, j, newCherries),
      go(i, j + 1, newCherries)
    ].filter(x => x != -1)

    let rtn = candidates.length
      ? grid[i][j] == 1
        ? 1 + Math.max(...candidates)
        : Math.max(...candidates)
      : -1
    cache.set(cherries, rtn)
    return rtn
  }

  function back(i, j, cherries = 0) {
    // printCherries(cherries)
    if (i == -1 || j == -1 || grid[i][j] == -1) return -1
    if (i == 0 && j == 0) {
      // printCherries(cherries)
      return 0
    }
    let cache = cacheBack[i][j]
    if (cache.has(cherries)) return cache.get(cherries)
    let uncounted = grid[i][j] == 1 && !bitCheck(i, j, cherries)
    let newCherries = uncounted ? bitSet(i, j, cherries) : cherries
    let candidates = [
      back(i - 1, j, newCherries),
      back(i, j - 1, newCherries)
    ].filter(x => x != -1)

    let rtn = candidates.length
      ? uncounted
        ? 1 + Math.max(...candidates)
        : Math.max(...candidates)
      : -1
    cache.set(cherries, rtn)
    return rtn
  }

  function bitCheck(i, j, str = '') {
    let t = i * columnCount + j
    let mod = t % 16, n = (t - mod) / 16
    let code = str.charCodeAt(n)
    if (Number.isNaN(code)) return false
    return code & (1 << mod)
  }

  function bitSet(i, j, str = '') {
    let t = i * columnCount + j
    let mod = t % 16, n = (t - mod) / 16
    let arr = str.split('')
    for (let i = arr.length; i <= n; i++) {
      arr[n] = String.fromCharCode(0)
    }
    let code = arr[n].charCodeAt(0)
    arr[n] = String.fromCharCode(code | (1 << mod))
    return arr.join('')
  }

  function printCherries(cherries) {
    let total = 0, table = grid.map((x, i) => x.map((y, j) => {
      if (bitCheck(i, j, cherries)) {
        total++
        return 1
      }
      return 0
    }))
    console.log({ total })
    console.table(table)
  }
};



// console.log(cherryPickup([[0, 1, -1], [1, 0, -1], [1, 1, 1]]))

console.log(cherryPickup([
  [1, 1, 1, 1, -1, -1, -1, 1, 0, 0],
  [1, 0, 0, 0, 1, 0, 0, 0, 1, 0],
  [0, 0, 1, 1, 1, 1, 0, 1, 1, 1],
  [1, 1, 0, 1, 1, 1, 0, -1, 1, 1],
  [0, 0, 0, 0, 1, -1, 0, 0, 1, -1],
  [1, 0, 1, 1, 1, 0, 0, -1, 1, 0],
  [1, 1, 0, 1, 0, 0, 1, 0, 1, -1],
  [1, -1, 0, 1, 0, 0, 0, 1, -1, 1],
  [1, 0, -1, 0, -1, 0, 0, 1, 0, 0],
  [0, 0, -1, 0, 1, 0, 1, 0, 0, 1]]
))