/**
 * @param {number[][]} grid
 * @return {number}
 */
var projectionArea = function (grid) {

  return getProjectionXY() + getProjectionXZ() + getProjectionYZ()

  function getProjectionXY() {
    let rtn = 0
    for (let arr of grid) {
      for (let z of arr) {
        rtn += z ? 1 : 0
      }
    }
    return rtn
  }
  function getProjectionXZ() {
    let rtn = 0
    for (let arr of grid) {
      let max = 0
      for (let z of arr) {
        max = Math.max(z, max)
      }
      rtn += max
    }
    return rtn
  }
  function getProjectionYZ() {

    let rtn = 0
    for (let i = 0; i < grid[0].length; i++) {
      let max = 0
      for (let j = 0; j < grid.length; j++) {
        max = Math.max(grid[j][i], max)
      }
      rtn += max
    }
    return rtn
  }

};


console.log(projectionArea([[1,2],[3,4]])) // 17

console.log(projectionArea([[1,0],[0,2]])) // 8