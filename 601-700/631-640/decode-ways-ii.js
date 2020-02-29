/**
 * @param {string} s
 * @return {number}
 */
var numDecodings = function (s) {
  if (!s.length) return 1
  const dic = getDic(), mod = Math.pow(10, 9) + 7
  let dp0 = new Array(s.length).fill(0), // dp0[i] = count('0'+s.substr(i+1))
    dp16 = new Array(s.length).fill(0), // dp0[i] = count('[1-6]'+s.substr(i+1))
    dp79 = new Array(s.length).fill(0), // dp0[i] = count('[7-9]'+s.substr(i+1))
    dpNoneJoin = new Array(s.length).fill(0) // no mater with wich substrStarts, these can only count separately 

  dp0[s.length - 1] = get0(s[s.length - 1])
  dp16[s.length - 1] = get16(s[s.length - 1])
  dp79[s.length - 1] = get79(s[s.length - 1])

  for (let i = s.length - 2; i >= 0; i--) {
    switch (s[i]) {
      case '*': {
        dpNoneJoin[i] = (count1Join(i) + count2Join(i)) % mod
        dp16[i] = (count1(i) + count2(i) + count3more(i) * 4) % mod
        dp79[i] = count3more(i) * 3 % mod
      }
        break
      case '0': {
        dp0[i] = count0(i) % mod
      }
        break
      case '1': {
        dpNoneJoin[i] = count1Join(i) % mod
        dp16[i] = count1(i) % mod
      }
        break
      case '2': {
        dpNoneJoin[i] = count2Join(i) % mod
        dp16[i] = count2(i) % mod
      }
        break
      default: {
        let num = dic[s[i]]
        if (num > 6) {
          dp79[i] = count3more(i) % mod
        } else {
          dp16[i] = count3more(i) % mod
        }
      }
        break
    }
  }
  return (dp16[0] + dp79[0] + dpNoneJoin[0]) % mod

  function count0(i) {
    return dp16[i + 1] + dp79[i + 1] + dpNoneJoin[i + 1]
  }

  function count1Join(i) {
    return dp0[i + 1] + dp16[i + 1] + dp79[i + 1]
  }
  function count1(i) {
    return dp16[i + 1] + dp79[i + 1] + dpNoneJoin[i + 1]
  }
  function count2Join(i) {
    return dp0[i + 1] + dp16[i + 1]
  }
  function count2(i) {
    return dp16[i + 1] + dp79[i + 1] + dpNoneJoin[i + 1]
  }
  function count3more(i) {
    return dp16[i + 1] + dp79[i + 1] + dpNoneJoin[i + 1]
  }
  function get0(char) {
    return char === '0' ? 1 : 0
  }
  function get16(char) {
    if (char === '*') return 6
    if (dic[char] > 0 && dic[char] < 7) return 1
    return 0
  }
  function get79(char) {
    if (char === '*') return 3
    if (dic[char] > 6 && dic[char] < 10) return 1
    return 0
  }

  function getDic() {
    let dic = {}
    for (let i = 0; i < 10; i++) {
      dic[i] = i
    }
    return dic
  }
};
// console.log(numDecodings("1*"), 18)
// console.log(numDecodings("3*"), 9)
// console.log(numDecodings('***'),999)
// console.log(numDecodings("*1*1*0"), 404)