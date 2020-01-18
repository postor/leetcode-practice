/**
 * @param {string} ransomNote
 * @param {string} magazine
 * @return {boolean}
 */
var canConstruct = function (ransomNote, magazine) {
  let dic = getDic(magazine)
  for (let char of ransomNote) {
    if (!dic[char]) return false
    dic[char]--
  }
  return true

  function getDic(str) {
    let dic = {}
    for (let char of str) {
      dic[char] = (dic[char] || 0) + 1
    }
    return dic
  }
};