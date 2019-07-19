/**
 * @param {string} n
 * @return {string}
 */
var smallestGoodBase = function (n) {
  const dic = {}
  for (let i = 0; i < 10; i++) {
    dic[i] = i
  }
  for (let k = 2; ; k++) {
    if (isGood(k)) return k
  }

  function isGood(k) {
    let t = 1, n1 = n, kstr = k + ''
    while (n1) {
      n1 = strSub1(n1)
      if (n1 == kstr) return true
    }
    return false
  }

  function strSub1(str = '') {
    let borrow = true
    for (let i = str.length - 1; i >= 0; i--) {
      if (!borrow) {
        break
      }
      borrow = false
      let v = dic[str[i]]
      if (v == 0) {
        v = 10
        borrow = true
      }
      let left = v - 1
      str[i] = '' + left
    }
    return str
  }

  function strDiv(str = '', num) {
    
  }
};

