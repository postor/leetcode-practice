/**
 * @param {string} s
 * @param {string[]} wordDict
 * @return {boolean}
 */
var wordBreak = function (s, wordDict) {
  let c1 = {}, c2 = {}
  let rtn = r()
  return rtn.map(x => x.join(' '))
  function r(i = 0) {
    if (c1[i] !== undefined) return c1[i]
    let rtn = wordDict
      .filter(x => match(i, x))
      //.some(x => (i + x.length) == s.length || r(i + x.length))
      .map(x => {
        if ((i + x.length) == s.length) {
          return [[x]]
        }
        return r(i + x.length).map(y => [x].concat(y))
      })
      .reduce((res, y) => res.concat(y), [])
    c1[i] = rtn
    return rtn
  }

  function match(i = 0, w = '') {
    if (c2[`${i},${w}`] !== undefined) return c2[`${i},${w}`]
    for (let j = 0; j < w.length; j++) {
      if (s[j + i] != w[j]) {
        c2[`${i},${w}`] = false
        return false
      }
    }
    c2[`${i},${w}`] = true
    return true
  }
};

console.log(wordBreak("catsanddog",
  ["cat", "cats", "and", "sand", "dog"]).join('\n'))