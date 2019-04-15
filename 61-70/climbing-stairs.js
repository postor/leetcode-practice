/**
 * @param {number} n
 * @return {number}
 */
var climbStairs = function (n) {
  const can = [1, 2]
  let total = 0
  r()
  return total

  /**
   * 递归寻找可能的组合
   * @param {*} cur 当前can坐标
   * @param {*} used can坐标的使用次数记录
   * @param {*} curTotal 当前累加的数值
   */
  function r(cur = 0, used = Array(can.length).fill(0), curTotal = 0) {
    //寻找可能的组合
    for (let i = cur; i < can.length; i++) {
      //可以达成
      if (can[i] + curTotal == n) {
        used[i]++
        total += count(used)
        return
      }
      //已经超出
      if (can[i] + curTotal > n) break
      //尚未超出
      let newUsed = used.concat()
      newUsed[i]++
      r(i, newUsed, curTotal + can[i])
    }
  }

  /**
   * 根据使用的步数集合，计算不同步数间有顺序的组合
   * @param {number[]} used 
   * @returns {number}
   */
  function count(used) {
    let sum = 0, rtn = 1
    for (let i = 0; i < used.length; i++) {
      if (!used[i]) continue
      sum += used[i]
      rtn *= cxy(sum, used[i])
    }
    return rtn
  }

  /**
   * C x取y
   * @param {*} x 总数
   * @param {*} y 取出数
   */
  function cxy(x, y) {
    if (y > x - y) return cxy(x, x - y)
    let a = 1, b = 1
    for (let i = 0; i < y; i++) {
      b *= i + 1
      a *= x - i
    }
    return a / b
  }
};
