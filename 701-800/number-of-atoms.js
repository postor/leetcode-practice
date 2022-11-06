/**
 * @param {string} formula
 * @return {string}
 */
var countOfAtoms = function (formula) {
  let cur = 0

  let countObj = countAtoms()
  let keys = Object.keys(countObj)
  keys.sort()
  return keys.map(x => x + (countObj[x] > 1 ? countObj[x] : '')).join('')

  function countAtoms() {
    let rtn = {}
    while (cur < formula.length) {
      if (formula[cur] == '(') {
        cur++
        let tmp = countAtoms()
        let n = nextNum()
        rtn = add(rtn, product(tmp, n))
        continue
      }
      if (formula[cur] == ')') {
        cur++
        return rtn
      }
      let name = nextAutom(), n = nextNum()
      if (!name) debugger
      rtn[name] = (rtn[name] || 0) + n
    }
    return rtn
  }

  function add(c1, c2) {
    for (let k in c2) {
      c1[k] = (c1[k] || 0) + c2[k]
    }
    return c1
  }

  function product(c, n) {
    for (let k in c) {
      c[k] = n * c[k]
    }
    return c
  }

  function nextNum() {
    let numStr = ''
    while (/[0-9]/.test(formula[cur])) {
      numStr += formula[cur]
      cur++
    }
    return numStr ? Number.parseInt(numStr) : 1
  }
  function nextAutom() {
    let rtn = ''
    if (!/[A-Z]/.test(formula[cur])) return ''
    rtn += formula[cur]
    cur++
    while (cur < formula.length && /[a-z]/.test(formula[cur])) {
      rtn += formula[cur]
      cur++
    }
    return rtn
  }
};

// console.log(countOfAtoms("Mg(OH)2"))
// console.log(countOfAtoms("((N42)24(OB40Li30CHe3O48LiNN26)33(C12Li48N30H13HBe31)21(BHN30Li26BCBe47N40)15(H5)16)14"))

// console.log(countOfAtoms("H2O"))