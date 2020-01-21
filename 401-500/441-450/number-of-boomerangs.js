/**
 * @param {number[][]} points
 * @return {number}
 */
var numberOfBoomerangs = function (points) {
  let dic = new Map()
  points.forEach(([x1, y1], i) => points.forEach(([x2, y2], j) => {
    if (i >= j) return
    let x = x1 - x2, y = y1 - y2
    let dis = x * x + y * y
    addDic(i, dis, j)
    addDic(j, dis, i)
    return dis
  }))

  let rtn = 0
  dic.forEach((distanceMap, i) => {
    distanceMap.forEach((jSet, distance) => {
      if (jSet.size > 1) rtn += jSet.size * (jSet.size - 1)
    })
  })
  return rtn


  function addDic(i, distance, j) {
    if (!dic.has(i)) {
      dic.set(i, new Map())
    }
    let dicI = dic.get(i)
    if (!dicI.has(distance)) dicI.set(distance, new Map())
    let dicDis = dicI.get(distance)
    if (!dicDis.has(j)) {
      dicDis.set(j, new Set())
    }
    let set = dicDis.get(j)
    set.add(j)
  }
};

// console.log(numberOfBoomerangs([[0, 0], [1, 0], [2, 0]]))