/**
 * @param {number[]} data
 * @return {boolean}
 */
var validUtf8 = function (data) {
  let b0 = 1 << 7, b1 = 1 << 6, b2 = 1 << 5, b3 = 1 << 4, b4 = 1 << 3
  let cur = 0
  while (cur < data.length) {
    let len = tryLen(cur)
    if (!len) return false
    cur += len
  }
  return true

  function tryLen(i) {
    // 第一位0，没用到第二个
    if (!(data[i] & b0)) return 1

    // 前两位1
    if (!(b1 & data[i])) return false
    // 检查第二个
    if (!check(i + 1)) return false

    // 没用到第三个数
    if (!(data[i] & b2)) return 2
    // 检查第三个
    if (!check(i + 2)) return false

    // 没用到第四个数
    if (!(data[i] & b3)) return 3
    if (!check(i + 3)) return false

    // 下一个必须为0
    if (!(data[i] & b4)) return 4
    return false
  }

  function check(i) {
    if (i >= data.length) return false
    // 第i个1开头
    if (!(b0 & data[i])) return false
    // 第i个1后面是10
    if (b1 & data[i]) return false
    return true
  }
};

console.log(validUtf8([240, 162, 138, 147]))