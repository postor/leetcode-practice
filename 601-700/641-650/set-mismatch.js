/**
 * @param {number[]} nums
 * @return {number[]}
 */
var findErrorNums = function (nums) {
  let dic = {}, duplicated, missing
  for (let n of nums) {
    if (dic[n] === undefined) {
      dic[n] = true
    } else if (dic[n]) {
      duplicated = n
    }
  }
  for (let i = 1; i <= nums.length; i++) {
    if (!dic[i]) missing = i
  }
  return [duplicated, missing]
};