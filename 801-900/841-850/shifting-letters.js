/**
 * @param {string} s
 * @param {number[]} shifts
 * @return {string}
 */
var shiftingLetters = function (s, shifts) {
  let a2z = new Array(26).fill(0).map((x, i) => String.fromCharCode(i + 97))
  let arr = [...s]
  for (let i = 0; i < shifts.length; i++) {    
    for (let j=0;j<=Math.min(arr.length-1,i);j++){
      arr[j]=shift(arr[j],shifts[i])
    }
  }

  return arr.join('')


  function shift(str = '', times) {
    let i = str.charCodeAt(0) - 97
    return a2z[(i + times) % 26]
  }
};

console.log(shiftingLetters( "abc",  [3,5,9])) // "rpl"
console.log(shiftingLetters( "aaa",  [1,2,3])) // "gfd"