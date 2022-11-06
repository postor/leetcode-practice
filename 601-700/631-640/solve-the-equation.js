/**
 * @param {string} equation
 * @return {string}
 */
var solveEquation = function (equation) {
  class Unit {
    constructor(num = 0, x = false) {
      this.num = num
      this.x = x
    }
  }

  let [left, right] = equation.split('=').map(x => parseStr(x))
  let nx = 0, n = 0
  for (let u of left) {
    u.x ? (nx += u.num) : (n -= u.num)
  }
  for (let u of right) {
    u.x ? (nx -= u.num) : (n += u.num)
  }
  if (nx === 0) {
    return n === 0 ? 'Infinite solutions' : 'No solution'
  }
  return `x=${n / nx}`

  function parseStr(str) {
    let cur = '', rtn = []
    for (let char of str) {
      if (char === 'x') {
        let c = (!cur || cur === '+')
          ? 1
          : (cur === '-')
            ? -1
            : parseInt(cur)
        rtn.push(new Unit(c, true))
        cur = ''
        continue
      }
      if (!cur.length) {
        cur += char
        continue
      }
      if (char === '+' || char === '-') {
        rtn.push(new Unit(parseInt(cur), false))
        cur = char
        continue
      }

      cur += char
    }
    if (cur) rtn.push(new Unit(parseInt(cur), false))
    return rtn
  }
};

// console.log(solveEquation("x+5-3+x=6+x-2"))