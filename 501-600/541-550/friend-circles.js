/**
 * @param {number[][]} M
 * @return {number}
 */
var findCircleNum = function (M) {
  let students = new Array(M.length).fill(0), curGroupCount = 0
  for (let i = 0; i < M.length; i++) {
    if (students[i]) continue
    makeGroup(i)
  }
  return curGroupCount

  function makeGroup(i) {
    curGroupCount++
    groupID = curGroupCount
    addToGroup(i, groupID)
  }

  function addToGroup(i, gid) {
    if (students[i]) return
    students[i] = gid
    for (let j = 0; j < M.length; j++) {
      if (M[i][j]) addToGroup(j, gid)
    }
  }

};

console.log(findCircleNum([[1, 1, 0],
[1, 1, 0],
[0, 0, 1]]))

console.log(findCircleNum([[1, 1, 0],
[1, 1, 1],
[0, 1, 1]]))
