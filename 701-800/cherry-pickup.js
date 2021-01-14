/**
 * @param {number[][]} grid
 * @return {number}
 */
var cherryPickup = function (grid) {
  // assume go and back is the same as two go 
  if (!grid.length || !grid[0].length) return 0
  let rowCount = grid.length,
    columnCount = grid[0].length
  if (rowCount == 1 && columnCount == 1) return grid[0][0]
  // lastStep[i1][i2] max by (i1,j1) and (i2,j2)
  let lastStep = grid.map(x => grid.map(y => -1))
  lastStep[0][0] = grid[0][0]

  // loop step, step=i+j
  for (let step = 1; step < rowCount + columnCount - 1; step++) {
    let tStep = grid.map(x => grid.map(y => -1)), hasWayOut = false
    // loop first persion
    for (let i1 = Math.max(0, step - rowCount + 1); i1 <= Math.min(step, rowCount - 1); i1++) {
      // two person at the same point
      let j1 = step - i1
      if (grid[i1][j1] == -1) continue
      // tStep[i1][i1] = getMax(i1, i1, lastStep, gain)
      // not same point
      for (let i2 = i1; i2 <= Math.min(step, rowCount - 1); i2++) {
        let j2 = step - i2
        if (grid[i2][j2] == -1) continue

        hasWayOut = true
        let gain = grid[i1][j1] + grid[i2][j2];
        if (gain == 2 && i1 == i2) gain = 1 // overlap
        tStep[i1][i2] = getMax(i1, i2, lastStep, gain)
      }
    }
    if (!hasWayOut) return 0
    // console.table(grid)

    console.table(tStep)
    lastStep = tStep
  }
  return Math.max(lastStep[rowCount - 1][columnCount - 1], 0)

  function getMax(i1, i2, cache = [[]], gain = 0) {
    let candidates = [
      [i1, i2],
      [i1 - 1, i2],
      [i1, i2 - 1],
      [i1 - 1, i2 - 1],
    ]
      .map(([i1, i2]) => {
        if (cache[i1] === undefined) return -1
        if (cache[i1][i2] === undefined) return -1
        return cache[i1][i2]
      })
      .filter(x => x != -1)
    if (!candidates.length) return -1
    return Math.max(...candidates) + gain
  }

}



// console.log(cherryPickup(
//   [[1, -1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, -1, 1, 1], [1, 1, 1, 1, 1, 1, 1, 1, -1, -1, 1, 1, 1, 1, 1, 1, 1, 1, 1, -1], [1, -1, -1, -1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, -1, 1, 1, 1, 1, 1], [-1, 1, 1, 1, 0, 1, 1, 1, 1, 1, 1, 1, -1, 1, 1, -1, 1, -1, 1, 1], [1, 1, 1, 1, 1, -1, -1, 1, 1, 1, -1, 1, -1, 1, -1, 1, 1, 1, -1, -1], [1, 1, 1, 1, 1, -1, 1, 1, 1, 1, 1, 1, 1, -1, 1, 1, 1, 1, -1, 1], [1, 1, 1, 1, -1, 1, 1, 1, 1, 1, 1, -1, 1, 1, 1, 1, -1, 1, 1, 1], [1, 1, 1, 1, -1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, -1], [-1, 1, 1, 1, 1, 1, 1, -1, 1, -1, 1, -1, 1, 1, 1, 1, 1, 1, 1, -1], [1, 1, 1, 1, 1, 1, 0, 1, 1, 1, 1, 1, 1, 1, 1, 0, 1, 1, 1, 1], [-1, 1, -1, 1, -1, -1, -1, 1, 1, 1, 1, -1, -1, 1, -1, 1, 0, 1, 1, 1], [-1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, -1, 1, 1, 1, -1, 1, 1, 1, 1], [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, -1, 1, 1, -1, 1, 1, -1, -1], [1, 1, 1, 1, 1, 1, 1, 1, -1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1], [0, 1, 1, -1, 1, 1, 1, 1, -1, 1, -1, 1, 1, 1, -1, -1, -1, 1, 1, 1], [1, -1, 1, 1, 1, -1, 1, 1, 1, -1, 1, -1, 1, 1, 1, 1, 1, 1, -1, 1], [1, 1, 1, -1, 1, 1, 1, -1, 1, 1, 1, 1, 1, -1, 1, 1, 1, 1, 1, 1], [1, 1, 1, 1, -1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1], [1, 1, -1, 1, 1, -1, 1, 1, 1, 1, -1, 1, 1, 1, 1, 1, 1, -1, 0, 1], [-1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, -1, 1, 1, 1, -1, 1]]
// ))

// console.log(cherryPickup([
//   [1, 1, 1, 1, -1, -1, -1, 1, 0, 0],
//   [1, 0, 0, 0, 1, 0, 0, 0, 1, 0],
//   [0, 0, 1, 1, 1, 1, 0, 1, 1, 1],
//   [1, 1, 0, 1, 1, 1, 0, -1, 1, 1],
//   [0, 0, 0, 0, 1, -1, 0, 0, 1, -1],
//   [1, 0, 1, 1, 1, 0, 0, -1, 1, 0],
//   [1, 1, 0, 1, 0, 0, 1, 0, 1, -1],
//   [1, -1, 0, 1, 0, 0, 0, 1, -1, 1],
//   [1, 0, -1, 0, -1, 0, 0, 1, 0, 0],
//   [0, 0, -1, 0, 1, 0, 1, 0, 0, 1]]
// ))