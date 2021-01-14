/**
 * @param {string[]} deadends
 * @param {string} target
 * @return {number}
 */
var openLock = function (deadends, target) {
  if (deadends.includes('0000')) return -1
  if (target === '0000') return 0
  let dp = new Array(10).fill(-1)
    .map(x => new Array(10).fill(-1)
      .map(x => new Array(10).fill(-1)
        .map(x => new Array(10).fill(-1)))), // 10*10*10*10 matrix
    lastLoopPoints = [[0, 0, 0, 0]], curSteps = 1

  // dp[pass] {number} -1=notset, -2=deadend, -3=target, else min steps
  setDp([0, 0, 0, 0], 0)
  deadends.forEach(x => setDpStr(x, -2))
  setDpStr(target, -3)

  while (lastLoopPoints.length) {
    let t = []
    for (let pass of lastLoopPoints) {
      for (let i = 0; i < 4; i++) {
        // move ith wheel up
        let tAdd = pass.concat()
        tAdd[i] = (pass[i] + 1) % 10
        if (getDp(tAdd) == -3) return curSteps
        if (getDp(tAdd) == -1) t.push(tAdd)
        // move down
        let tSub = pass.concat()
        tSub[i] = (pass[i] + 9) % 10
        if (getDp(tSub) == -3) return curSteps
        if (getDp(tSub) == -1) t.push(tSub)
      }
    }
    if (!t.length) break
    lastLoopPoints = t
    curSteps++
  }
  return -1

  function setDpStr(str = '', v = 0) {
    setDp(str.split('').map(x => Number.parseInt(x)), v)
  }
  function setDp([i0, i1, i2, i3] = [], v = 0) {
    dp[i0][i1][i2][i3] = v
  }
  function getDp([i0, i1, i2, i3] = []) {
    return dp[i0][i1][i2][i3]
  }
};

// console.log(openLock(["0201", "0101", "0102", "1212", "2002"], '0202'))