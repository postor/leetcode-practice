/**
 * @param {number} numCourses
 * @param {number[][]} prerequisites
 * @return {boolean}
 */
var canFinish = function (numCourses, prerequisites) {
  let relys = new Array(numCourses).fill(0).map(x => [])
  for (let o = 0; o < prerequisites.length; o++) {
    let [d, i] = prerequisites[o]
    if (!addNewRely(i, d)) return false
  }
  return true

  function addNewRely(i, d) {
    if (relys[d].includes(i)) return false // 成环
    relys[i].push(d)
    return relys.every((arr, j) => {
      if (j == i) return true
      if (!arr.includes(i)) return true
      return addNewRely(j, d)
    })
  }
};

// console.log(canFinish(2, [[1, 0], [0, 1]]))
// console.log(canFinish(8, [[1, 0], [2, 6], [1, 7], [6, 4], [7, 0], [0, 5]]))