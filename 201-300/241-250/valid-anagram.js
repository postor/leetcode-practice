/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isAnagram = function (s, t) {
  let sDic = getDic(s), tDic = getDic(t)
  let keys = Object.keys(tDic)
  if (Object.keys(sDic).length != keys.length) return false
  for (let char of keys) {
    if (sDic[char] !== tDic[char]) {
      return false
    }
  }
  return true

  function getDic(s) {
    let dic = {}
    for (let char of s) {
      if (!dic[char]) dic[char] = 1
      else dic[char]++
    }
    return dic
  }

};

// console.log(isAnagram('a', 'b'))