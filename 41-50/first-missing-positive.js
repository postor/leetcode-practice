/**
 * @param {number[]} nums
 * @return {number}
 */
var firstMissingPositive = function (nums) {
  let dic = {}, i = 1
  for (let j = 0; j < nums.length; j++) {
    dic[nums[j]] = true
  }
  while (true) {
    if (dic[i]) {
      i++
      continue
    }
    return i
  }
};

console.log(firstMissingPositive([3,4,-1,1]))