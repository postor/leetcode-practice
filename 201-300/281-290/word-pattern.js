/**
 * @param {string} pattern
 * @param {string} str
 * @return {boolean}
 */
var wordPattern = function (pattern, str) {
  if (!str) return !pattern
  let words = str.split(' ')
  if (pattern.length != words.length){
    return false
  }
  let patternCount = countDistinct(pattern)
  let wordCount = countDistinct(words)
  if (patternCount != wordCount) {
    return false
  }

  let dic = {}
  for (let i = 0; i < pattern.length; i++) {
    if (!dic[words[i]]) {
      dic[words[i]] = pattern[i]
    } else {
      if (dic[words[i]] != pattern[i]) {
        return false
      }
    }
  }
  return true


  function countDistinct(p) {
    let dic = {}
    for (let k of p) {
      dic[k] = true
    }
    return Object.keys(dic).length
  }

};

// console.log(wordPattern("abba"
//   , "dog cat cat dog"))