/**
 * @param {string} n
 * @return {string}
 */
var nearestPalindromic = function (n) {
  if (n.length == 1) {
    if (n == '0') return 1
    return (parseInt(n) - 1) + ''
  }

  let left = n.substr(0, Math.floor(n.length / 2))
  let center = n.length % 2 ? BigInt(n[(n.length - 1) / 2]) : false
  let leftNum = BigInt(left), centerNum = center === false ? false : BigInt(center)
  let num = BigInt(n), t = getNum(left, center)
  if (t == num) {
    let bigger = getNext()
    left = n.substr(0, Math.floor(n.length / 2))
    center = n.length % 2 ? BigInt(n[(n.length - 1) / 2]) : false
    leftNum = BigInt(left), centerNum = center === false ? false : BigInt(center)
    let smaller = getPrev()
    if (bigger - num < num - smaller) return bigger + ''
    return smaller + ''
  }
  if (t > num) {
    let lastdiff, last
    while (t > num) {
      last = t
      lastdiff = t - num
      t = getPrev()
    }
    let diff = num - t
    if (lastdiff < diff) return last + ''
    return t + ''
  }
  let lastdiff, last
  while (t < num) {
    last = t
    lastdiff = num - t
    t = getNext()
  }
  let diff = t - num
  if (diff < lastdiff) return t + ''
  return last + ''

  function getNext() {
    if (centerNum === false) {
      // even
      let num = leftNum + BigInt(1)
      let numStr = num + ''
      if (numStr.length > left.length) {
        // 左半边进位
        center = '0'
        centerNum = BigInt(0)
        num = num/BigInt(10)
        numStr = num + ''
      }
      left = numStr
      leftNum = num
      return getNum(left, center)
    }

    // odd
    if (centerNum < BigInt(9)) {
      centerNum++
      center = centerNum + ''
      return getNum(left, center)
    }

    let num = leftNum + BigInt(1)
    let numStr = num + ''
    if (numStr.length > left.length) {
      // 左半边进位
      center = false
      centerNum = false
    } else {
      center = '0'
      centerNum = BigInt(0)
    }
    left = numStr
    leftNum = num
    return getNum(left, center)
  }

  function getPrev() {
    if (centerNum === false) {
      // even
      let num = leftNum - BigInt(1)
      let numStr = num == BigInt(0) ? '' : num + ''
      if (num == BigInt(0) || numStr.length < left.length) {
        // 左半边进位
        center = '9'
        centerNum = BigInt(9)
      }
      left = numStr
      leftNum = num
      return getNum(left, center)
    }

    // odd
    if (centerNum > BigInt(0)) {
      centerNum--
      center = centerNum + ''
      return getNum(left, center)
    }

    let num = leftNum - BigInt(1)
    let numStr = num + ''
    if (num == BigInt(0) || numStr.length < left.length) {
      // 左半边进位
      center = false
      centerNum = false
      num = num * BigInt(10) + BigInt(9)
      numStr = num + ''
    } else {
      center = '9'
      centerNum = BigInt(9)
    }
    left = numStr
    leftNum = num
    return getNum(left, center)
  }

  function getNum(left, center) {
    let right = left.split('').reverse().join('')
    return center === false ? BigInt(left + right) : BigInt(left + center + right)
  }

};

// console.log(nearestPalindromic('99'))
// console.log(nearestPalindromic('100001'))
// console.log(nearestPalindromic('10001'))
// console.log(nearestPalindromic('1001'))
// console.log(nearestPalindromic('10'))
// console.log(nearestPalindromic('100'))
// console.log(nearestPalindromic('1'))