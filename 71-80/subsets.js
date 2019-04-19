/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var subsets = function (nums) {
  let rtn = []
  r()
  return rtn
  function r(arr = []) {
    if (arr.length == nums.length) {
      // 把有的映射到结果中
      return rtn.push(nums.filter((x, i) => arr[i]))
    }
    r(arr.concat([true])) // 有这个元素
    r(arr.concat([false])) // 没有这个元素
  }
};

console.log(subsets([1,2,3]).join('\n'))