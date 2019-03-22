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



  let rtn = '', steps

  for (let i = 0; i < num2.length; i++) {

  }



};

console.log(plus('123', '48'));

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
    let lastStep = step ? '1' : '0'
    let ge = plus(r[r.length - 1], lastStep)
    step = r.length - 1
    rtn = ge + rtn
  }
  if (step) {
    rtn = '1' + rtn
  }
  return rtn
}