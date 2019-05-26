/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var subsetsWithDup = function (nums) {
  nums.sort()
  let rtn = [[], nums]
  for (let i = 1; i < nums.length; i++) {
    rtn = rtn.concat(getSubsets(i))
  }
  return rtn

  function getSubsets(i) {
    let dic = {}
    recursive(i, dic)
    return Object.keys(dic).map(x => dic[x])
  }

  function recursive(left, dic, current = [], start = 0) {
    for (let i = start; i < nums.length; i++) {
      let tmp = current.concat(nums[i])
      if (left == 1) {
        dic[tmp.join(',')] = tmp
        continue
      }
      recursive(left - 1, dic, tmp, i + 1)
    }
  }
};