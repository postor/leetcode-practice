/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var sortColors = function (nums) {
  //因为只有三个值，所以左右同时向中间逼近
  let i = 0, j = nums.length - 1
  let ii = i, jj = j
  while (i < j) {
    //左侧遇到0往左交换
    if (nums[i] == 0) {
      swap(i, ii) //交换
      i++ //比较下一个
      ii++ //已经摆好的0多了1个
      continue
    }
    //右侧遇到2往右交换
    if (nums[j] == 2) {
      swap(j, jj)
      j--
      jj--
      continue
    }
    //左侧遇到2往右交换
    if (nums[i] == 2) {
      swap(i, jj) 
      if (j < jj) i++ //换过来的是1就比较下一个
      if (j == jj) j-- //右侧
      jj--
      continue
    }
    //右侧遇到0往左交换
    if (nums[j] == 0) {
      swap(j, ii)
      if (i > ii) j--
      if (i == ii) i++
      ii++
      continue
    }
    //遇到的都是1
    i++
  }
  return nums

  //交换方法
  function swap(i, j) {
    if (i == j) return
    let x = nums[i]
    nums[i] = nums[j]
    nums[j] = x
  }
};

console.log(sortColors([2, 0, 2, 1, 1, 0]))