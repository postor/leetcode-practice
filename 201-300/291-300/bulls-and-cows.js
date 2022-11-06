/**
 * @param {string} secret
 * @param {string} guess
 * @return {string}
 */
var getHint = function (secret, guess) {
  let a = 0, b = 0, bulls = [], crows = [], crows2 = []
  for (let i = 0; i < guess.length; i++) {
    if (guess[i] === secret[i]) {
      a++
      bulls[i] = true
    }
  }
  for (let i = 0; i < guess.length; i++) {
    if (bulls[i]) continue
    for (let j = 0; j < secret.length; j++) {
      if (
        guess[i] == secret[j]
        && !crows[j]
        && !bulls[j]
        && !crows2[i]
      ) {
        b++
        crows[j] = true
        crows2[i] = true
      }
    }
  }
  return `${a}A${b}B`
};

console.log(getHint('1122', '0001'))

console.log(getHint('1123', '0111'))
console.log(getHint('1807', '7810'))