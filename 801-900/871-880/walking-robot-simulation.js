/**
 * @param {number[]} commands
 * @param {number[][]} obstacles
 * @return {number}
 */
var robotSim = function (commands, obstacles) {
  let obstaclesMap = obstacles2map()
  let directions = [[0, 1], [1, 0], [0, -1], [-1, 0]], curDirectionIndex = 0
  let x = 0, y = 0, max = 0

  for (let cmd of commands) {
    if (cmd < 0) turn(cmd)
    else move(cmd)
  }
  return max

  function move(steps) {
    let [dx, dy] = directions[curDirectionIndex]
    for (let i = 0; i < steps; i++) {
      let x1 = x + dx, y1 = y + dy
      if (hasObstale(x1, y1)) break
      x = x1, y = y1
      max = Math.max(max, x * x + y * y)
    }
  }
  function turn(cmd) {
    let delta = (cmd === -2) ? -1 : 1
    curDirectionIndex = (4 + curDirectionIndex + delta) % 4
  }
  function hasObstale(x, y) {
    if (!obstaclesMap.has(x)) return false
    return obstaclesMap.get(x).has(y)
  }
  function obstacles2map() {
    let map = new Map()
    for (let [x, y] of obstacles) {
      if (!map.has(x)) map.set(x, new Set)
      map.get(x).add(y)
    }
    return map
  }
};

console.log(robotSim([6, -1, -1, 6], []))