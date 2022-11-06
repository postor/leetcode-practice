
const CHAR_ADD_DICS = getCharAddDics()

/**
 * @param {string} num1
 * @param {string} num2
 * @return {string}
 */
var addStrings = function (num1, num2) {
  let rtn = [], n1 = num1.split(''), n2 = num2.split(''), step = 0
  while (n1.length || n2.length || step) {
    let [step1, char] = CHAR_ADD_DICS[step][n1.pop() || '0'][n2.pop() || '0']
    step = step1
    rtn.unshift(char)
  }
  return rtn.join('')
};

function getCharAddDics() {
  let dic = {}, dic1 = {}
  for (let i = 0; i < 10; i++) {
    dic[i] = {}, dic1[i] = {}
    for (let j = 0; j < 10; j++) {
      let sum = i + j
      dic[i][j] = [sum > 9 ? 1 : 0, sum % 10]
      let sum1 = sum + 1
      dic1[i][j] = [sum1 > 9 ? 1 : 0, sum1 % 10]
    }
  }
  return [dic, dic1]
}

// console.log(addStrings('199', '5'))