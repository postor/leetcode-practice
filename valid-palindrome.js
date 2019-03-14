/**
 * @param {string} s
 * @return {boolean}
 */
var isPalindrome = function (s) {
  s = s.toLowerCase()
  let i = 0, j = s.length - 1, a = 'a'.charCodeAt(0), z = 'z'.charCodeAt(0), offset = a - a
  let code0='0'.charCodeAt(0),code9='9'.charCodeAt(0)
  while (i < j) {
    let charcodeI = s[i].charCodeAt(0)
    if (!isValid(charcodeI)) {
      i++
      continue
    }
    let charcodeJ = s[j].charCodeAt(0)
    if (!isValid(charcodeJ)) {
      j--
      continue
    }
    if (charcodeI != charcodeJ) {
      return false
    }
    i++;
    j--;
  }
  return true

  function isValid(charcode){
    if (charcode >= a && charcode <= z) {
      return true
    }
    if(charcode>=code0&&charcode<=code9){
      return true
    }
    return false
  }
};
console.log(isPalindrome("race a car"))

//console.log(isPalindrome("A man, a plan, a canal: Panama"))