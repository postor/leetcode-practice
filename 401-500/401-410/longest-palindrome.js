/**
 * @param {string} s
 * @return {number}
 */
var longestPalindrome = function (s) {
  let dic = getDic(s), extra = 0, pairs = 0

  for (let char in dic) {
    if (dic[char] % 2) {
      pairs += dic[char] - 1
      extra = 1
      continue
    }
    pairs += dic[char]
  }

  return pairs + extra

  function getDic(s = '') {
    let dic = {}
    for (let char of s) {
      dic[char] = (dic[char] || 0) + 1
    }
    return dic
  }
};

// console.log(longestPalindrome("abccccdd"))