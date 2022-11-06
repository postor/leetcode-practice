/**
 * 方案2 正序，找最大
 * @param {number[]} nums
 * @return {number}
 */
var jump = function (nums) {
  return maxNext()
  function maxNext(cur = 0, steps = 1) {
    if (cur == nums.length - 1) return steps - 1
    if (nums[cur] == 0) return 0
    if (cur + nums[cur] >= nums.length - 1) {
      return steps
    }
    let max = 0, maxi = 0
    for (let i = 1; i <= nums[cur]; i++) {
      let index = cur + i
      let to = index + nums[index]
      if (to > max) {
        maxi = index
        max = to
      }
    }
    return maxNext(maxi, steps + 1)
  }
};

console.log(jump([8, 2, 4, 4, 4, 9, 5, 2, 5, 8, 8, 0, 8, 6, 9, 1, 1, 6, 3, 5, 1, 2, 6, 6, 0, 4, 8, 6, 0, 3, 2, 8, 7, 6, 5, 1, 7, 0, 3, 4, 8, 3, 5, 9, 0, 4, 0, 1, 0, 5, 9, 2, 0, 7, 0, 2, 1, 0, 8, 2, 5, 1, 2, 3, 9, 7, 4, 7, 0, 0, 1, 8, 5, 6, 7, 5, 1, 9, 9, 3, 5, 0, 7, 5]))


//方案1，倒序递归，问题：长数组太慢
var jump = function (nums) {
  let min = null
  reverse()
  console.log(min)
  return min.length
  function reverse(indexes = [], cur = nums.length - 1) {
    if (min && min.length <= indexes.length) {
      return
    }
    if (cur == 0) {
      min = indexes
    }
    for (let i = 0; i <= cur - 1; i++) {
      let distance = cur - i
      if (nums[i] >= distance) {
        let is = indexes.concat()
        is.push(i)
        reverse(is, i)
      }
    }
  }
};