/**
 * @param {string} s
 * @param {string} p
 * @return {boolean}
 */
var isMatch = function (s, p) {
  let splited = p.split(/\*+/), forceLeft = true, forceRight = true
  if (splited[0] == '') {
    forceLeft = false
    splited = splited.slice(1)
  }
  //只有一个空串，说明输入就是空串
  if (!splited.length) return s == ''
  if (splited[splited.length - 1] == '') {
    forceRight = false
    splited = splited.slice(0, splited.length - 1)
  }
  if (!splited.length) {
    //只有两个空串，说明输入就是*
    return true
  }
  return match(0, s.length - 1, splited, forceLeft, forceRight)
  function match(start = 0, end = s.length - 1, ps = splited, forceLeft = true, forceRight = true) {
    if (ps.length == 1) {
      if (end - start < ps[0].length - 1) return false
      let rtn = tryMatchOne(start, end, ps[0])
      if (rtn === false) return false
      if (forceLeft) {
        if (rtn.s != 0) return false
        if (forceRight) return (rtn.e == end)
        return true
      }
      if (forceRight) {
        return !!matchOne(end - ps[0].length + 1, ps[0])
      }
      return true
    }

    if (ps.length == 2) {
      let [left, right] = ps
      if (end - start < left.length + right.length - 2) {
        return false
      }

      let rtn = tryMatchOne(start, end, left)
      if (rtn === false) {
        return false
      }
      const { s, e } = rtn
      if (forceLeft) {
        if (s != start) {
          return false
        }
      }
      return match(e + 1, end, [right], false, forceRight)
    }
    //if (ps.length >= 3) {
    let sortedIndexs = ps.map((x, i) => i).sort((a, b) => ps[b] - ps[a])
    let maxIndex = sortedIndexs[0]
    let maxP = ps[maxIndex]
    if (maxIndex == 0) {
      let right = ps.slice(1)
      let rtn = tryMatchOne(start, end, maxP)
      if (!rtn) return false
      const { s, e } = rtn
      if (forceLeft) {
        if (s != 0) return false
      }
      return match(e + 1, end, right, false, forceRight)
    }
    if (maxIndex == ps.length - 1) {
      let left = ps.slice(0, ps.length - 1)
      let rtn = tryMatchOneReverse(start, end, maxP)
      if (!rtn) return false
      const { s, e } = rtn
      if (forceRight) {
        if (e != end) return false
      }
      return match(start, s - 1, left, forceLeft, false)
    }

    let curStart = 0
    while (curStart + maxP.length - 1 <= end - start) {
      let tryRtn = tryMatchOne(curStart, end, maxP)
      if (tryRtn === false) return false
      let { s, e } = tryRtn
      curStart = s + 1
      let left = ps.slice(0, maxIndex)
      if (!match(start, s - 1, left, forceLeft, false)) {
        continue
      }
      let right = ps.slice(maxIndex + 1)
      if (!match(e + 1, end, right, false, forceRight)) {
        continue
      }
      return true
    }
    return false
  }

  function tryMatchOne(start, end, p) {
    for (let i = start; i + p.length - 1 <= end; i++) {
      let rtn = matchOne(i, p)
      if (rtn !== false) {
        return {
          s: i,
          e: rtn
        }
      }
    }
    return false
  }
  function tryMatchOneReverse(start, end, p) {
    for (let i = end - p.length + 1; i >= start; i--) {
      let rtn = matchOne(i, p)
      if (rtn !== false) {
        return {
          s: i,
          e: rtn
        }
      }
    }
    return false
  }

  function matchOne(start, p) {
    for (let i = 0; i < p.length; i++) {
      if (start + i >= s.length) return false
      if (p[i] == '?') continue
      if (p[i] == s[start + i]) continue
      return false
    }
    return start + p.length - 1
  }
};
// console.log(isMatch('aa', '*'))
// console.log(isMatch('a','a'))
// console.log(isMatch('aa','a'))
// console.log(isMatch("acdcb", "a*c?b"))
// console.log(isMatch("acdcb", "*a*b"))
// console.log(isMatch('ab','?*'))
// console.log(isMatch('abefcdgiescdfimde','ab*cd?i*de'))

// console.log(isMatch('ab','*?*?*'))
// console.log(isMatch('aaaabbaa', '*b*a*aa'))

let s = "aaabaaabaabababbabababaababbabbbbaaaaababbaabbbaab"
let p = "*babbbb*aab**b*bb*aa*"
console.log(isMatch(s, p))

// let s = "abbabaaabbabbaababbabbbbbabbbabbbabaaaaababababbbabababaabbababaabbbbbbaaaabababbbaabbbbaabbbbababababbaabbaababaabbbababababbbbaaabbbbbabaaaabbababbbbaababaabbababbbbbababbbabaaaaaaaabbbbbaabaaababaaaabb"
// let p = "**aa*****ba*a*bb**aa*ab****a*aaaaaa***a*aaaa**bbabb*b*b**aaaaaaaaa*a********ba*bbb***a*ba*bb*bb**a*b*bb"
// console.log(isMatch(s, p))