/**
 * @param {number} n
 * @return {number}
 */
var largestPalindrome = function (n) {
  // 最大数最小数，如n=2则n1=99 n2=10
  let n1 = BigInt(Math.pow(10, n) - 1), n2 = BigInt(Math.pow(10, n - 1))
  // 乘积最大，如99*99
  let max = n1 * n1
  let len = ('' + max).length
  let minLen = (n2 * n2 + '').length
  while (len >= minLen) {
    if (len % 2) {
      // 奇数
      let num = findOdd((len - 1) / 2)
      if (num) return num % BigInt(1337)
    }
    let num = findEven(len / 2)
    if (num) return num % BigInt(1337)
    len--
  }
  return -1

  function findOdd(len) {
    if (!len) {
      for (let i = BigInt(9); i >= BigInt(0); i--) {
        if (canDivide(i)) return i
      }
      return 0
    }
    let left = Math.pow(10, len) - 1
    let min = Math.pow(10, len - 1)
    while (left >= min) {
      let leftStr = '' + left
      for (let centerNum = 9; centerNum >= 0; centerNum--) {
        // 找到对称数
        let num = BigInt(leftStr + centerNum + reverse(leftStr))
        if (num > max) {
          left--
          leftStr = left + ''
          continue
        }
        // 判断是否是乘积
        if (canDivide(num)) return num
      }
      left--
    }
    return 0
  }

  function findEven(len) {
    let left = Math.pow(10, len) - 1
    let min = Math.pow(10, len - 1)
    while (left >= min) {
      let leftStr = '' + left
      // 找到对称数
      let num = BigInt(leftStr + reverse(leftStr))
      if (num > max) {
        left--
        leftStr = left + ''
        continue
      }
      // 判断是否是乘积
      if (canDivide(num)) return num
      left--
    }
    return 0
  }

  function reverse(str = '') {
    let rtn = ''
    for (let i = 0; i < str.length; i++) {
      rtn = str[i] + rtn
    }
    return rtn
  }

  function canDivide(num) {
    for (let i = n1; i >= n2; i--) {
      let j = num / i
      if (j > i) break
      if (0 == (num % i)) {
        if (j >= n2 && j <= n1) {
          return true
        }
      }
    }
    return false
  }

};
// for (let i = 1; i <= 8; i++) {
//   console.time()
//   console.log(largestPalindrome(i))
//   console.timeEnd()
// }
// console.log(largestPalindrome(2))