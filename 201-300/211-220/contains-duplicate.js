/**
 * @param {number[]} nums
 * @return {boolean}
 */
var containsDuplicate = function (nums) {
  let dic = {}
  for (let i of nums) {
    if (dic[i]) return true
    dic[i] = true
  }
  return false
};