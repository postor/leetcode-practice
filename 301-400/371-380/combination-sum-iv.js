/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var combinationSum4 = function (nums, target) {
  let arr = [1], ai = 1
  let count = 0
  r()
  return count

  function r(i = 0, cur = 0, c = []) {
    if (i >= nums.length) return
    let t = cur, c1 = c.concat()
    c1[i]=0
    while (t < target) {
      r(i + 1, t, c1.concat())
      t += nums[i]
      c1[i] = c1[i] + 1
      if (t == target) {
        count += a(c1)
      }
    }
  }
  function a(counts = []) {
    if (counts.length == 1) return 1
    let total = counts.reduce((a, b) => a + b)
    let rtn = 1
    for (let i = 1; i < counts.length; i++) {
      rtn *= C(counts[i], total)
      total -= counts[i]
    }
    return rtn
  }

  function C(x, y) {
    let top = 1, bottom = 1
    for (let i = 1; i <= x; i++) {
      bottom *= i
      top *= y - i + 1
    }
    return top / bottom
  }
};

console.log(combinationSum4([1, 2, 3], 4))