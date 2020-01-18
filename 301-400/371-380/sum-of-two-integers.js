/**
 * @param {number} a
 * @param {number} b
 * @return {number}
 */
var getSum = function (a, b) {
  let absA = Math.abs(a)
  let absB = Math.abs(b)
  if (a > 0) {
    if (b > 0) {
      return bitAdd(absA, absB)
    } else {
      if (absA > absB) {
        return bitSub(absA, absB)
      }
      return b / absB * bitSub(absB, absA)
    }
  }
  // a<0
  if (b > 0) {
    if (absB > absA) {
      return bitSub(absB, absA)
    }
    return a / absA * bitSub(absA, absB)
  }
  //a<0&&b<0
  return a / absA * bitAdd(absA, absB)


  /**
   * 
   * @param {*} a a has to be the bigger one
   * @param {*} b 
   */
  function bitSub(a, b) {
    let rtn = 0, step = 0, cur = 1
    while (cur && cur < Number.MAX_SAFE_INTEGER) {
      let ba = curBit(a), bb = curBit(b)
      let thisBit = ba ^ bb ^ step
      step = ((step & bb) || (!ba && (step || bb))) ? cur << 1 : 0
      if (thisBit) rtn |= cur
      cur = cur << 1
    }
    return rtn

    function curBit(x) {
      return x & cur
    }
  }

  /**
   * 
   * @param {*} a 
   * @param {*} b 
   */
  function bitAdd(a, b) {
    let rtn = 0, step = 0, cur = 1
    while (cur && cur < Number.MAX_SAFE_INTEGER) {
      let ba = curBit(a), bb = curBit(b)
      let thisBit = ba ^ bb ^ step
      step = ((ba & bb) || (bb & step) || (step & ba)) ? cur << 1 : 0
      if (thisBit) rtn |= cur
      cur = cur << 1
    }
    return rtn

    function curBit(x) {
      return x & cur
    }
  }
};

// console.log(getSum(20, 30))
// console.log(getSum(1, 2))

// console.log(getSum(-2, 3))