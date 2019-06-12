/**
 * @param {string} s
 * @return {number}
 */
var calculate = function (s) {
  const EXP_TYPES = {
    number: 0,
    operator: 1,
    bracket: 2
  }
  class Exp {
    constructor(type, value) {
      this.type = type
      this.value = value
    }
  }
  const STATES = {
    inital: 'inital',
    number: 'number',
    finalize: 'finalize',
  }
  const Nums = new Array(10).fill(0).map((x, i) => i).reduce((o, x) => (o[x] = true, o), {})

  class FSM {
    constructor() {
      this.str = ''
      this.state = STATES.inital
      this.arr = []
      this.i = 0
      while (this.state != STATES.finalize) {
        this.state = this[this.state]()
      }
    }
    nextChar() {
      let char = s[this.i]
      this.i++
      return char
    }

    inital() {
      let char = this.nextChar()
      if (char === undefined) {
        return STATES.finalize
      }
      if (char === ' ') {
        return STATES.inital
      }
      if (char === '(' || char === ')') {
        this.arr.push(new Exp(EXP_TYPES.bracket, char))
        return STATES.inital
      }
      if (char === '+' || char === '-' || char === '*' || char === '/') {
        this.arr.push(new Exp(EXP_TYPES.operator, char))
        return STATES.inital
      }
      if (Nums[char]) {
        this.str += char
        return STATES.number
      }
    }

    number() {
      let char = this.nextChar()
      if (char === undefined) {
        this.arr.push(new Exp(EXP_TYPES.number, parseInt(this.str)))
        this.str = ''
        return STATES.finalize
      }
      if (char === ' ') {
        this.arr.push(new Exp(EXP_TYPES.number, parseInt(this.str)))
        this.str = ''
        return STATES.inital
      }
      if (char === '(' || char === ')') {
        this.arr.push(new Exp(EXP_TYPES.number, parseInt(this.str)))
        this.str = ''
        this.arr.push(new Exp(EXP_TYPES.bracket, char))
        return STATES.inital
      }
      if (char === '+' || char === '-' || char === '*' || char === '/') {
        this.arr.push(new Exp(EXP_TYPES.number, parseInt(this.str)))
        this.str = ''
        this.arr.push(new Exp(EXP_TYPES.operator, char))
        return STATES.inital
      }
      if (Nums[char]) {
        this.str += char
        return STATES.number
      }
    }
  }
  const Prioritys = {
    '+': 1,
    '-': 1,
    '*': 2,
    '/': 2,
  }

  const Opts = {
    '+': (x, y) => x + y,
    '-': (x, y) => x - y,
    '*': (x, y) => x * y,
    '/': (x, y) => {
      let rtn = x / y
      return rtn > 0 ? Math.floor(rtn) : Math.ceil(rtn)
    },
  }

  // into array
  let arr = (new FSM()).arr
  // console.log(arr.map(x => x.value))
  return parse()
  /**
   * 
   * @param {*} start
   * @param {*} withBracket 
   * @returns {Number}
   */
  function parse() {
    let values = [], operators = []
    while (arr.length) {
      let exp = arr.shift()
      switch (exp.type) {
        case EXP_TYPES.bracket:
          if (exp.value == '(') {
            addValue(parse())
          } else {
            return calc(values, operators)
          }
          break
        case EXP_TYPES.number:
          addValue(exp.value)
          break
        case EXP_TYPES.operator:
          operators.push(exp.value)
          break
      }
    }
    return calc(values, operators)

    function addValue(v) {
      values.push(v)
      if (!operators.length) operators.push('+') //第一个数字前面如果没有符号统一加个加号
    }
  }

  /**
   * 
   * @param {*} values 
   * @param {*} operators 
   * @returns {Number} 
   */
  function calc(values, operators) {
    let vs = [0, values[0]], opt = operators[0]
    for (let i = 1; i < operators.length; i++) {
      if (Prioritys[operators[i]] > Prioritys[opt]) {
        // 后面的优先级高
        vs[1] = Opts[operators[i]](vs[1], values[i])
      } else {
        // 前面的优先级高
        vs[0] = Opts[opt](vs[0], vs[1])
        opt = operators[i]
        vs[1] = values[i]
      }
    }
    return Opts[opt](vs[0], vs[1])
  }

};

// console.log(calculate("3+2*2"))
// console.log(calculate("1+2*5/3+6/4*2"))

console.log(calculate(require('./basic-calculator-ii.data')))