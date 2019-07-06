/**
 * @param {string} s
 * @param {number} k
 * @return {number}
 */
var longestSubstring = function (s, k) {
  return r(s)

  function r(str = s) {
    let dic = meta(str)
    let char
    let has = Object.keys(dic).some(key => {
      if (dic[key] < k) {
        char = key
        return true
      }
    })
    if (!has) return str.length
    let lengthes = str.split(char).map(x => r(x))
    return Math.max(...lengthes)
  }

  function meta(s = '') {
    let dic = []
    s.split('').forEach(x => {
      dic[x] = (dic[x] || 0) + 1
    })
    return dic
  }
};