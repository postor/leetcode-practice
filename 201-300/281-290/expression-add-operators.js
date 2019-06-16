/**
 * @param {string} num
 * @param {number} target
 * @return {string[]}
 */
var addOperators = function (num, target) {
  const OPTS = {
    '+': (x, y) => x + y,
    '-': (x, y) => x - y,
    '*': (x, y) => x * y,
  }, OPTARR = [
    '+', '-', '*'
  ], OPT_PRI = {
    '+': 1,
    '-': 1,
    '*': 2
  }


  return r(0, num.length)
    .filter(exps => calc(exps) == target)
    .map(exps => exps.join(''))
  //console.log(arr.join('\n'))

  function calc(exps) {
    if (exps.length == 1) return exps[0]
    let a = exps[0], o = exps[1], b = exps[2]
    for (let i = 3; i < exps.length; i += 2) {
      if (OPT_PRI[exps[i]] > OPT_PRI[o]) {
        b = OPTS[exps[i]](b, exps[i + 1])
      } else {
        a = OPTS[o](a, b)
        o = exps[i]
        b = exps[i + 1]
      }
    }
    return OPTS[o](a, b)
  }

  /**
   * 
   * @param {*} from 
   * @param {*} to
   * @returns {[]} 
   */
  function r(from, to) {
    let rtn = []
    // as one number
    let exp = num.slice(from, to)
    if (exp[0] !== '0' || exp.length == 1)
      rtn.push([parseInt(exp)])
    if (to - from == 1) return rtn
    // as two
    for (let left = from + 1; left < to; left++) {
      r(from, left).forEach(
        (exps) => OPTARR.forEach(
          o => {
            let yexp = num.slice(left, to)
            if (yexp[0] === '0' && yexp.length > 1) return
            let exp = [...exps, o, parseInt(yexp)]
            rtn.push(exp)
          }
        )
      )
    }
    return rtn
  }
};

// console.log(addOperators('123', 6))
console.log(addOperators('105', 5))