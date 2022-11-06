/**
 * @param {string} s
 * @param {number} k
 * @return {string}
 */
var decodeAtIndex = function (s, k) {
  class Repeated {
    constructor(repeat, str, times = 1) {
      this.repeat = repeat
      this.str = str
      this.times = times
      this.single = (repeat ? repeat.total : 0)
        + (str ? str.length : 0)
      this.total = this.single * times

    }


    getCharAt(i) {
      let left = i % this.single
      if (this.repeat) {
        if (this.repeat.total > left) {
          return this.repeat.getCharAt(left)
        }
        return this.str[left - this.repeat.total]
      }
      return this.str[left]
    }
  }

  let repeat = getRepeated(s.split(''))
  return repeat.getCharAt(k - 1)


  function getRepeated(arr = ['']) {
    let rtn = '', repeat = undefined
    for (let char of arr) {
      let code = char.charCodeAt(0)
      if (code > 48 && code < 58) {
        // number
        repeat = new Repeated(repeat, rtn, code - 48)
        rtn = ''
      } else {
        rtn += char
      }
    }
    return new Repeated(repeat, rtn, 1)
  }
};

console.log(decodeAtIndex('leet2code3', 10))
console.log(decodeAtIndex('ha22', 5))
console.log(decodeAtIndex('a2345678999999999999999', 1)) 