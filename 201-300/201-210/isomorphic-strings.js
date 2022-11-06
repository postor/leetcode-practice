/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isIsomorphic = function (s, t) {
  let sDic = getDic(s)
  let tDic = getDic(t)
  let sKeys = Object.keys(sDic)
  if (sKeys.length != Object.keys(tDic).length) return false
  return sKeys.every(k => same(t, sDic[k]))

  function same(t, arr = []) {
    let char = t[arr[0]]
    for (let i = 1; i < arr.length; i++) {
      if (t[arr[i]] != char) return false
    }
    return true
  }

  function getDic(s) {
    let dic = {}
    for (let i = 0; i < s.length; i++) {
      let char = s[i]
      if (!dic[char]) dic[char] = []
      dic[char].push(i)
    }
    return dic
  }

};

// console.log(isIsomorphic('egg', 'add'))
// console.log(isIsomorphic('foo', 'bar'))
// console.log(isIsomorphic('paper', 'title'))