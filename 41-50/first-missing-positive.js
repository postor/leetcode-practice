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


/**
 * 如果同时要求使用空间恒定，则需要修改输入
 * @param {number[]} nums
 * @return {number}
 */
var firstMissingPositive1 = function (nums) {
  if (nums.length == 0) {
    return 1
  }
  //分离整数和其他，记录结束坐标end
  let l = 0, r = nums.length - 1
  while (l < r) {
    if (nums[l] > 0) {
      l++
      continue
    }
    if (nums[r] <= 0) {
      r--
      continue
    }
    let t = nums[l]
    nums[l] = nums[r]
    nums[r] = t
    l++ , r--
  }
  let end = nums[l] > 0 ? l + 1 : l
  //使用坐标i数字正负作为整数i+1是否存在的标记（遍历边界0到end-1）
  for (let i = 0; i < end; i++) {
    let index = Math.abs(nums[i]) - 1
    nums[index] = -Math.abs(nums[index])
  }
  //console.log(nums)
  //找到第一个非负数元素的坐标j，j+1就是结果（遍历边界0到end-1，如果没有找到则返回end+1）
  for (let j = 0; j < end; j++) {
    if (nums[j] > 0) {
      return j + 1
    }
  }
  return end + 1
};
console.log(firstMissingPositive1([3, 4, -1, 1]))