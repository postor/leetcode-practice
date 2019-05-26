/**
 * @param {string} s
 * @return {boolean}
 */
var isNumber = function (s) {
  let charcode0 = '0'.charCodeAt(0), charcode9 = '9'.charCodeAt(0)
  return tryCheck(s.trim(), [
    isExponent,
    isSignedFloat,
    isSignedInt,
    isFloat,
    isInt,
  ])

  function trimRight(s) {
    for (let i = s.length - 1; i >= 0; i--) {
      if (s[i] == ' ') continue
      return s.substr(0, i + 1)
    }
    return ''
  }
  function isExponent(s) {
    let arr = s.split('e')
    if (arr.length == 1) return false
    if (arr.length > 2) return false
    return tryCheck(arr[0], [
      isSignedFloat,
      isSignedInt,
      isFloat,
      isInt,
    ]) && tryCheck(arr[1], [
      isSignedInt,
      isInt,
    ])
  }
  function tryCheck(s, checkers) {
    for (let i = 0; i < checkers.length; i++) {
      if (checkers[i](s)) {
        return true
      }
    }
    return false
  }
  function isSignedFloat(s) {
    if (s[0] != '+' && s[0] != '-') return false
    return isFloat(s.substr(1))
  }
  function isSignedInt(s) {
    if (s[0] != '+' && s[0] != '-') return false
    return isInt(s.substr(1))
  }
  function isFloat(s) {
    let arr = s.split('.')
    if (arr.length == 1) return false
    if (arr.length > 2) return false
    if (arr[0] == '') return isInt(arr[1])
    if (arr[1] == '') return isInt(arr[0])
    return isInt(arr[0]) && isInt(arr[1])
  }
  function isInt(s) {
    if (!s) return false
    for (let i = 0; i < s.length; i++) {
      let charcode = s.charCodeAt(i)
      if (charcode < charcode0 || charcode > charcode9) {
        return false
      }
    }
    return true
  }
};

console.log(isNumber('.1'))