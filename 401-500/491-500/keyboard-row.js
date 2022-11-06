/**
 * @param {string[]} words
 * @return {string[]}
 */
var findWords = function (words) {
  let rows = [
    ['q', 'w', 'e', 'r', 't', 'y', 'u', 'i', 'o', 'p'],
    ['a', 's', 'd', 'f', 'g', 'h', 'j', 'k', 'l'],
    ['z', 'x', 'c', 'v', 'b', 'n', 'm']
  ]
  return words
    .filter(
      str => rows.some(
        row => str.split('').every(
          char => row.includes(char.toLowerCase()))))
};