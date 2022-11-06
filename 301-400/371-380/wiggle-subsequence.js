/**
 * @param {number[]} nums
 * @return {number}
 */
var wiggleMaxLength = function (nums) {
  if (nums.length < 2) return nums.length
  let upDic = {}, downDic = {}
  for (let i = 0; i < nums.length - 1; i++) {
    for (let j = i + 1; j < nums.length; j++) {
      if (nums[i] < nums[j]) {
        if (!upDic[i]) upDic[i] = []
        upDic[i].push(j)
      } else if (nums[i] > nums[j]) {
        if (!downDic[i]) downDic[i] = []
        downDic[i].push(j)
      }
    }
  }

  let upCache = {}, downCache = {}
  let max = 1
  Object.keys(upDic).forEach(k => {
    max = Math.max(max, rUp(k))
  })
  Object.keys(downDic).forEach(k => {
    max = Math.max(max, rDown(k))
  })
  return max

  function rUp(from = 0) {
    if (upCache[from] !== undefined) return upCache[from]
    if (!upDic[from] || !upDic[from].length) return 1

    let max = Math.max(... (upDic[from].map(j => {
      return 1 + rDown(j)
    })))
    upCache[from] = max
    return max
  }
  function rDown(from = 0) {
    if (downCache[from] !== undefined) return downCache[from]
    if (!downDic[from] || !downDic[from].length) return 1

    let max = Math.max(... (downDic[from].map(j => {
      return 1 + rUp(j)
    })))
    downCache[from] = max
    return max
  }
};

console.log(wiggleMaxLength([1, 17, 5, 10, 13, 15, 10, 5, 16, 8]))