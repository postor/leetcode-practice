/**
 * @param {number} numCourses
 * @param {number[][]} prerequisites
 * @return {number[]}
 */
var findOrder = function (numCourses, prerequisites) {
  let relies = new Array(numCourses).fill(0).map((x, i) => ({ val: i, rs: [] }))
  prerequisites.forEach(([i, d]) => relies[i].rs.push(d))
  let rtn = []
  while (rtn.length < numCourses) {
    let toLearns = relies.filter(({ rs }) => !rs.length).map(({ val }) => val)
    if (!toLearns.length) return []
    toLearns.forEach(i => learn(i))
  }
  return rtn

  function learn(i) {
    rtn.push(i)
    relies = relies.filter(({ val }) => val != i).map((n) => {
      let index = n.rs.indexOf(i)
      if (index >= 0) {
        n.rs.splice(index, 1)
      }
      return n
    })
  }
};

// console.log(findOrder(4, [[1, 0], [2, 0], [3, 1], [3, 2]]))