/**
 * @param {string} digits
 * @return {string[]}
 */
var letterCombinations = function (digits) {

  const dic = {
    2: ['a', 'b', 'c'],
    3: ['d', 'e', 'f'],
    4: ['g', 'h', 'i'],
    5: ['j', 'k', 'l'],
    6: ['m', 'n', 'o'],
    7: ['p', 'q', 'r', 's'],
    8: ['t', 'u', 'v'],
    9: ['w', 'x', 'y', 'z'],
  }
  if (!digits) return []
  return getLetters()

  function getLetters(start = 0, str = '') {
    if (start === digits.length - 1) {
      return dic[digits[start]].map(x => str + x)
    }
    return [].concat(...dic[digits[start]].map(x => getLetters(start + 1, str + x)))
  }

};

console.log(letterCombinations('23'))