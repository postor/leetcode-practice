/**
 * @param {number[]} x
 * @return {boolean}
 */
var isSelfCrossing = function (x) {
  // 如果长度小于4，返回false
  let [a, b, c] = x, y = a, z = 0
  let inMode = c <= a ? 2 : -1

  for (let i = 3; i < x.length; i++) {
    let d = x[i]
    if (inMode != -1) {
      // 被自己圈住
      if (inMode + 1 == i) {
        if (d >= b - z && c >= a - y) return true
      } else {
        if (d >= b) return true
      }
    } else {
      if (d <= b) {
        // 被自己圈住
        inMode = i
      }
    }
    y = z, z = a, a = b, b = c, c = d
  }
  return false
};

console.log(isSelfCrossing([2, 1, 1, 2]))
console.log(isSelfCrossing([1, 2, 3, 4]))
console.log(isSelfCrossing([1, 1, 1, 1]))

console.log(isSelfCrossing([3, 3, 3, 2, 1, 1]))
