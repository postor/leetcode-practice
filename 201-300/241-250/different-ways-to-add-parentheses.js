/**
 * @param {string} input
 * @return {number[]}
 */
var diffWaysToCompute = function (input) {
  const arr = parser()
  const OPTS = {
    '+': (x, y) => x + y,
    '-': (x, y) => x - y,
    '*': (x, y) => x * y,
  }

  let rtn = []
  r(arr)
  return rtn


  /**
   * 
   * @param {[]} arr 
   */
  function r(arr) {
    if (arr.length == 3) {
      rtn.push(OPTS[arr[1]](arr[0], arr[2]))
      return
    }
    
    // 构造树
  }


  function parser() {
    let arr = [], str = ''
    for (let i = 0; i < input.length; i++) {
      let char = input[i]
      if (char == '+' || char == '-' || char == '*') {
        arr.push(parseInt(str))
        str = ''
        arr.push(char)
        continue
      }
      str += char
    }
    arr.push(parseInt(str))
    return arr
  }
};

// console.log(diffWaysToCompute("2-1-1"))
console.log(diffWaysToCompute("2*3-4*5"))
