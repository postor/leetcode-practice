/**
 * @param {string[]} words
 * @param {string} pattern
 * @return {string[]}
 */
var findAndReplacePattern = function (words, pattern) {
  // ccc 不能匹配 abb, 我们都换成 0,1,2...
  // ccc => 000
  // abb => 011
  // mee => 011
  // 这样就能匹配了，但是数字只有10个的问题，我们可以用数组

  let toCompare = word2patten(pattern)
  return words.filter(x => word2patten(x) === toCompare)

  function word2patten(word = '') {
    let dic = {}, cur = 0, rtn = []
    for (let char of word) {
      if (dic[char] === undefined) {
        dic[char] = cur
        cur++
      }
      rtn.push(dic[char])
    }
    return rtn.join(',')
  }
};