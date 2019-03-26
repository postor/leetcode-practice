/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var permute = function (nums) {
  let rtn = []
  p([], nums)
  return rtn
  function p(prefix, arr) {
    if (arr.length == 1) {
      arr.forEach(x => rtn.push([...prefix,x]))
      return
    }
    arr.forEach((x, i) => p([...prefix,x], arr.filter((y, j) => j != i)))
  }
};

console.log(permute([1, 2, 3]).join('\n'))