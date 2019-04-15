/**
 * @param {string} s
 * @param {string} t
 * @return {string}
 */
var minWindow = function (s, t) {
  class W {
    constructor() {
      this.dic = {}
      this.str = ''
      this.i = 0
    }
    add() {
      let c = s[this.i]
      this.dic[c] = (this.dic[c] || 0) + 1
      this.str += c
      this.i++
    }
    remove() {
      let c = this.str[0]
      this.dic[c]--
      this.str = this.str.substr(1)
    }
    contains() {
      for (let i = 0; i < t.length; i++) {
        if (!this.dic[t[i]]) return false
      }
      return true
    }
  }
  let min = s.length, rtn = '', w = new W()
  while (true) {
    if (!w.contains()) {
      //头挪一步
      if (w.i == s.length) break
      w.add()
      continue
    }
    //包含
    if (w.str.length < min) {
      min = w.str.length
      rtn = w.str
    }
    //尾巴挪一步
    w.remove()
  }
  return rtn
};

console.log(minWindow('ADOBECODEBANC', 'ABC'))
//"BANC"