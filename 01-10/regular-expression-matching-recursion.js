/**
 * 简单的正则匹配
 * @param {string} s 字符串
 * @param {string} p 正则表达式
 * @return {boolean} 是否匹配
 */
var isMatch = function (s, p) {
  return r(s, p)  
  function r(s, p) {
    // 判定结束
    if (p == '') return s == ''
    // 是有*的
    if (p.length > 1 && p[1] == '*') {
      let p1 = p.substr(2)
      // *匹配了i个递归尝试，直到不能匹配
      for (let i = 0; i <= s.length; i++) {
        if (r(s.substr(i), p1)) return true
        if (!matchChar(s[i], p[0])) break
      }
      // 一个也匹配不了
      return false
    }
    // 空串匹配不了.或普通
    if (s == '') return false
    // 有.的或普通匹配
    if (matchChar(s[0], p[0])) {
      return r(s.substr(1), p.substr(1))
    }
    // 普通和.也匹配不上
    return false
  }

  /**
   * 单个字符是否匹配
   * @param {string} s 
   * @param {string} p 
   */
  function matchChar(s, p) {
    if (p == '.') return true
    return p == s
  }
};

console.log(isMatch("ray", "ra."))
console.log(isMatch("raymond", "ra."))
console.log(isMatch("chat", ".*at"))
console.log(isMatch("chats", ".*at"))

// console.log(isMatch("aab", "c*a*b"))
// console.log(isMatch("aaa", "a*a"))
// console.log(isMatch("mississippi", "mis*is*p*."))
// console.log(isMatch("aabcbcbcaccbcaabc",".*a*aa*.*b*.c*.*a*"))