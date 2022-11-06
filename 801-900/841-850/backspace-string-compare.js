/**
 * @param {string} S
 * @param {string} T
 * @return {boolean}
 */
var backspaceCompare = function (S, T) {
  let itS = gen(S), itT = gen(T)
  while (true) {
    let s = itS.next(), t = itT.next()
    if (s.done && t.done) return true
    if (s.done || t.done) return false
    if (s.value !== t.value) return false
  }

  function* gen(str = '') {
    let skip = 0
    for (let i = str.length - 1; i >= 0; i--) {
      if (str[i] === '#') {
        skip++
        continue
      }
      if (skip) {
        skip--
        continue
      }
      yield str[i]
    }
  }
};