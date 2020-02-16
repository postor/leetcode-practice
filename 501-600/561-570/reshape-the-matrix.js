/**
 * @param {number[][]} nums
 * @param {number} r
 * @param {number} c
 * @return {number[][]}
 */
var matrixReshape = function (nums, r, c) {
  if (!nums.length) return nums
  if (r * c !== nums.length * nums[0].length) return nums

  let rtn = [], curRow = [], i = 0
  while (rtn.length < r) {
    if (curRow.length < c) {
      curRow = curRow.concat(nums[i])
      i++
      continue
    }
    if (curRow.length === c) {
      rtn.push(curRow)
      curRow = []
      continue
    }
    // curRow.length > c
    rtn.push(curRow.slice(0, c))
    curRow = curRow.slice(c)
  }
  return rtn
};

console.log(matrixReshape([[1, 2],
[3, 4]]
  , 4, 1).join('\n'))