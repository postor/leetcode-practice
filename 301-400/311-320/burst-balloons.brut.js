/**
 * @param {number[]} nums
 * @return {number}
 */
var maxCoins = function (nums) {
  //let cache = nums.map(x => nums.map(y => y > x ? nums.map(z => z > y ? x * y * z : 0) : []))
  let max = 0
  r()
  return max
  function r(cur = 0, used = nums.map(x => false)) {
    if (used.every(x => x)) {
      if (cur > max) max = cur
      return
    }
    for (let i = 0; i < nums.length; i++) {
      if (used[i]) continue
      let v = getLeft(i, used) * nums[i] * getRight(i, used)
      let used1 = used.concat()
      used1[i] = true
      r(cur + v, used1)
    }
  }
  function getLeft(i, used) {
    for (let j = i - 1; j >= 0; j--) {
      if (used[j]) continue
      return nums[j]
    }
    return 1
  }

  function getRight(i, used) {
    for (let j = i + 1; j < nums.length; j++) {
      if (used[j]) continue
      return nums[j]
    }
    return 1
  }
};

console.log(maxCoins([7,9,8,0,7,1,3,5,5,2,3]))