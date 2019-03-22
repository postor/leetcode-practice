/**
 * @param {number} num
 * @return {string}
 */
var intToRoman = function (num) {
  const ones = 'IXCM'
    , fives = 'VLD'
    , arr = []

  let n = num, onei = 0, fivei = 0

  while (true) {
    const i = n % 10
    arr.unshift(getI(i))
    n = (n - i) / 10
    if (n < 1) {
      break
    }
    onei++
    fivei++
  }
  return arr.join('')

  function getI(i) {
    if (i <= 5) {
      if (i < 4) {
        return Array(i).fill(ones[onei]).join('')
      }
      return Array(5 - i).fill(ones[onei]).join('') + fives[fivei]
    }

    if (i < 9) {
      return fives[fivei] + Array(i - 5).fill(ones[onei]).join('')
    }

    return Array(10 - i).fill(ones[onei]).join('') + ones[onei + 1]
  }

};


//console.log(intToRoman(1994)) //"MCMXCIV"
console.log(intToRoman(58)) //"LVIII"