/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function (s) {
  const brackets = {
    '(': ')',
    '[': ']',
    '{': '}',
  },stack = []

  for(let i=0;i<s.length;i++){
    if(brackets[s[i]]){
      stack.push(s[i])
      continue
    }
    if(brackets[stack[stack.length-1]] === s[i]){
      stack.pop()
      continue
    }
    return false
  }
  if(stack.length){
    return false
  }
  return true
};