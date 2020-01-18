/**
 * @param {string} s
 * @return {string}
 */
var reverseVowels = function (s) {
  let chars = s.split('')
  const dic = {
    A: true,
    E: true,
    I: true,
    O: true,
    U: true,
    a: true,
    e: true,
    i: true,
    o: true,
    u: true,
  }
  let l = 0, r = chars.length - 1
  while (l < r) {
    while (l <= r) {
      if (l == r) return chars.join('')
      if (dic[chars[l]]) break
      l++
    }
    while (r >= l) {
      if (l == r) return chars.join('')
      if (dic[chars[r]]) break
      r--
    }
    let t = chars[l]
    chars[l] = chars[r]
    chars[r] = t
    l++
    r--
  }
  return chars.join('')

};

// console.log(reverseVowels('hello'))