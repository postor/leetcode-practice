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
      let tMeta = {}
      for (let i = 0; i < t.length; i++) {
        tMeta[t[i]] = (tMeta[t[i]] || 0) + 1
      }
      this.t = tMeta
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
      return Object.keys(this.t).every(k => {
        return (this.dic[k] || 0) >= this.t[k]
      })
    }
  }
  let min = s.length + 1, rtn = '', w = new W()
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


console.log({ result: minWindow('aa', 'aa') })

// console.log(minWindow('ADOBECODEBANC', 'ABC'))
//"BANC"