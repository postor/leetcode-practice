/**
 * @param {string} s
 * @param {string} p
 * @return {boolean}
 */
var isMatch = function (s, p) {
  console.log({ s, p })
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
        //console.log(`${pchar} mismatch ${schar}`)
        return false
      }
      //console.log(`${pchar} match ${schar}`)
      is++
      ip++
      continue
    }

    //多个匹配
    if (pchar === '*') {
      if (!lastChar) {
        return false
      }

      if (ip === p.length - 1) {
        if (lastChar === '.') {
          //任意字符任意个数
          return true
        } else {
          //剩下的都是lastChar，例如/a*/.test('aaa') s.length=3 len=3 is=0
          let len = getCharLen(s, is, lastChar)
          return s.length === len + is
        }
      } else {
        let newP = p.substr(ip + 1)
        if (lastChar === '.') {
          //只要后面有能匹配的即可，例如 /.*a/.test('aaa')
          //aaa\aa\a能匹配a都可以
          let arr = []
          for (let j = is; j <= s.length; j++) {
            arr.push({
              p: newP,
              s: s.substr(j)
            })
          }
          return arr.some(({ s, p }) => isMatch(s, p))
        } else {
          //只要后面有能匹配的即可，例如 /a*a/.test('aaa')
          //aaa\aa\a能匹配a都可以
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

    //字母匹配
    if (pchar !== schar) {
      //console.log(`${pchar} mismatch ${schar}`)
      return false
    }
    //console.log(`${pchar} match ${schar}`)
    is++
    ip++
  }
};


const a = 'a'.charCodeAt(0), z = 'z'.charCodeAt(0)
function checkS(s) {
  const charcode = s.charCodeAt(0)
  return charcode >= a && charcode <= z
}

function checkP(p) {
  return p === '*' || p === '.' || checkS(p)
}

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

//console.log(isMatch("aab", "c*a*b"))
//console.log(isMatch("aaa", "a*a"))
//console.log(isMatch("mississippi", "mis*is*p*."))
//console.log(isMatch("aabcbcbcaccbcaabc",".*a*aa*.*b*.c*.*a*"))