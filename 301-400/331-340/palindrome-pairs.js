/**
 * @param {string[]} words
 * @return {number[][]}
 */
var palindromePairs = function (words) {
  let rtn = []
  for (let i = 0; i < words.length - 1; i++) {
    for (let j = i + 1; j < words.length; j++) {
      if (isPalindrome(words[i] + words[j])) rtn.push([i, j])
      if (isPalindrome(words[j] + words[i])) rtn.push([j, i])
    }
  }
  return rtn

  function isPalindrome(str = '') {
    for (let i = 0, j = str.length - 1; i < j; i++ , j--) {
      if (str[i] != str[j]) return false
    }
    return true
  }
};


