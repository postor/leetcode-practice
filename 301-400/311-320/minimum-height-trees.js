/**
 * @param {number} n
 * @param {number[][]} edges
 * @return {number[]}
 */
var findMinHeightTrees = function (n, edges) {
  if (!edges.length) return [0]
  let leftN = n, leftEdge = edges
  if (leftN < 3) return findLeaf(leftEdge)[0]
  while (true) {
    let [leafes, noneLeafs] = findLeaf(leftEdge)
    leftN -= leafes.length
    if (leftN < 3)
      return noneLeafs
    leftEdge = leftEdge.filter(([x, y]) => {
      if (leafes.includes(x)) return false
      if (leafes.includes(y)) return false
      return true
    })
  }

  /**
   * 
   * @param {[]} edges 
   */
  function findLeaf(leftEdge) {
    let arr = new Array(n).fill(0)
    leftEdge.forEach(([x, y]) => {
      arr[x]++
      arr[y]++
    })
    let leafs = [], noneLeafs = []
    arr.forEach((x, i) => x == 1 ? leafs.push(i) : x ? noneLeafs.push(i) : 0)
    return [leafs, noneLeafs]
  }
};

console.log(findMinHeightTrees(6,
  [[3, 0], [3, 1], [3, 2], [3, 4], [5, 4]]))