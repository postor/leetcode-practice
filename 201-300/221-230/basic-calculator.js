/**
 * @param {string} s
 * @return {number}
 */
var calculate = function (s) {
  const Opts = {
    '+': (y) => + y,
    '-': (y) => - y,
  }
  const Nums = new Array(10).fill(0).map((x, i) => i).reduce((o, x) => (o[x] = true, o), {})

  return parseAll(0)[0]


  function parse(start = 0) {
    let i = start
    while (s[i] === ' ') i++
    if (i == s.length) return [0, s.length, false]
    let c = s[i]
    switch (c) {
      case '(':
        return parseAll(i + 1, true)
      case ')':
        return [0, i + 1, true]
      case '+':
      case '-':
        {
          let [v, j, br] = parse(i + 1)
          return [Opts[c](v), j, br]
        }
      default:
        {
          let str = c
          i++
          while (Nums[s[i]]) {
            str += s[i]
            i++
          }
          let br = s[i] == ')'
          return [parseInt(str), br ? i + 1 : i, br]
        }
    }
  }

  /**
   * 
   * @param {*} start 
   * @param {*} endWithBracket 
   * @returns {[Number,Number,boolean]} value,index,endWithBracket
   */
  function parseAll(start, endWithBracket = false) {
    let i = start, val = 0
    while (i < s.length) {
      let [v, j, br] = parse(i)
      val += v
      i = j
      if (br) {
        if (!endWithBracket) throw 'fail'
        return [val, j, false]
      }
    }
    return [val, i, false]
  }
};

// console.log(calculate("(1+(4+5+2)-3)+(6+8)"))
// console.log(calculate("1 + 1"))
// console.log(calculate(" 2-1 + 2 "))
