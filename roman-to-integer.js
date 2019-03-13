/**
 * @param {string} s
 * @return {number}
 */
var romanToInt = function (s) {
  const ones = 'MCXI'
    , fives = 'DLV'
    , arr = []
    , dic = {
      I: 1,
      V: 5,
      X: 10,
      L: 50,
      C: 100,
      D: 500,
      M: 1000,
    }

  let val = 0, cur = 0
  while (true) {
    const { value, end } = parse(cur)
    val += value
    cur = end
    if (cur > s.length - 1) {
      break
    }
  }
  return val

  function parse(start) {
    let str = s[start], end = start
    while (true) {
      end++
      if (end > s.length - 1) {
        break
      }

      //小就要算
      if (dic[s[end]] < dic[s[start]]) {
        break
      }

      str += s[end]
    }

    return {
      end,
      str,
      value: getValue(str)
    }
  }

  function getValue(str) {
    if (str.length > 1) {
      if (dic[str[0]] < dic[str[1]]) {
        return dic[str[1]] - dic[str[0]]
      }
    }

    let total = 0
    for (let i = 0; i < str.length; i++) {
      total += dic[str[i]]
    }
    return total
  }

};

console.log(romanToInt("MCMXCVI"))