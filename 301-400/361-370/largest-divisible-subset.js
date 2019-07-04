/**
 * @param {number[]} nums
 * @return {number[]}
 */
var largestDivisibleSubset = function (nums) {
  if (nums.length < 2) return nums
  nums.sort((a, b) => a - b)
  let result = [nums[0]]
  for (let i = 0; i < nums.length - 1; i++) {
    for (let j = i + 1; j < nums.length; j++) {
      let t = tryIJ(i, j)
      if (t.length > result.length) result = t
    }
  }
  return result

  function tryIJ(i, j) {
    if (nums[j] % nums[i] != 0) return []
    let arr = [nums[i], nums[j]]
    for (let k = j + 1; k < nums.length; k++) {
      if (nums[k] % arr[arr.length - 1] == 0) arr.push(nums[k])
    }
    return arr
  }

};

console.log(largestDivisibleSubset([3,4,16,8]))