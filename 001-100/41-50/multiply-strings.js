let mul = {}, plu = {}

for (let i = 0; i < 10; i++) {
  mul['' + i] = {}
  plu['' + i] = {}
  for (let j = 0; j < 10; j++) {
    mul['' + i]['' + j] = i * j + ''
    plu['' + i]['' + j] = i + j + ''
  }
}

/**
 * @param {string} num1
 * @param {string} num2
 * @return {string}
 */
var multiply = function (num1, num2) {
  let arr = [], ipading = ''
  for (let i = num2.length - 1; i >= 0; i--) {
    let jpadding = ''
    for (let j = num1.length - 1; j >= 0; j--) {
      let layer = mul[num2[i]][num1[j]] + ipading + jpadding
      arr.push(layer)
      jpadding += '0'
    }
    ipading += '0'
  }
  let result = arr.reduce((x, y) => plus(x, y))
  return trimLeft0(result)
};


function plus(str1, str2) {
  if (str1 == '0') return str2
  if (str2 == '0') return str1
  if (str1.length < str2.length) {
    return plus(str2, str1)
  }
  var step = '', rtn = ''
  for (let i = 0; i < str1.length; i++) {
    let c1 = str1[str1.length - 1 - i]
    let c2 = (i > str2.length - 1) ? '0' : str2[str2.length - 1 - i]
    let r = plu[c1][c2]
    let thisStep = r.length - 1
    let lastStep = step ? '1' : '0'
    let ge = plus(r[r.length - 1], lastStep)
    step = thisStep || ge.length - 1
    rtn = ge[ge.length - 1] + rtn
  }
  if (step) {
    rtn = '1' + rtn
  }
  return rtn
}

function trimLeft0(str) {
  for (let i = 0; i < str.length; i++) {
    if (str[i] != '0') {
      return str.substr(i)
    }
  }
  return '0'
}

console.log(plus('99999', '1'));