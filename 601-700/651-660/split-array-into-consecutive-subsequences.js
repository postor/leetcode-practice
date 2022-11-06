/**
 * @param {number[]} nums
 * @return {boolean}
 */
var isPossible = function (nums) {
  if (!nums.length) return false
  // waitings[2]= subarray longer than 3 
  let waitings = [0, 0, 0], last = nums[0], lastCount = 1, expectValue
  for (let i = 1; i < nums.length; i++) {
    if (nums[i] !== last) {
      if (!next(lastCount, last)) return false
      lastCount = 1
      last = nums[i]
      continue
    }
    lastCount++
  }
  if (lastCount) {
    if (!next(lastCount, last)) return false
  }
  if (waitings[0] || waitings[1]) return false
  return true

  function next(n, v) {
    if (v !== expectValue) {
      if (waitings[0] || waitings[1]) return false
      expectValue = v + 1
      waitings[0] = n
      waitings[2] = 0
      return true
    }
    // v === expectValue
    expectValue++
    // first feed subarray that shorter than 3
    let left = n - waitings[0] - waitings[1]
    if (left < 0) return false
    let newWaiting0 = 0
    if (left > waitings[2]) {
      // more than enough
      newWaiting0 = left - waitings[2]
    } else {
      // drop subarrs not fed
      waitings[2] = left
    }
    // after feed
    waitings = [newWaiting0, waitings[0], waitings[2] + waitings[1]]
    return true
  }

};

// console.log(isPossible([1, 2, 3, 3, 4, 5]))
// console.log(isPossible([1, 2, 3, 3, 4, 4, 5, 5]))
// console.log(isPossible([1, 2, 3, 4, 4, 5]))