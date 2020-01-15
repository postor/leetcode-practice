/**
 * @param {number} num
 * @return {string}
 */
var numberToWords = function (num) {
  if (!num) return 'Zero'
  const wordDic = getWordDic()
  const afterFix = [0, 0, 100, 1000, 0, 100, 1000000, 0, 100, 1000000000, 0, 100, 1000, 0, 0, 100]
  const mustHaveFix = [0, 0, 0, 1000, 0, 0, 1000000, 0, 0, 1000000000, 0, 0, 1000, 0, 0, 100]
  const zeroClearMust = [0, 0, 0, 0, 0, 0, 1000000, 0, 0, 1000000000, 0, 0, 0, 0, 0, 0]
  let rtn = [], t = num, lastM = 0, hadValue = false
  for (let i = 0; i < afterFix.length; i++) {
    let zeroCount = i % 3
    let m = t % 10
    if (m || mustHaveFix[i]) {
      if (!hadValue && zeroClearMust[i]) { // case 1000000
        rtn.shift()
      }
      if (afterFix[i]) {
        rtn.unshift(wordDic[afterFix[i]])
      }
    }
    if (zeroCount == 0) {
      hadValue = false
    }
    if (m) {
      if (zeroCount == 1) {
        if (m == 1) {
          if (lastM) rtn.shift()
          rtn.unshift(wordDic[m * 10 + lastM])
        } else {
          rtn.unshift(wordDic[m * 10])
        }
      } else {
        rtn.unshift(wordDic[m])
      }
      hadValue = true
    }
    t -= m
    if (!t) break
    t /= 10
    lastM = m
  }
  return rtn.join(' ')


  function getWordDic() {
    return {
      1: 'One',
      2: 'Two',
      3: 'Three',
      4: 'Four',
      5: 'Five',
      6: 'Six',
      7: 'Seven',
      8: 'Eight',
      9: 'Nine',
      10: 'Ten',
      11: 'Eleven',
      12: 'Twelve',
      13: 'Thirteen',
      14: 'Fourteen',
      15: 'Fifteen',
      16: 'Sixteen',
      17: 'Seventeen',
      18: 'Eighteen',
      19: 'Nineteen',
      20: 'Twenty',
      30: 'Thirty',
      40: 'Forty',
      50: 'Fifty',
      60: 'Sixty',
      70: 'Seventy',
      80: 'Eighty',
      90: 'Ninety',
      100: 'Hundred',
      1000: 'Thousand',
      1000000: 'Million',
      1000000000: 'Billion',
    }
  }
};

// [1000010, 1000000, 10000, 123, 12345, 1234567, 1234567891].map(x => {
//   console.log(x, numberToWords(x))
// })