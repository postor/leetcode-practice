/**
 * @param {string} expression
 * @return {number}
 */
var evaluate = function (expression) {
  class Scope {
    /**
     * 
     * @param {Scope} parent 
     */
    constructor(parent) {
      this.vars = {}
      this.parent = parent
    }

    getVar(name) {
      let t = this
      while (t) {
        if (t.vars.hasOwnProperty(name)) return t.vars[name]
        t = t.parent
      }
      throw `var ${name} not found in any scope`
    }
    setVar(name, value) {
      this.vars[name] = value
    }
  }

  const words = expression
    .split('(').join('( ')
    .split(')').join(' )')
    .split(' '),
    KEYWORDS = {
      let: 1,
      mult: 2,
      add: 3,
    },
    STATES = {
      init: 0,
      ...KEYWORDS,
      letOrVal: 4,
    }
  let i = 0

  return parse()

  /**
   * 
   * @param {Scope} parentScope 
   */
  function parse(parentScope) {
    let curScope = new Scope(parentScope), state = STATES.init
    if (words[i] != '(') {
      let val = /^-?\d+$/.test(words[i])
        ? Number.parseInt(words[i])
        : curScope.getVar(words[i])
      i++
      return val
    }
    i++
    outer:
    while (i < words.length) {
      let word = words[i]
      switch (state) {
        case STATES.init:
          state = STATES[word]
          break
        case STATES.add:
          {
            let v1 = parse(curScope), v2 = parse(curScope)
            i++ // skip ')'
            return v1 + v2
          }
        case STATES.mult:
          {
            let v1 = parse(curScope), v2 = parse(curScope)
            i++ // skip ')'
            return v1 * v2
          }
        case STATES.letOrVal:
          if (!/^[a-z]/.test(word) || words[i + 1] == ')') {
            let rtn = parse(curScope)
            i++
            return rtn
          }
        // not breaking, go to let
        case STATES.let:
          let name = word
          i++
          let value = parse(curScope)
          curScope.setVar(name, value)
          state = STATES.letOrVal
          continue outer
      }
      i++
    }
  }
};

// console.log(evaluate(`(let x 2 (add (let x 3 (let x 4 x)) x))`))
// console.log(evaluate("(let x 7 -12)"))

