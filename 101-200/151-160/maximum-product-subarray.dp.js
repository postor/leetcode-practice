/**
 * @param {number[]} nums
 * @return {number}
 */
var maxProduct = function (nums) {
  // 最小值dp
  let mina = [0]
  // 最大值dp
  let maxa = [0]
  // 结果
  let max = nums[0]

  // 遍历所有数字，maxa[i+1]表示到nums[i]的最大值，mina同理最小值
  for (let i = 0; i < nums.length; i++) {
    // 计算单个值最大的情况
    let ni = nums[i]
    max = Math.max(max, ni)

    // 不论从哪里开始，到0结束的子串，最大最小值都是0
    if (ni == 0) {
      maxa[i + 1] = 0
      mina[i + 1] = 0
      continue
    }
    // 如果nums[i]大于0，则基于自己增长
    if (ni > 0) {
      maxa[i + 1] = Math.max(ni, maxa[i] * ni)
      mina[i + 1] = Math.min(0, mina[i] * ni)
    }
    // 如果nums[i]小于0，则基于另一个增长（乘以负数后符号反转）
    if (ni < 0) {
      maxa[i + 1] = Math.max(0, mina[i] * ni)
      mina[i + 1] = Math.min(ni, maxa[i] * ni)
    }
    // 计算最大值
    if (maxa[i + 1] > 0) max = Math.max(max, maxa[i + 1])
  }
  return max
};

console.log(maxProduct([-2, 0, -1]))