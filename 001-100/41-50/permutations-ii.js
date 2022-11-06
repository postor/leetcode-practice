/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var permuteUnique = function (nums) {
  let rtn = [], dic = {}
  p([], nums)
  return rtn
  function p(prefix, arr) {
    if (arr.length == 1) {
      arr.forEach(x => {
        let t = [...prefix, x]
        let key = t.toString()
        if (dic[key]) return
        dic[key] = true
        rtn.push(t)
      })
      return
    }
    arr.forEach((x, i) => p([...prefix, x], arr.filter((y, j) => j != i)))
  }
};