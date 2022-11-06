/**
 * @param {number[]} nums
 * @return {number}
 */
var maximumGap = function (nums) {
  if (nums.length < 2) return 0
  let max = nums[0], min = nums[0]
  for (let i = 1; i < nums.length; i++) {
    max = Math.max(nums[i], max)
    min = Math.min(nums[i], min)
  }
  let delta = (max - min) / (nums.length - 1)
  let maxBucket = new Array(nums.length - 1).fill(Number.MIN_SAFE_INTEGER)
  let minBucket = new Array(nums.length - 1).fill(Number.MAX_SAFE_INTEGER)
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] == min || nums[i] == max) continue
    let index = Math.floor((nums[i] - min) / delta)
    maxBucket[index] = Math.max(maxBucket[index], nums[i])
    minBucket[index] = Math.min(minBucket[index], nums[i])
  }
  let prev = min, maxGap = 0
  for (let i = 0; i < minBucket.length; i++) {
    if (minBucket[i] == Number.MAX_SAFE_INTEGER) continue
    maxGap = Math.max(minBucket[i] - prev, maxGap)
    prev = maxBucket[i]
  }
  maxGap = Math.max(max - prev, maxGap)
  return maxGap
};

// 输入 [3,6,9,1]
// 最大值 9，最小值 1
// 最大桶 [-∞,-∞,-∞] 注意是反的，长度比原数组少1
// 最小桶 [+∞,+∞,+∞] 注意是反的，长度比原数组少1
// 平均桶间距 (9-1)/4 = 2
// 把值逐个放到桶 (nums[i]-最小值)/平均间距
// (3 - 1)/2 = 1 ，修改最小桶坐标1为3， [+∞,3,+∞]，同理最大桶 [-∞,3,-∞]
// (6 - 1)/2 = 2.5 = 2， 最小桶 [+∞,3,6] 最大桶 [-∞,3,6]
// 9 为最大值，跳过
// 1 为最小值，跳过
// 如果有落在同一个桶的则最大桶取最大值，最小桶取最小值，此例子中没有重复落入情况
// 从最小桶找到间隔最大的坐标 最小值=1，最小桶 [+∞,3,6]，最大桶[-∞,3,6] 最大值=9
// 即较大间隔有3段，1-3(最小桶)，3(最大桶)-6(最小桶)，6(最大桶)-9
// 间隔 2,3,3 取最大 3

console.log(maximumGap([15252, 16764, 27963, 7817, 26155, 20757, 3478, 22602, 20404, 6739, 16790, 10588, 16521, 6644, 20880, 15632, 27078, 25463, 20124, 15728, 30042, 16604, 17223, 4388, 23646, 32683, 23688, 12439, 30630, 3895, 7926, 22101, 32406, 21540, 31799, 3768, 26679, 21799, 23740]))
