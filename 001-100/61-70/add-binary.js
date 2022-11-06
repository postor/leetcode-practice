/**
 * 
 * @param {string} a
 * @param {string} b
 * @return {string}
 */
var addBinary = function (a, b) {
  if (a.length > b.length) return add(a, b)
  return add(b, a)

  //a始终较长
  function add(a, b) {
    let step = 0, rtn = ''
    for (let i = 0; i < a.length; i++) {
      let ai = a.length - 1 - i
      let bi = b.length - 1 - i
      let v = getV(a[ai]) + getV(b[bi]) + step
      if (v > 1) {
        step = 1
        rtn = v % 2 + rtn
        continue
      }
      step = 0
      rtn = v + rtn
    }
    if (step) {
      rtn = step + rtn
    }
    return rtn
  }

  function getV(x) {
    return x == '1' ? 1 : 0
  }

};

console.log(addBinary("1010","1011"))