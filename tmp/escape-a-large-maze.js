/**
 * @param {number[][]} blocked
 * @param {number[]} source
 * @param {number[]} target
 * @return {boolean}
 */
var isEscapePossible = function (blocked, source, target) {
  if (source[0] == target[0] && source[1] == target[1]) return true
  if (blocked.length < 2) return true
  const [blockedDic, blockedDicY] = getBlockedDic(blocked)
  const p10v6 = Math.pow(10, 6)
  let q = [source], visited = {}
  while (q.length) {
    let [x, y] = q.shift()
    if (blockedDic[x] && blockedDic[x][y] !== undefined) continue

    setVisited(x, y)
    
  }

  function findYRange(x,y){
    let min = 0, max = p10v6
    Object.keys(blockedDic[x]).forEach(k => {
      let [x1, y1] = blocked[blockedDic[x][k]]
      if (y1 > y) {
        
      }
    })
  }

  function isVisited(x, y) {
    return visited[x] && visited[x][y]
  }

  function setVisited(x, y) {
    if (!visited[x]) visited[x] = {}
    visited[x][y] = true
  }

  function getBlockedDic(blocked = []) {
    let dic1 = {}, dic2 = {}
    blocked.forEach(([x, y], i) => {
      if (!dic1[x]) dic1[x] = {}
      dic1[x][y] = i
      if (!dic2[y]) dic2[y] = {}
      dic2[y][x] = i
    })
    return [dic1, dic2]
  }
};