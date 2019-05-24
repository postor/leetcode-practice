/**
 * @param {number[]} nums
 * @return {number}
 */
var longestConsecutive = function (nums) {
  if(!nums.length) return 0
  // 初始只有一个段
  let q = [[nums[0], nums[0]]]

  // 遍历数字
  outer:
  for (let i = 1; i < nums.length; i++) {
    let n = nums[i]
    // 遍历段
    for (let j = 0; j < q.length; j++) {
      let [l, r] = q[j]
      if (n == l - 1) {
        q[j] = [n, r]
        continue outer
      }
      if (n == r + 1) {
        q[j] = [l, n]
        continue outer
      }
      if (n < l) {
        q.splice(j, 0, [n, n])
        continue outer
      }
    }
    q.push([n, n])
  }

  let max = 0, [l, r] = q[0]
  for (let i = 1; i < q.length; i++) {
    let [l1, r1] = q[i]
    // 刚好接上
    if (r == l1 - 1) {
      r = r1
      continue
    }
    // 没有接上
    if (r < l1) {
      max = Math.max(max, r - l + 1)
      l = l1
      r = r1
      continue
    }
    // 覆盖掉
    if (r >= r1) {
      continue
    }
    // 其他，覆盖部分
    r = r1
    continue
  }

  max = Math.max(max, r - l + 1)
  return max
};