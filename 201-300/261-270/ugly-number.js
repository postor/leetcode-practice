/**
 * @param {number} num
 * @return {boolean}
 */
var isUgly = function (num) {
  let t = num
  t = tryNum(t, 2)
  t = tryNum(t, 3)
  t = tryNum(t, 5)
  if (t == 1) return true
  return false

  function tryNum(x, y) {
    let z = x
    while (true) {
      let t = tryNumOnce(z, y)
      if (!t) return z
      z = t
    }
  }

  function tryNumOnce(x, y) {
    if (x % y == 0) return x / y
    return 0
  }
};

// [6,8,14].forEach(x=>{
//   let is = isUgly(x)
//   console.log(`${x} ${is?'is':'is not'} an ugly number`)
// })