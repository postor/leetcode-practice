/**
 * @param {number} x
 * @param {number} y
 * @param {number} z
 * @return {boolean}
 */
var canMeasureWater = function (x, y, z) {
  if (x > y) return canMeasureWater(y, x, z)
  let found = true
  let arr = [0, x, y, x + y]
  let tarr = [0]

  while (!arr.includes(z)) {
    let tarr2 = []
    tarr.forEach(a => {
      if (a < x) {
        // 小桶不满

        // 大桶装满后填满小桶，然后大桶剩余
        let t = y - (x - a)
        if (!arr.includes(t)) {
          arr.push(t)
          tarr2.push(t)
        }

        // 大桶装满后和小桶的和
        let t2 = y + a
        if (!arr.includes(t2)) {
          arr.push(t2)
          tarr2.push(t2)
        }
      }

      if (a < y) {
        // 大桶不满

        // 倒入小桶后剩余？
        if (a > x) {
          let t = a - x
          if (!arr.includes(t)) {
            arr.push(t)
            tarr2.push(t)
          }
        }
        // 小桶倒入大桶后有剩余
        if (x + a > y) {
          let t = a + x - y
          if (!arr.includes(t)) {
            arr.push(t)
            tarr2.push(t)
          }
        }

        // 小桶倒加大桶
        let t = a + x
        if (!arr.includes(t)) {
          arr.push(t)
          tarr2.push(t)
        }
      }

    })

    if (!tarr2.length) break
    tarr = tarr2
  }
  return arr.includes(z)
};

console.log(canMeasureWater(22003,
  31237,
  1))

console.log(canMeasureWater(2, 6, 5))
console.log(canMeasureWater(3, 5, 4))