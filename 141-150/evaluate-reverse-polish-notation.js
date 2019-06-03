/**
 * @param {string[]} tokens
 * @return {number}
 */
var evalRPN = function (tokens) {
  const ops = {
    '+': (a, b) => a + b,
    '-': (a, b) => a - b,
    '*': (a, b) => a * b,
    '/': (a, b) => a / b,
  }
  let i = tokens.length - 1
  return r()
  function r() {
    let y = tokens[i]
    let x = ops[y]
    i--
    if (x) {
      let a = r()
      let b = r()
      let v = x(b, a)
      return v >= 0 ? Math.floor(v) : Math.ceil(v)
    }
    return parseInt(y)
  }
};

console.log(evalRPN(["10", "6", "9", "3", "+", "-11", "*", "/", "*", "17", "+", "5", "+"]))