/**
 * @param {number[]} nums
 * @return {boolean}
 */
var makesquare = function (nums) {
  if (!nums.length) return false

  // find square width
  let width = nums.reduce((x, y) => x + y) / 4

  nums.sort((a, b) => b - a) // try larger ones first
  if (nums.some(x => x > width)) return false // some stick longer than width

  // fill 4 width and make a square
  let usedMask = 0, cache = {}
  for (let i = 0; i < 4; i++) {
    let [canMake, usedMask1] = makeWidth(width, usedMask)
    if (!canMake) return false
    usedMask = usedMask1
  }
  return true


  /**
   * 
   * @param {number} left 
   * @param {number} usedMask 
   * @return {[boolean,number]} [canMake,usedMask]
   */
  function makeWidth(left, usedMask) {
    // try use cache
    if (!cache[left]) cache[left] = {}
    if (cache[left][usedMask] !== undefined) return cache[left][usedMask]

    // try each stick
    for (let i = 0; i < nums.length; i++) {
      let mask = 1 << i
      if (usedMask & mask) continue // used
      if (left < nums[i]) continue // after taken longer than width

      if (left == nums[i]) { // made        
        return saveCache(left, usedMask, [true, mask | usedMask])
      }

      // left > nums[i], try take it and take more
      let [canMake, usedMask1] = makeWidth(left - nums[i], mask | usedMask)
      if (canMake) return saveCache(left, usedMask, [canMake, usedMask1])
    }
    return saveCache(left, usedMask, [false])
  }

  function saveCache(left, usedMask, result) {
    cache[left][usedMask] = result
    return result
  }
};

// console.log(makesquare([1, 1, 2, 2, 2]))
// console.log(makesquare([3, 3, 3, 3, 4]))