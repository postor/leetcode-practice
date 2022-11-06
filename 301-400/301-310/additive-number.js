/**
 * @param {string} num
 * @return {boolean}
 */
var isAdditiveNumber = function (num) {
  if (!num.length) return false
  return getNumbers(0)
    .some(([v1, i]) => getNumbers(i)
      .some(([v2, j]) => r(v1, v2, j, 2)))

  function r(v1, v2, i, c) {
    if (i == num.length && c > 2) return true
    let sum = v1 + v2
    let sumStr = sum + ''
    for (let j = 0; j < sumStr.length; j++) {
      if (sumStr[j] != num[i + j]) return false
    }
    return r(v2, sum, i + sumStr.length, c + 1)
  }

  function getNumbers(i) {
    if (i >= num.length) return []
    if (num[i] == '0') return [[0, i + 1]]
    let rtn = []
    for (let j = i + 1; j < num.length; j++) {
      let exp = num.slice(i, j)
      let n = parseInt(exp)
      rtn.push([n, j])
    }
    return rtn
  }
};

// console.log(isAdditiveNumber('112358'))