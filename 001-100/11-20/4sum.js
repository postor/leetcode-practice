/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[][]}
 */
var fourSum = function (nums, target) {
  nums.sort((a, b) => a - b)
  const i = [], used = {}, rtn = []
  for (i[0] = 0; i[0] < nums.length - 3; i[0]++) {
    for (i[3] = nums.length - 1; i[3] > i[0] + 2; i[3]--) {
      i[1] = i[0] + 1, i[2] = i[3] - 1
      while (i[1] < i[2]) {
        const sum = nums[i[0]] + nums[i[1]] + nums[i[2]] + nums[i[3]]
        if (sum > target) {
          i[2]--
          continue
        }

        if (sum < target) {
          i[1]++
          continue
        }

        const key = `${nums[i[0]]},${nums[i[1]]},${nums[i[2]]},${nums[i[3]]}`
        if (used[key]) {
          i[1]++
          continue
        }
        used[key] = true
        rtn.push([nums[i[0]], nums[i[1]], nums[i[2]], nums[i[3]]])
      }
    }
  }
  return rtn
};

console.log(fourSum([1, 0, -1, 0, -2, 2],0).join('\n'))