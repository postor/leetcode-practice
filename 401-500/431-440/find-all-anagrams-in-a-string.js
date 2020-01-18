/**
 * @param {string} s
 * @param {string} p
 * @return {number[]}
 */
var findAnagrams = function (s, p) {
  if (s.length < p) return []
  let rtn = [], dicS = getDic(s.substr(0, p.length)), dicP = getDic(p)
  for (let i = 0; i < s.length; i++) {
    if (equal(dicS, dicP)) rtn.push(i)
    if (i + p.length >= s.length) break
    let toRemove = s[i], toAdd = s[i + p.length]
    if (!dicS.has(toAdd)) {
      dicS.set(toAdd, 1)
    } else {
      dicS.set(toAdd, dicS.get(toAdd) + 1)
    }
    let afterRemove = dicS.get(toRemove) - 1
    if (afterRemove) {
      dicS.set(toRemove, afterRemove)
    } else {
      dicS.delete(toRemove)
    }
  }
  return rtn

  function equal(dic1 = new Map(), dic2 = new Map()) {
    if (dic1.size != dic2.size) return false
    for (let char of dic1.keys()) {
      if (dic1.get(char) != dic2.get(char)) return false
    }
    return true
  }

  function getDic(s) {
    let dic = new Map()
    for (let char of s) {
      if (!dic.has(char)) {
        dic.set(char, 1)
        continue
      }
      dic.set(char, dic.get(char) + 1)
    }
    return dic
  }
};

// console.log(findAnagrams("cbaebabacd", "abc"))