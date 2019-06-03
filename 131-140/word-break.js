/**
 * @param {string} s
 * @param {string[]} wordDict
 * @return {boolean}
 */
var wordBreak = function (s, wordDict) {
  return r()
  function r(i = 0) {
    return wordDict
      .filter(x => match(i, x))
      .some(x => (i + x.length) == s.length || r(i + x.length))
  }

  function match(i = 0, w = '') {
    for (let j = 0; j < w.length; j++) {
      if (s[j + i] != w[j]) return false
    }
    return true
  }
};

console.log(wordBreak("leetcode", ["leet", "code"]))