/**
 * @param {number} numRows
 * @return {number[][]}
 */
var generate = function (numRows) {
  if (!numRows) return []
  let rtn = [[1]]
  for (let i = 1; i < numRows; i++) {
    let t = rtn[i - 1].map((x, i, arr) => x + (arr[i + 1] || 0))
    t.unshift(rtn[i - 1][0])
    rtn.push(t)
  }
  return rtn
};