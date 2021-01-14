/**
 * @param {number[]} nums
 * @return {number}
 */
var deleteAndEarn = function (nums) {
  let maskAllUsed = Math.pow(2, nums.length) - 1,
    cache = new Array(maskAllUsed).fill(-1)
  return max(0)

  function max(mask = 0) {
    if (mask == maskAllUsed) return 0
    if (cache[mask] != -1) return cache[mask]
    let rtn = -1
    for (let i = 0; i < nums.length; i++) {
      let bit = 1 << i
      if (bit & mask) continue
      let tmask = bit | mask, earn = nums[i]
      for (let j = 0; j < nums.length; j++) {
        if (nums[j] == earn + 1 || nums[j] == earn - 1) tmask |= 1 << j
      }
      rtn = Math.max(rtn, earn + max(tmask))
    }
    return rtn
  }
};

// console.log(deleteAndEarn([2, 2, 3, 3, 3, 4]))