/**
 * @param {number} n
 * @param {number[][]} edges
 * @return {number[]}
 */
var sumOfDistancesInTree = function (n, edges) {
  let distances = new Array(n).fill(0).map(x => new Array(n).fill(0))

  // from\to  0  1  2 ...
  // 0        /  x  
  // 1           /   
  // 2


  for (let [from, to] of edges) {
    setDistance(from, to, 1)
  }


  return distances.map((x, i) => x.reduce((p, v, j) => p + getDistance(i, j), 0))
  function getDistance(a, b) {
    if (a > b) return getDistance(b, a)
    return distances[a][b]
  }


  function setDistance(a, b, x) {
    if (a == b) return
    if (a > b) return setDistance(b, a, x)
    if (distances[a][b] && distances[a][b] <= x) {
      return
    }
    distances[a][b] = x
    // console.log('-------------------------')
    // console.log(distances.map(x => x.join("\t")).join("\n"))
    for (let i = 0; i < n; i++) {
      let dis = getDistance(a, i)
      if (dis) {
        setDistance(i, b, x + dis)
      }
    }
    for (let i = 0; i < n; i++) {
      let dis = getDistance(i, b)
      if (dis) {
        setDistance(i, a, x + dis)
      }
    }
  }
};

console.log(sumOfDistancesInTree(6,
  [[0, 1], [0, 2], [2, 3], [2, 4], [2, 5]]))