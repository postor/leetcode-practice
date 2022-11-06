/**
 * @param {string} s1
 * @param {string} s2
 * @return {boolean}
 */
var checkInclusion = function (s1, s2) {
  let dic1 = getDic(s1), dic2 = getDic(s2.substr(0, s1.length))
  for (let i = 0; i <= s2.length - s1.length; i++) {
    if (dicEqual(dic1, dic2)) return true
    let toRemove = s2[i], toAdd = s2[i + s1.length]
    dic2[toRemove]--
    dic2[toAdd] = (dic2[toAdd] || 0) + 1
  }
  return false

  function dicEqual(dic1, dic2) {
    for (let k in dic1) {
      if (dic1[k] !== dic2[k]) return false
    }
    return true
  }

  function getDic(str = '') {
    let dic = {}
    for (let char of str) {
      dic[char] = (dic[char] || 0) + 1
    }
    return dic
  }
};

console.log(checkInclusion('abc','deacb'))