/**
 * @param {string} s
 * @param {string[]} words
 * @return {number[]}
 */
var findSubstring = function (s, words) {
  if (!s.length || !words.length) return []
  let arr = [], i = 0
  let iMax = s.length - words[0].length * words.length
  let wordsDic = words.reduce((rtn, x) => {
    rtn[x] = rtn[x] ? rtn[x] + 1 : 1
    return rtn
  }, {})
  let wordsKeys = Object.keys(wordsDic)

  while (i <= iMax) {
    tryConcat(i, i)
    i++
  }
  return arr

  function tryConcat(ti, oi, leftwords = wordsDic, left = words.length) {
    if (left === 0) {
      arr.push(oi)
      return
    }
    wordsKeys.forEach(w=>{
      if (!leftwords[w]) {
        return
      }
      if (!tryIndex(ti, w)) {
        return
      }
      let ws = Object.assign({}, leftwords)
      ws[w]--
      tryConcat(ti + w.length, oi, ws, left - 1)
    })
  }
  function tryIndex(i, word) {
    for (let j = 0; j < word.length; j++) {
      if (s[i + j] != word[j]) {
        return false
      }
    }
    return true
  }
};


console.log(findSubstring("wordgoodgoodgoodbestword", ["word", "good", "best", "good"]))