/**
 * @param {character[]} letters
 * @param {character} target
 * @return {character}
 */
var nextGreatestLetter = function (letters, target) {
  let aCode = 'a'.charCodeAt(0), codes = new Array(26).fill(false)

  for (let char of letters) {
    codes[char.charCodeAt(0) - aCode] = true
  }

  let t = (target.charCodeAt(0) - aCode + 1) % 26
  while (true) {
    if (codes[t]) return String.fromCharCode(t + aCode)
    t = (t + 1) % 26
  }
};

// console.log(nextGreatestLetter(
//   ["a", "b", "c", "d", "e", "f", "g", "h", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"]
//   , "z"
// ))