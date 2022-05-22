/**
 * @param {string} s
 * @param {number[]} shifts
 * @return {string}
 */
var shiftingLetters = function (s, shifts) {
  console.log({s:s.length,shifts:shifts.length})
  let a2z = new Array(26).fill(0).map((x, i) => String.fromCharCode(i + 97))
  let arr = [...s].map(x => x.charCodeAt(0) - 97)

  for (let i = 0; i < shifts.length; i++) {
    let c = shifts[i] % 26
    if (c) {
      for (let j = 0; j <= Math.min(arr.length - 1, i); j++) {
        arr[j] = (arr[j] + c) % 26
      }
    }
  }

  return arr.map(x => a2z[x]).join('')

};

// console.log(shiftingLetters("abc", [3, 5, 9])) // "rpl"
// console.log(shiftingLetters("aaa", [1, 2, 3])) // "gfd"

console.time()
console.log(shiftingLetters(...require('./shifting-letters.json')))
console.timeEnd()