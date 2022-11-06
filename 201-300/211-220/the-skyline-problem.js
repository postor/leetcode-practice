/**
 * @param {number[][]} buildings
 * @return {number[][]}
 */
var getSkyline = function (buildings) {
  let bi = 0
  const CHECK_START = 1, CHECK_END = 2
  let toCheck = [], points = [], lastHeight = 0, curbuilding = []

  while (true) {
    if (!toCheck.length) {
      if (!getNext()) break
      enterNext()
    }
    let [x, type, toAdd = [], toRemove = []] = toCheck[0]
    // 查看有没有一起开始的
    let t = getNext()
    if (t && t[0] <= x) {
      // 有一起开始的就添加建筑，等到下一个循环再算高度      
      enterNext()
      continue
    }

    toCheck.shift()
    curbuilding = curbuilding.filter(x => !toRemove.includes(x))
    curbuilding = curbuilding.concat(toAdd)
    // 不能继续推进去了
    let h = Math.max(...(curbuilding.map(c => c[2])), 0)

    if (h != lastHeight) {
      lastHeight = h
      points.push([x, h])
    }
  }
  return points


  function getNext() {
    if (bi < buildings.length) return buildings[bi]
    return null
  }

  function enterNext() {
    let b = getNext()
    bi++
    insertToCheck(b[0], CHECK_START, b)
    insertToCheck(b[1], CHECK_END, b)
  }

  function insertToCheck(x, type, b) {
    for (let i = 0; i < toCheck.length; i++) {
      if (toCheck[i][0] == x) {
        if (type == CHECK_START) {
          toCheck[i][2].push(b)
        } else {
          toCheck[i][3].push(b)
        }
        return
      }
      if (toCheck[i][0] > x) {
        toCheck.splice(i, 0, type == CHECK_START ? [x, type, [b], []] : [x, type, [], [b]])
        return
      }
    }
    toCheck.push(type == CHECK_START ? [x, type, [b], []] : [x, type, [], [b]])
  }
};


// console.log(getSkyline([[2, 9, 10], [3, 7, 15], [5, 12, 12], [15, 20, 10], [19, 24, 8]]).join('\n'))