/**
 * @param {number} n
 * @param {number[][]} edges
 * @return {number[]}
 */
var sumOfDistancesInTree = function (n, edges) {
  let map = toMap(edges)
  return new Array(n).fill(0).map((x, i) => count(i)[1])

  
  function count(i, not = -1) {
    let num = 1, cnt = 0
    for (let node of map.get(i) || []) {
      if (node === i || node === not) continue
      let [n, c] = count(node, i)
      num += n
      cnt += c + n
    }
    return [num, cnt]
  }


  function toMap(edges) {
    let x = new Map
    for (let [f, t] of edges) {
      add(f, t)
      add(t, f)
    }
    return x
    function add(f, t) {
      if (!x.has(f)) x.set(f, new Set)
      x.get(f).add(t)
    }

  }
};

console.log(sumOfDistancesInTree(6,
  [[0, 1], [0, 2], [2, 3], [2, 4], [2, 5]]))

// console.log(sumOfDistancesInTree(100,
//   [[74, 34], [67, 44], [81, 40], [1, 97], [44, 88], [95, 23], [77, 78], [67, 29], [98, 1], [89, 3], [60, 91], [30, 28], [64, 85], [47, 72], [64, 9], [26, 35], [24, 1], [43, 35], [62, 86], [92, 86], [59, 89], [31, 3], [31, 92], [1, 33], [54, 68], [57, 63], [2, 3], [36, 64], [6, 9], [3, 67], [99, 70], [9, 47], [45, 16], [94, 92], [22, 9], [56, 31], [89, 84], [40, 31], [37, 38], [57, 52], [75, 76], [1, 26], [65, 79], [5, 39], [96, 47], [55, 14], [83, 54], [6, 32], [11, 26], [8, 40], [32, 69], [32, 14], [78, 79], [34, 92], [31, 75], [39, 45], [3, 79], [71, 31], [82, 74], [51, 58], [27, 35], [60, 70], [31, 51], [53, 74], [64, 60], [84, 90], [39, 40], [28, 80], [0, 47], [31, 41], [1, 25], [56, 48], [93, 10], [1, 17], [37, 7], [47, 15], [49, 41], [5, 18], [4, 92], [25, 64], [84, 95], [10, 95], [63, 66], [46, 87], [92, 50], [66, 3], [64, 75], [61, 98], [78, 12], [54, 71], [7, 65], [87, 39], [73, 96], [61, 20], [64, 19], [21, 69], [30, 6], [42, 72], [13, 67]]
// ))