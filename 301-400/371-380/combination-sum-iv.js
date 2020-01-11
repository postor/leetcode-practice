/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var combinationSum4 = function (nums, target) {
  const cache = new Array(target + 1)
  let rtn = r(target)
  return rtn

  function r(target) {
    if (target < 0) return 0
    if (target == 0) return 1
    if (cache[target] !== undefined) return cache[target]
    let total = 0
    for (let i = 0; i < nums.length; i++) {
      total += r(target - nums[i])
    }
    cache[target] = total
    return total
  }
};

// console.log(combinationSum4([1, 2, 3],4))

// console.time()
// console.log(combinationSum4(require('./combination-sum-iv.data'), 999))
// console.timeEnd()