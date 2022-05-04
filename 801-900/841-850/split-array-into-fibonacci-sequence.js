/**
 * @param {string} num
 * @return {number[]}
 */
var splitIntoFibonacci = function (num) {
  let charAddDic = getCharAddDic()

  let rtn = find()
  if (rtn) return rtn
  return []


  function find() {
    let start = 0
    for (let firstEnd = start; firstEnd <= (num[start] === '0' ? start : num.length - 3); firstEnd++) {
      for (let secondEnd = firstEnd + 1;
        secondEnd <= (num[firstEnd + 1] === '0' ? num[firstEnd] + 1 : num.length - 2);
        secondEnd++
      ) {
        let thirdOnes = charAddDic[num[firstEnd]][num[secondEnd]]
        for (let thirdEnd = secondEnd + 1; thirdEnd < num.length; thirdEnd++) {
          if (num[thirdEnd] === thirdOnes) {
            let [rtn, larger] = verify(start, firstEnd, secondEnd, thirdEnd)
            if (rtn) return rtn
            if (larger) break
          }
        }
      }
    }
  }

  function verify(start, firstEnd, secondEnd, thirdEnd) {
    let n1 = num.substring(start, firstEnd + 1)
      , n2 = num.substring(firstEnd + 1, secondEnd + 1)
      , n3 = num.substring(secondEnd + 1, thirdEnd + 1)
    let arr = [n1, n2, n3].map(x => Number.parseInt(x))
    let [a1, a2, a3] = arr
    if ((a1 + a2) === a3) {
      if (thirdEnd <= num.length - 1) {
        let [ok, rtn] = verifyTillEnd(a2, a3, thirdEnd + 1, arr)
        if (ok) return [rtn, false]
      }
    }
    if ((a1 + a2) < a3) {
      return [, true]
    }
    return [, false]
  }

  function verifyTillEnd(a, b, start, history = []) {
    if (start === num.length) return [true, history]
    let c = a + b
    let str = '' + c
    let nextStart = start + str.length
    if (nextStart > num.length) return [false]
    for (let i = 0; i < str.length; i++) {
      if (num[start + i] !== str[i]) return [false]
    }
    return verifyTillEnd(b, c, nextStart, [...history, c])
  }

  // use a dic to early stop, by verify ones place
  function getCharAddDic() {
    let rtn = {}, arr = new Array(10).fill(0).map((x, i) => i)
    arr.forEach(x => {
      let sx = '' + x
      rtn[sx] = {}
      arr.forEach(y => {
        let sy = '' + y, r = '' + (x + y)
        rtn[sx][sy] = r[r.length - 1]
      })
    })
    return rtn
  }
};

console.log(splitIntoFibonacci("1101111"))
console.log(splitIntoFibonacci("112358130"))
console.log(splitIntoFibonacci("0123"))
console.log(splitIntoFibonacci("123456579")) // [123,456,579]
