/**
 * @param {string} s
 * @return {number}
 */
var firstUniqChar = function (s) {
  let dic = getDic(s)
  for (let i = 0; i < s.length; i++) {
    if (dic[s[i]] == 1) return i
  }
  return -1

  function getDic(str) {
    let dic = {}
    for (let char of str) {
      dic[char] = (dic[char] || 0) + 1
    }
    return dic
  }
};
