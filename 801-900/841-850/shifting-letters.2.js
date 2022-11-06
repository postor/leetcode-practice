/**
 * @param {string} s
 * @param {number[]} shifts
 * @return {string}
 */
var shiftingLetters = function (s, shifts) {
  
  let a2z = new Array(26).fill(0).map((x, i) => String.fromCharCode(i + 97))
  let arr = [...s].map(x => x.charCodeAt(0) - 97)

  let shifts1 = getShifts()
  for (let i = 0; i < shifts1.length; i++) {
    arr[i] = (arr[i] + shifts1[i]) % 26
  }

  return arr.map(x => a2z[x]).join('')

  function getShifts(){
    let rtn = shifts.map(x=>x)
    for(let i=rtn.length-2;i>=0;i--){
      rtn[i]=(rtn[i+1]+rtn[i])%26
    }
    return rtn
  }
};

console.log(shiftingLetters("abc", [3, 5, 9])) // "rpl"
console.log(shiftingLetters("aaa", [1, 2, 3])) // "gfd"

console.time()
console.log(shiftingLetters(...require('./shifting-letters.json')))
console.timeEnd()