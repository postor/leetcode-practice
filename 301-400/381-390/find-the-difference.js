/**
 * @param {string} s
 * @param {string} t
 * @return {character}
 */
var findTheDifference = function (s, t) {
  let dicS = getDic(s), dicT = getDic(t)
  for (let char in dicT) {
    if (!dicS[char]) return char
    if(dicS[char]<dicT[char]) return char
  }
  throw 'non found'

  function getDic(str) {
    let dic = {}
    for (let char of str) {
      dic[char] = (dic[char] || 0) + 1
    }
    return dic
  }
};