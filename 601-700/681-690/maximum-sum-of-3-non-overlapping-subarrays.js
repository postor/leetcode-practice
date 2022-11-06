/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
var maxSumOfThreeSubarrays = function (nums, k) {
  // calc sums for all ranges of k length O(n)
  let sums = new Array(nums.length - 2).fill(0)
  for (let i = 0; i < k; i++)sums[0] += nums[i]
  for (let i = k; i < nums.length; i++) {
    sums[i - k + 1] = sums[i - k] - nums[i - k] + nums[i]
  }

  // dp
  let dps = [
    [{ val: sums[0], indexes: [0] }],
    [{ val: 0, indexes: [] }],
    [{ val: 0, indexes: [] }],
  ]
  for (let i = 1; i < sums.length; i++) {
    {
      // max of 1 subarray
      if (dps[0][i - 1].val >= sums[i]) {
        dps[0][i] = dps[0][i - 1]
      } else {
        dps[0][i] = { val: sums[i], indexes: [i] }
      }
    }
    {
      // max of 2 subarray
      let addThis = i < k ? 0 : sums[i] + dps[0][i - k].val
      if (i < k || dps[1][i - 1].val >= addThis) {
        dps[1][i] = dps[1][i - 1]
      } else {
        dps[1][i] = { val: addThis, indexes: dps[0][i - k].indexes.concat([i]) }
      }
    }
    {
      // max of 3 subarray
      let addThis = i < 2 * k ? 0 : sums[i] + dps[1][i - k].val
      if (i < 2 * k || dps[2][i - 1].val >= addThis) {
        dps[2][i] = dps[2][i - 1]
      } else {
        dps[2][i] = { val: addThis, indexes: dps[1][i - k].indexes.concat([i]) }
      }
    }
  }

  return dps[2][sums.length - 1].indexes
};

// console.log(maxSumOfThreeSubarrays([1, 2, 1, 2, 6, 7, 5, 1], 2))