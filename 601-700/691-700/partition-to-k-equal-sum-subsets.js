/**
 * @param {number[]} nums
 * @param {number} k
 * @return {boolean}
 */
var canPartitionKSubsets = function (nums, k) {
  // nums.sort((a, b) => a - b)
  let sum = nums.reduce((a, b) => a + b)
  let avg = sum / k
  if (avg != Math.floor(avg)) return false
  let cache = new Map(), maxUsed = Math.pow(2, nums.length) - 1, avgG = avg
  let tmp = tryMake(0, avg, k - 1)
  return tmp == 1 ? true : false

  function tryMake(used = 0, avg = 0, k = 0) {
    if (k < 0) return -1
    let cached = getCache(used, avg, k)
    if (cached != 0) return cached
    // all num used
    if (used === maxUsed) {
      if (avg || k) return setCache(used, avg, k, -1) // not meet
      return setCache(used, avg, k, 1) // meet
    }
    // try use one
    for (let i = 0; i < nums.length; i++) {
      let t = avg - nums[i]
      let bitI = 1 << i
      if (bitI & used) continue // this num already used, skip
      // if (avg == 1) debugger
      if (t == 0) {
        // next bucket
        if (tryMake(used | bitI, avgG, k - 1) == 1) {
          return setCache(used, avg, k, 1)
        }
      }
      // stay this bucket
      if (tryMake(used | bitI, t, k) == 1) {
        return setCache(used, avg, k, 1)
      }
    }
    // cannot meet
    return setCache(used, avg, k, -1)
  }

  function setCache(used = 0, avg = 0, k = 0, result = 0) {
    if (!cache.has(k)) cache.set(k, new Map)
    let t = cache.get(k)
    if (!t.has(avg)) t.set(avg, new Map)
    t = t.get(avg)
    if (!t.has(used)) t.set(used, result)
    return result
  }

  function getCache(used = 0, avg = 0, k = 0) {
    if (!cache.has(k)) return 0
    let t = cache.get(k)
    if (!t.has(avg)) return 0
    t = t.get(avg)
    if (!t.has(used)) return 0
    return t.get(used)
  }
};

// console.log(canPartitionKSubsets([4, 3, 2, 3, 5, 2, 1],
//   4))
// console.log(canPartitionKSubsets([2, 2, 2, 2, 3, 4, 5],
//   4))