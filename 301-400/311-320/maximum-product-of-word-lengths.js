/**
 * @param {string[]} words
 * @return {number}
 */
var maxProduct = function (words) {
  const CHAR_CODE_A = 'a'.charCodeAt(0)
  let bits = words.map(x => toBits(x))
  let max = 0
  for (let i = 0; i < words.length - 1; i++) {
    for (let j = i + 1; j < words.length; j++) {
      if (bits[i] & bits[j]) continue //有重复字母
      max = Math.max(max, words[i].length * words[j].length)
    }
  }
  return max


  function toBits(word = '') {
    let b = 0
    for (let i = 0; i < word.length; i++) {
      b |= 1 << word.charCodeAt(i) - CHAR_CODE_A
    }
    return b
  }
};