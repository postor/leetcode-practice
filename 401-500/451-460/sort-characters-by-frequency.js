/**
 * @param {string} s
 * @return {string}
 */
var frequencySort = function (s) {
  let dic = {}
  for (let i = 0; i < s.length; i++) {
    dic[s[i]] = (dic[s[i]] || 0) + 1
  }
  let chars = Object.keys(dic)
  chars.sort((a, b) => dic[b] - dic[a])
  let rtn = ''
  chars.forEach(x => {
    for (let i = 0; i < dic[x]; i++) {
      rtn += x
    }
  })
  return rtn
};