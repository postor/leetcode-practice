/**
 * 判断括号格式是否合法
 * @param {string} s
 * @return {boolean}
 */
var isValid = function (s) {
  // 配对关系定义
  const brackets = {
    '(': ')',
    '[': ']',
    '{': '}',
  }
  // 后进先出保证整齐配对
  const stack = []
  // 遍历所有字符
  for (let i = 0; i < s.length; i++) {
    //如果是左半边括号
    if (brackets[s[i]]) {
      //推入stack
      stack.push(s[i])
      continue
    }
    //如果是右半边括号则从栈里取出一个，看是否配对
    let poped = stack.pop()
    if (brackets[poped] === s[i]) {
      // 配对则继续      
      continue
    }
    // 不配对，表示格式是错误的
    return false
  }
  // 全都跑完了，但没有把栈里的用完
  if (stack.length) {
    // 表示有多余的左括号
    return false
  }
  // 栈里的也用完了，所有括号都配对
  return true
};

console.log(isValid("([])[]({})"))
console.log(isValid("([)]"))
console.log(isValid("((()"))