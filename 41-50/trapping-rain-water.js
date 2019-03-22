/**
 * @param {number[]} height
 * @return {number}
 */
var trap = function (height) {
  return t()
  function t(l = 0, r = height.length - 1) {
    if (r - l <= 1) {
      return 0
    }
    let waterLine = Math.min(height[l], height[r])
    const i = maxBetween(l, r)
    if (height[i] > waterLine) {
      return t(l, i) + t(i, r)
    }
    //没有找到超过水位的
    let rtn = 0
    for (let i = l + 1; i < r; i++) {
      rtn += waterLine - height[i]
    }
    return rtn
  }

  function maxBetween(l, r) {
    let max = height[l + 1], maxIndex = l + 1
    for (let i = l + 2; i < r; i++) {
      if (height[i] > max) {
        max = height[i]
        maxIndex = i
      }
    }
    return maxIndex
  }
};

console.log(trap([0, 1, 0, 2, 1, 0, 1, 3, 2, 1, 2, 1]))
