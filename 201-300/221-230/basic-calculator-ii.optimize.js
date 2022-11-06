/**
 * @param {string} s
 * @return {number}
 */
var calculate = function (s) {
  let i = 0
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
      //this.arr = []
      this.i = 0
      // while (this.state != STATES.finalize) {
      //   this.state = this[this.state]()
      // }
    }

    * gen() {
      while (this.state != STATES.finalize) {
        let rtn = this[this.state]()
        this.state = rtn[0]
        for (let i = 1; i < rtn.length; i++) {
          yield rtn[i]
        }
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
        return [STATES.finalize]
      }
      if (char === ' ') {
        return [STATES.inital]
      }
      if (char === '(' || char === ')') {
        return [STATES.inital, new Exp(EXP_TYPES.bracket, char)]
      }
      if (char === '+' || char === '-' || char === '*' || char === '/') {
        return [STATES.inital, new Exp(EXP_TYPES.operator, char)]
      }
      if (Nums[char]) {
        this.str += char
        return [STATES.number]
      }
    }

    number() {
      let char = this.nextChar()
      if (char === undefined) {
        let rtn = [STATES.finalize, new Exp(EXP_TYPES.number, parseInt(this.str))]
        this.str = ''
        return rtn
      }
      if (char === ' ') {
        let rtn = [STATES.inital, new Exp(EXP_TYPES.number, parseInt(this.str))]
        this.str = ''
        return rtn
      }
      if (char === '(' || char === ')') {
        let rtn = [
          STATES.inital,
          new Exp(EXP_TYPES.number, parseInt(this.str)),
          new Exp(EXP_TYPES.bracket, char),
        ]
        this.str = ''
        return rtn
      }
      if (char === '+' || char === '-' || char === '*' || char === '/') {
        let rtn = [
          STATES.inital,
          new Exp(EXP_TYPES.number, parseInt(this.str)),
          new Exp(EXP_TYPES.operator, char),
        ]
        this.str = ''
        return rtn
      }
      if (Nums[char]) {
        this.str += char
        return [STATES.number]
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
  let it = (new FSM()).gen()
  // console.log(arr.map(x => x.value))
  return parse()
  /**
   * 
   * @param {*} start
   * @param {*} withBracket 
   * @returns {Number}
   */
  function parse() {
    let vs = [], opts = []

    while (true) {
      let next = it.next()
      let { value, done } = next
      if (done) break
      let exp = value
      switch (exp.type) {
        case EXP_TYPES.bracket:
          if (exp.value == '(') {
            addValue(parse())
          } else {
            return finalize()
          }
          break
        case EXP_TYPES.number:
          addValue(exp.value)
          break
        case EXP_TYPES.operator:
          addOperator(exp.value)
          break
      }
    }
    return finalize()

    function addValue(v) {
      // 还不够两个数字
      if (vs.length < 2) {
        vs.push(v)
        return
      }

      // 两个数字，后面的优先级搞
      let [o1, o2] = opts
      if (Prioritys[o2] > Prioritys[o1]) {
        vs[1] = Opts[o2](vs[1], v)
        opts.pop()
        // i++; ((i % 100) == 0) && console.log([o2, vs[1], v, i])
        return
      }

      // 顺序计算
      vs[0] = Opts[o1](vs[0], vs[1])
      vs[1] = v
      opts.shift()
      // i++; ((i % 100) == 0) && console.log([o1, vs[0], vs[1], i])

    }
    function addOperator(o) {
      if (!vs.length) {
        vs.push(0)
      }
      opts.push(o)
    }
    function finalize() {
      if(!opts.length) return vs[0] 
      let opt = opts.shift()
      return Opts[opt](vs[0], vs[1])
    }
  }
};

// console.log(calculate("3+2*2"))
// console.log(calculate("1+2*5/3+6/4*2"))
// console.time()
// console.log(calculate(require('./basic-calculator-ii.data')))
// console.timeEnd()