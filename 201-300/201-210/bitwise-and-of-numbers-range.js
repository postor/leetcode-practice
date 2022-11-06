/**
 * @param {number} m
 * @param {number} n
 * @return {number}
 */
var rangeBitwiseAnd = function (m, n) {
  // 快速判0，2的n次方在范围内且不是开始，必为0
  let e = 1073741824
  while (e > m) {
    if (e > n) {
      e >>= 1 // 相当于e/=2
      continue
    }
    return 0
  }

  // 与运算
  let x = n
  for (let i = m; i < n; i++) {
    x = x & i
    if (!x) return 0
  }
  return x
};
