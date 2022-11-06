/**
 * @param {number} n
 * @return {string[]}
 */
var generateParenthesis = function (n) {
  let rtn = [], dic = {}
  getStrings(n)
  return rtn

  function getStrings(n, cur = '', stack = [], open=undefined) {
    if (n === 0) {
      const str = cur + stack.join('')
      if (dic[str]) {
        return
      }
      dic[str] = 1
      rtn.push(str)
    }

    if (open === undefined) {
      getStrings(n, cur, stack.concat(), true)
      getStrings(n, cur, stack.concat(), false)
      return
    }
    //open
    if (open) {
      getStrings(n-1, cur+'(', stack.concat(')'))
      return
    }

    //close
    if(stack.length){
      getStrings(n, cur+stack.pop(), stack.concat())
    }    
  }
};

console.log(generateParenthesis(3).join('\n'))