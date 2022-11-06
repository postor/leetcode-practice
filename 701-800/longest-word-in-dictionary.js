/**
 * @param {string[]} words
 * @return {string}
 */
var longestWord = function (words) {
  words.sort((a, b) => a.length == b.length ? compareWord(a, b) : a.length - b.length)
  let matrix = [['']]
  for (let word of words) {
    if (word.length == 0) continue
    let lowerWords = matrix[word.length - 1]
    if (!Array.isArray(lowerWords)) break
    if (!lowerWords.includes(word.substr(0, word.length - 1))) continue
    if (!Array.isArray(matrix[word.length])) matrix[word.length] = []
    matrix[word.length].push(word)
  }
  let longwords = matrix[matrix.length - 1]
  return longwords[0]

  function compareWord(s1 = '', s2 = '') {
    for (let i = 0; i < s1.length; i++) {
      if (s1[i] == s2[i]) continue
      return 0.1 * (s1.charCodeAt(i) - s2.charCodeAt(i))
    }
    return 0
  }
};

// console.log(longestWord(["a", "banana", "app", "appl", "ap", "apply", "apple"]))