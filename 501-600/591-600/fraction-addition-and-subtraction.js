/**
 * @param {string} expression
 * @return {string}
 */
var fractionAddition = function (expression) {
  class Fraction {
    constructor(top, buttom) {
      this.top = top
      this.buttom = buttom
    }

    add(val = new Fraction(0, 1)) {
      this.top = this.top * val.buttom + this.buttom * val.top
      this.buttom = this.buttom * val.buttom
      this.normalize()
    }

    normalize() {
      if (this.top === 0) {
        this.buttom = 1
        return
      }
      if ((this.top % this.buttom) === 0) {
        this.top /= this.buttom
        this.buttom = 1
        return
      }
      outer:
      while (true) {
        for (let i = 2; i <= Math.sqrt(this.buttom); i++) {
          if ((this.top % i) === 0 && (this.buttom % i) === 0) {
            this.top /= i
            this.buttom /= i
            continue outer
          }
        }
        break
      }
    }

    toString() {
      return `${this.top}/${this.buttom}`
    }
  }
  let curVal = new Fraction(0, 1), top = '', buttom = '', isTop = true
  for (let char of expression) {
    if (char === '/') {
      isTop = false
      continue
    }
    if (char === '+' || char === '-') {
      if (top.length) {
        curVal.add(new Fraction(parseInt(top), parseInt(buttom)))
      }
      top = char
      buttom = ''
      isTop = true
      continue
    }
    isTop ? top += char : buttom += char
  }
  top && curVal.add(new Fraction(parseInt(top), parseInt(buttom)))
  return curVal.toString()
};

// console.log(fractionAddition("-1/2+1/2"), '0/1')
// console.log(fractionAddition("-1/2+1/2+1/3"), '1/3')
// console.log(fractionAddition("1/3-1/2"), '-1/6')