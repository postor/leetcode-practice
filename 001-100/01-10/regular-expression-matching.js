/**
 * 简单的正则匹配
 * @param {string} s 字符串
 * @param {string} p 正则表达式
 * @return {boolean} 是否匹配
 */
var isMatch = function (s, p) {
  // 定义字符串和正则的进度下标，和上一个字符（*的时候用）
  let is = 0, ip = 0, lastChar = ''
  while (true) {
    const pchar = p[ip], schar = s[is]
    //判定结束
    if (pchar === undefined) {
      if (schar === undefined) {
        return true
      }
      return false
    }
    //*需要略过字母
    if (p[ip + 1] === '*') {
      lastChar = pchar
      ip++
      continue
    }

    //单个匹配
    if (pchar === '.') {
      if (schar === undefined) {
        return false
      }
      is++
      ip++
      continue
    }

    // 多个匹配
    if (pchar === '*') {
      if (!lastChar) {
        return false
      }
      // 到了正则末尾
      if (ip === p.length - 1) {
        // 任意字符任意个数
        if (lastChar === '.') {
          return true
        } else {
          // 剩下的都是lastChar，例如/a*/.test('aaa') s.length=3 len=3 is=0
          let len = getCharLen(s, is, lastChar)
          return s.length === len + is
        }
      } else {
        let newP = p.substr(ip + 1)
        if (lastChar === '.') {
          // 只要后面有能匹配的即可，例如 /.*a/.test('aaa')
          // aaa\aa\a能匹配a都可以
          let arr = []
          for (let j = is; j <= s.length; j++) {
            arr.push({
              p: newP,
              s: s.substr(j)
            })
          }
          return arr.some(({ s, p }) => isMatch(s, p))
        } else {
          // 只要后面有能匹配的即可，例如 /a*a/.test('aaa')
          // aaa\aa\a能匹配a都可以
          let len = getCharLen(s, is, lastChar)

          let arr = []
          for (let j = is; j <= is + len; j++) {
            arr.push({
              p: newP,
              s: s.substr(j)
            })
          }
          return arr.some(({ s, p }) => isMatch(s, p))
        }
      }
    }

    // 字母匹配
    if (pchar !== schar) {
      return false
    }
    is++
    ip++
  }
};

function getCharLen(s, start, char) {
  let rtn = 0
  for (let i = start; i < s.length; i++) {
    if (s[i] === char) {
      rtn++
    } else {
      break
    }
  }
  return rtn
}

console.log(isMatch("ray", "ra."))
console.log(isMatch("raymond", "ra."))
console.log(isMatch("chat", ".*at"))
console.log(isMatch("chats", ".*at"))

// console.log(isMatch("aab", "c*a*b"))
// console.log(isMatch("aaa", "a*a"))
// console.log(isMatch("mississippi", "mis*is*p*."))
// console.log(isMatch("aabcbcbcaccbcaabc",".*a*aa*.*b*.c*.*a*"))