/**
 * @param {string} input
 * @return {number[]}
 */
var diffWaysToCompute = function (input) {
  const [nums, opts] = parser()
  if (!opts.length) return nums
  const OPTS = {
    '+': (x, y) => x + y,
    '-': (x, y) => x - y,
    '*': (x, y) => x * y,
  }, CACHE = opts.map(x => opts.map(y => undefined))

  return r(0, opts.length - 1)

  // 构造顺序，以2*3-4*5为例
  //    *                -               *                 *               *                     
  //  2   -           *     *          2      *          -            *   
  //    3   *       2   3 4   5            -    5      *                 -
  //      4   5                          3   4 


  /**
   * 
   * @return {[]} arr 
   */
  function r(from, to) {
    if (CACHE[from][to]) return CACHE[from][to]
    if (from == to) {
      CACHE[from][to] = [OPTS[opts[from]](nums[from], nums[from + 1])]
      return CACHE[from][to]
    }

    let rtn = []
    r(from + 1, to).forEach(x => rtn.push(OPTS[opts[from]](nums[from], x)))
    for (let i = from + 1; i < to; i++) {
      r(from, i - 1).forEach(x => r(i + 1, to).forEach(y => {
        rtn.push(OPTS[opts[i]](x, y))
      }))
    }
    r(from, to - 1).forEach(x => rtn.push(OPTS[opts[to]](x, nums[to + 1])))

    CACHE[from][to] = rtn
    return CACHE[from][to]
  }


  function parser() {
    let nums = [], opts = [], str = ''
    for (let i = 0; i < input.length; i++) {
      let char = input[i]
      if (char == '+' || char == '-' || char == '*') {
        nums.push(parseInt(str))
        str = ''
        opts.push(char)
        continue
      }
      str += char
    }
    nums.push(parseInt(str))
    return [nums, opts]
  }
};

// console.log(diffWaysToCompute("2-1-1"))
// console.log(diffWaysToCompute("2*3-4*5"))
// console.log(diffWaysToCompute("0"))
// console.log(typeof diffWaysToCompute("0"))