/**
 * @param {number[]} nums
 * @return {number}
 */
var deleteAndEarn = function (nums) {
  let grouped = group(nums)
  let groupedNums = [...grouped.keys()]
  if (!groupedNums.length) return 0

  groupedNums.sort((a, b) => a - b)
  let earns = groupedNums.map(x => 0)
  for (let i = 0; i < groupedNums.length; i++) {
    let cur = groupedNums[i] * grouped.get(groupedNums[i])
    if (i == 0) {
      earns[i] = cur
      continue
    }
    if (groupedNums[i] - groupedNums[i - 1] > 1) {
      earns[i] = cur + Math.max(getEarnI(i - 1), getEarnI(i - 2))
      continue
    }

    earns[i] = Math.max(getEarnI(i - 1), cur + getEarnI(i - 2), cur + getEarnI(i - 3))
  }
  return earns[earns.length - 1]

  function getEarnI(i) {
    if (i < 0) return 0
    return earns[i]
  }

  function group(nums = []) {
    let dic = new Map
    for (let n of nums) {
      dic.set(n, dic.has(n) ? dic.get(n) + 1 : 1)
    }
    return dic
  }
};

// console.log(deleteAndEarn([2, 2, 3, 3, 3, 4]))
// console.log(deleteAndEarn([1, 1, 1, 2, 4, 5, 5, 5, 6]))