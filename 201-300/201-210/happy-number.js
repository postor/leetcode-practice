/**
 * @param {number} n
 * @return {boolean}
 */
var isHappy = function (n) {
  let dic = {}, t = n
  while (true) {
    t = getHappy(t)

    if (t == 1) return true
    if (dic[t]) return false
    dic[t] = 1
  }

  function getHappy(n) {
    let t = n, total = 0
    while (true) {
      let m = t % 10
      total += m * m
      t = t - m
      if (!t) break
      t = t / 10
    }
    return total
  }
};