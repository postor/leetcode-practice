/**
 * @param {number} numerator
 * @param {number} denominator
 * @return {string}
 */
var fractionToDecimal = function (numerator, denominator) {
  if (denominator == 0) return Infinity
  if (numerator == 0) return '0'
  let plus = (denominator > 0 && numerator > 0) || (denominator < 0 && numerator < 0)
  let offset = numerator % denominator
  let beforeDotNum = (numerator - offset) / denominator
  let left = Math.abs(offset), n = Math.abs(denominator)
  const beforeDot = (!plus && !beforeDotNum && left) ? '-' + beforeDotNum + '' : beforeDotNum + ''
  if (!left) return beforeDot

  let cache = {}, cacheArr = [], afterDot = ''
  while (true) {
    let rtn = cc(left)
    if (!rtn[2]) {
      afterDot += rtn[0]
      left = rtn[1]
      //没有循环    
      if (!rtn[1]) return beforeDot + '.' + afterDot
      continue
    }
    //遇到循环
    let index = cacheArr.indexOf(rtn[1])
    afterDot = afterDot.slice(0, index) + '(' + afterDot.slice(index) + ')'
    return beforeDot + '.' + afterDot
  }

  function cc(left) {
    let l = left * 10
    let offset = l % n
    let key = `${left}_${n}`

    if (cache[key]) {
      let rtn = cache[key].concat()
      rtn[1] = key
      rtn[2] = true
      return rtn
    }
    cacheArr.push(key)
    cache[key] = [(l - offset) / n, offset, false]
    return cache[key]
  }
};


console.log(fractionToDecimal(1, 214748364))
