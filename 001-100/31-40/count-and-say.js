/**
 * @param {number} n
 * @return {string}
 */
var countAndSay = function (n) {
  return s(n)
  function s(n) {
    if (n == 1) {
      return '1'
    }
    let rtn = '', str = s(n - 1), cur = str[0], count = 1
    for (let i = 1; i < str.length; i++) {
      if (cur == str[i]) {
        count++
        continue
      }
      rtn += count + cur
      count = 1
      cur = str[i]
    }
    rtn += count + cur
    return rtn
  }
};

console.log(countAndSay(1))
console.log(countAndSay(2))
console.log(countAndSay(3))
console.log(countAndSay(4))